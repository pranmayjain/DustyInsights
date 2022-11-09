import React, { useContext } from "react";
import { useState } from "react";
import newsContext from "./context/newsContext";

const AddNews = () => {
  const context = useContext(newsContext);
  const { addNews } = context;

  const [news, setNews] = useState({
    title: "",
    description: "",
    content: "",
    url: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNews(news.title, news.description, news.content, news.url, news.tag);
    setNews({
      title: "",
      description: "",
      content: "",
      url: "",
      tag: "",
    });
  };

  const onChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <h3 className="text-center my-5">Add News</h3>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={news.title}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={news.description}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="content">
            Content
          </label>
          <input
            type="text"
            id="content"
            name="content"
            value={news.content}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="url">
            Url
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={news.url}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="tag">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={news.tag}
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-danger btn-block"
          onClick={handleClick}
          disabled={
            news.title.length < 5 ||
            news.description.length < 5 ||
            news.content.length < 5 ||
            news.url.length < 5
          }
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
