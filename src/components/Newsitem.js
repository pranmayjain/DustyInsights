import React from "react";
import { useContext } from "react";
import newsContext from "./context/newsContext";

const Newsitem = (props) => {
  const context = useContext(newsContext);
  const { deleteNews } = context;
  const { news, updateNews } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{news.title}</h5>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNews(news._id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNews(news);
              }}
            ></i>
          </div>
          <a href={news.url} className="text-decoration-none text-dark">
            <b>Url:</b> <span className="text-danger">{news.url}</span>
          </a>
          <p className="card-text">
            <b>Description:</b> {news.description.substring(0, 100)}...
          </p>
          <p className="card-text">
            <b>Content:</b> {news.content.substring(0, 200)}...
          </p>
          <p className="card-text">
            <b>Tag:</b> {news.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
