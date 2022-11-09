import { useState } from "react";
import NewsContext from "./newsContext";

const NewsState = (props) => {
  const host = "http://localhost:5000";
  const newsInitial = [];

  const [news, setNews] = useState(newsInitial);

  // All News
  const allNews = async () => {
    // API Call
    const response = await fetch(`${host}/api/news/allnews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNews(json);
  };

  // Get all News
  const getNews = async () => {
    // API Call
    const response = await fetch(`${host}/api/news/fetchallnews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNews(json);
  };

  // Add a News
  const addNews = async (title, description, content, url, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/news/addnews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, content, url, tag }),
    });
    const newss = await response.json();
    setNews(news.concat(newss));
  };

  // Delete a News
  const deleteNews = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/news/deletenews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const newNews = news.filter((newss) => {
      return newss._id !== id;
    });
    setNews(newNews);
  };

  //Edit a News
  const editNews = async (id, title, description, content, url, tag) => {
    // API Call
    const response = await fetch(`${host}/api/news/updatenews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, content, url, tag }),
    });

    let newNews = JSON.parse(JSON.stringify(news));
    // Logic to edit in client
    for (let index = 0; index < newNews.length; index++) {
      const element = newNews[index];
      if (element._id === id) {
        newNews[index].title = title;
        newNews[index].description = description;
        newNews[index].content = content;
        newNews[index].url = url;
        newNews[index].tag = tag;
        break;
      }
    }
    setNews(newNews);
  };

  return (
    <NewsContext.Provider
      value={{ news, addNews, deleteNews, editNews, getNews, allNews }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
