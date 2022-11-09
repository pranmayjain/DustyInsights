import React from "react";
import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import AddNews from "./AddNews";
import newsContext from "./context/newsContext";
import Newsitem from "./Newsitem";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  let navigate = useNavigate();
  const context = useContext(newsContext);
  const { news, getNews, editNews } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNews();
    } else {
      navigate("/adminsignin");
    }
  }, []);

  const [newss, setNews] = useState({
    id: "",
    etitle: "",
    edescription: "",
    econtent: "",
    eurl: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNews = (currentNews) => {
    ref.current.click();
    setNews({
      id: currentNews._id,
      etitle: currentNews.title,
      edescription: currentNews.description,
      econtent: currentNews.content,
      eurl: currentNews.url,
      etag: currentNews.tag,
    });
  };

  const handleClick = (e) => {
    editNews(
      newss.id,
      newss.etitle,
      newss.edescription,
      newss.econtent,
      newss.eurl,
      newss.etag
    );
    refClose.current.click();
  };

  const onChange = (e) => {
    setNews({ ...newss, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link
          to="/"
          className="btn-close my-5 mx-5 text-right shadow-none"
          aria-label="Close"
        ></Link>
      </div>
      <div className="container">
        <AddNews />
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          ref={ref}
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit News
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <h3 className="text-center">Add News</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="etitle">
                      Title
                    </label>
                    <input
                      type="text"
                      id="etitle"
                      name="etitle"
                      value={newss.etitle}
                      className="form-control"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="edescription">
                      Description
                    </label>
                    <input
                      type="text"
                      id="edescription"
                      name="edescription"
                      value={newss.edescription}
                      className="form-control"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="econtent">
                      Content
                    </label>
                    <input
                      type="text"
                      id="econtent"
                      name="econtent"
                      value={newss.econtent}
                      className="form-control"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="eurl">
                      Url
                    </label>
                    <input
                      type="text"
                      id="eurl"
                      name="eurl"
                      value={newss.eurl}
                      className="form-control"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="etag">
                      Tag
                    </label>
                    <input
                      type="text"
                      id="etag"
                      name="etag"
                      value={newss.etag}
                      className="form-control"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  disabled={
                    newss.etitle.length < 5 ||
                    newss.edescription.length < 5 ||
                    newss.etitle.length < 5 ||
                    newss.edescription.length < 5
                  }
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Update News
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <h3 className="text-center">News</h3>
          <div className="container">
            {news.length === 0 && "No News to display"}
          </div>
          {news.map((news) => {
            return (
              <Newsitem key={news._id} updateNews={updateNews} news={news} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
