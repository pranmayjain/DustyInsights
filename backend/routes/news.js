const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const News = require("../models/News");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the News using: GET "/api/news/fetchallnews". Login required
router.get("/fetchallnews", fetchuser, async (req, res) => {
  try {
    const news = await News.find({ user: req.user.id });
    res.json(news);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new News using: POST "/api/news/addnews". Login required
router.post(
  "/addnews",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid username").isLength({ min: 5 }),
    body("content", "Enter a valid content").isLength({ min: 5 }),
    body("url", "Enter a valid url").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, content, url, tag } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const news = new News({
        title,
        description,
        content,
        url,
        tag,
        user: req.user.id,
      });
      const savedNews = await news.save();

      res.json(savedNews);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing News using: PUT "/api/news/updatenews". Login required
router.put("/updatenews/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, content, url, tag } = req.body;
    //  Create a newNews object
    const newNews = {};
    if (title) {
      newNews.title = title;
    }
    if (description) {
      newNews.description = description;
    }
    if (content) {
      newNews.content = content;
    }
    if (url) {
      newNews.url = url;
    }
    if (tag) {
      newNews.tag = tag;
    }

    // Find the News to be updated and update it
    let news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).send("Not Found");
    }

    if (news.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    news = await News.findByIdAndUpdate(
      req.params.id,
      { $set: newNews },
      { new: true }
    );
    res.json({ news });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an existing News using: DELETE "/api/news/deletenews". Login required
router.delete("/deletenews/:id", fetchuser, async (req, res) => {
  try {
    // Find the News to be deleted and delete it
    let news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).send("Not Found");
    }

    //Allow deletion only if the user owns this News
    if (news.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    news = await News.findByIdAndDelete(req.params.id);
    res.json({ Success: "News has been deleted", news: news });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 5: Get All the News using: GET "/api/news/allnews". Login not required
router.get("/allnews", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
