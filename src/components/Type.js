import React from "react";
import ButtonLeft from "./Button/ButtonLeft";
import ButtonRight from "./Button/ButtonRight";
import Card from "./Card";
import Headlines from "./Headlines";
import "./Type.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import newsContext from "./context/newsContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Type(props) {
  const context = useContext(newsContext);
  const { news, allNews } = context;
  useEffect(() => {
    allNews();
  }, []);

  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  let tag = Array.from(
    news.map((o) => {
      return o.tag;
    })
  );

  let index = [];
  let i = 0;
  tag = tag.filter(function (item) {
    if (item === props.title) {
      index.push(i);
    }
    i++;
  });

  const title = Array.from(
    news.map((o) => {
      return o.title;
    })
  );

  const description = Array.from(
    news.map((o) => {
      return o.description;
    })
  );
  const content = Array.from(
    news.map((o) => {
      return o.content;
    })
  );
  const url = Array.from(
    news.map((o) => {
      return o.url;
    })
  );

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = toMonthName(mm) + " " + dd + ", " + yyyy;

  const [page, setpage] = useState(1);
  const onClickPrevious = () => {
    setpage(page - 1);
  };

  const onClickNext = () => {
    setpage(page + 1);
  };

  let array = [];

  for (let index = 0; index < page; index++) {
    array.push(index);
  }

  return (
    <div>
      <div style={{ padding: "40px 0px" }}>
        <h1
          className="text-center"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 800,
            fontSize: "70px",
          }}
        >
          {props.title}
        </h1>
        <div className="container my-4 pt-4">
          <div className="row">
            <div className="col-4">
              <Card
                title={title[index[index.length - 1]]}
                url={url[index[index.length - 1]]}
                index={index[index.length - 1]}
              />
            </div>
            <div className="col-4">
              <Card
                title={title[index[index.length - 2]]}
                url={url[index[index.length - 2]]}
                index={index[index.length - 2]}
              />
            </div>
            <div className="col-4">
              <Card
                title={title[index[index.length - 3]]}
                url={url[index[index.length - 3]]}
                index={index[index.length - 3]}
              />
            </div>
            <div className="col-4 my-5">
              <Card
                title={title[index[index.length - 4]]}
                url={url[index[index.length - 4]]}
                index={index[index.length - 4]}
              />
            </div>
            <div className="col-4 my-5">
              <Card
                title={title[index[index.length - 5]]}
                url={url[index[index.length - 5]]}
                index={index[index.length - 5]}
              />
            </div>
            <div className="col-4 my-5">
              <Card
                title={title[index[index.length - 6]]}
                url={url[index[index.length - 6]]}
                index={index[index.length - 6]}
              />
            </div>
          </div>

          <hr />

          <div className="row my-5">
            <div className="col-4">
              <Headlines
                display={"d-none"}
                visible={"d-none"}
                url={url[index[index.length - 7]]}
              />
            </div>
            <div className="col-6">
              <Link
                to={`/blog/${index[index.length - 7]}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
                onClick={onclick}
              >
                <h2 style={{ fontFamily: "Playfair Display", fontWeight: 500 }}>
                  {title[index[index.length - 7]]}
                </h2>
              </Link>
              <div className="row my-2">
                <div className="col-3 mx-1">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Admin
                  </h6>
                </div>
                <div className="col-5">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Published: {today}
                  </h6>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {description[index[index.length - 7]]}
              </p>
            </div>
            <hr className="my-5" />
            <div className="col-4">
              <Headlines
                display={"d-none"}
                visible={"d-none"}
                url={url[index[index.length - 8]]}
              />
            </div>
            <div className="col-6">
              <Link
                to={`/blog/${index[index.length - 8]}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
                onClick={onclick}
              >
                <h2 style={{ fontFamily: "Playfair Display", fontWeight: 500 }}>
                  {title[index[index.length - 8]]}
                </h2>
              </Link>
              <div className="row my-2">
                <div className="col-3 mx-1">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Admin
                  </h6>
                </div>
                <div className="col-5">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Published: {today}
                  </h6>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {description[index[index.length - 8]]}
              </p>
            </div>
            <hr className="my-5" />
            <div className="col-4">
              <Headlines
                display={"d-none"}
                visible={"d-none"}
                url={url[index[index.length - 9]]}
              />
            </div>
            <div className="col-6">
              <Link
                to={`/blog/${index[index.length - 9]}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
                onClick={onclick}
              >
                <h2 style={{ fontFamily: "Playfair Display", fontWeight: 500 }}>
                  {title[index[index.length - 9]]}
                </h2>
              </Link>
              <div className="row my-2">
                <div className="col-3 mx-1">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Admin
                  </h6>
                </div>
                <div className="col-5">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Published: {today}
                  </h6>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {description[index[index.length - 9]]}
              </p>
            </div>
            <hr className="my-5" />
            <div className="col-4">
              <Headlines
                display={"d-none"}
                visible={"d-none"}
                url={url[index[index.length - 10]]}
              />
            </div>
            <div className="col-6">
              <Link
                to={`/blog/${index[index.length - 10]}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
                onClick={onclick}
              >
                <h2 style={{ fontFamily: "Playfair Display", fontWeight: 500 }}>
                  {title[index[index.length - 10]]}
                </h2>
              </Link>
              <div className="row my-2">
                <div className="col-3 mx-1">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Admin
                  </h6>
                </div>
                <div className="col-5">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Published: {today}
                  </h6>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {description[index[index.length - 10]]}
              </p>
            </div>
            <hr className="my-5" />
            <div className="col-4">
              <Headlines
                display={"d-none"}
                visible={"d-none"}
                url={url[index[index.length - 11]]}
              />
            </div>
            <div className="col-6">
              <Link
                to={`/blog/${index[index.length - 11]}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
                onClick={onclick}
              >
                <h2 style={{ fontFamily: "Playfair Display", fontWeight: 500 }}>
                  {title[index[index.length - 11]]}
                </h2>
              </Link>
              <div className="row my-2">
                <div className="col-3 mx-1">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Admin
                  </h6>
                </div>
                <div className="col-5">
                  <h6
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    Published: {today}
                  </h6>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {description[index[index.length - 11]]}
              </p>
            </div>
          </div>

          {page !== 1 &&
            array.map((i) => {
              return (
                <div className="row">
                  <hr className="my-5" />
                  <div className="col-4">
                    <Headlines
                      display={"d-none"}
                      visible={"d-none"}
                      url={url[news.length - 1 - i]}
                    />
                  </div>
                  <div className="col-6">
                    <Link
                      to={`/blog/${news.length - 1 - i}`}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onClick={onclick}
                    >
                      <h2
                        style={{
                          fontFamily: "Playfair Display",
                          fontWeight: 500,
                        }}
                      >
                        {title[news.length - 1 - i]}
                      </h2>
                    </Link>
                    <div className="row my-2">
                      <div className="col-3 mx-1">
                        <h6
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "500",
                            fontSize: "17px",
                          }}
                        >
                          Admin
                        </h6>
                      </div>
                      <div className="col-5">
                        <h6
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "500",
                            fontSize: "17px",
                          }}
                        >
                          Published: {today}
                        </h6>
                      </div>
                    </div>
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                    >
                      {description[news.length - 1 - i]}
                    </p>
                  </div>
                </div>
              );
            })}

          <hr className="mt-5" />
          <div className="d-flex justify-content-between mt-5">
            {/* <ButtonLeft text={"← Previous"} onClickP={onClickPrevious} />
            <ButtonRight text={"Next →"} onClickN={onClickNext} /> */}
            <button
              type="button"
              className="btn btn-dark"
              onClick={onClickPrevious}
              disabled={page <= 1}
            >
              ← Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={onClickNext}
              disabled={page >= news.length}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
