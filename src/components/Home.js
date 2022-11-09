import React from "react";
import Category from "./Category";
import Headlines from "./Headlines";
import Newsbox from "./Newsbox";
import { useContext, useEffect } from "react";
import newsContext from "./context/newsContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Home() {
  const context = useContext(newsContext);
  const { news, allNews } = context;
  useEffect(() => {
    allNews();
  }, []);
  const title = Array.from(
    news.map((o) => {
      return o.title.substring(0, 80);
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
  const tag = Array.from(
    news.map((o) => {
      return o.tag;
    })
  );
  const slideImages = [
    {
      urlImg: url[0],
      titleImg: title[0],
      index: 0,
    },
    {
      urlImg: url[8],
      titleImg: title[8],
      index: 8,
    },
    {
      urlImg: url[9],
      titleImg: title[9],
      index: 9,
    },
    {
      urlImg: url[10],
      titleImg: title[10],
      index: 10,
    },
    {
      urlImg: url[11],
      titleImg: title[11],
      index: 11,
    },
  ];

  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <Slide>
              {slideImages.map((slideImage) => (
                <Headlines
                  title={slideImage.titleImg}
                  url={slideImage.urlImg}
                  size={24}
                  index={slideImage.index}
                />
              ))}
            </Slide>
            <Category
              category={"Entertaiment"}
              title1={title[14]}
              title2={title[15]}
              url1={url[14]}
              url2={url[15]}
              index1={14}
              index2={15}
              size={12}
            />
            <Category
              category={"Buisness"}
              title1={title[16]}
              title2={title[17]}
              url1={url[16]}
              url2={url[17]}
              index1={16}
              index2={17}
              size={12}
            />
            <Newsbox
              url1={url[18]}
              url2={url[20]}
              url3={url[22]}
              title1={title[18]}
              title2={title[20]}
              title3={title[22]}
              index1={18}
              index2={20}
              index3={22}
            />
          </div>

          <div className="col-6">
            <div className="row ">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <Headlines
                  display={"d-none"}
                  title={title[11]}
                  url={url[11]}
                  index={11}
                  size={12}
                />
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <Headlines
                  display={"d-none"}
                  title={title[12]}
                  url={url[12]}
                  index={12}
                  size={12}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <Headlines
                  display={"d-none"}
                  title={title[13]}
                  url={url[13]}
                  index={13}
                  size={12}
                />
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <Headlines
                  display={"d-none"}
                  title={title[51]}
                  url={url[51]}
                  index={51}
                  size={12}
                />
              </div>
            </div>
            <Category
              category={"Science"}
              title1={title[9]}
              title2={title[10]}
              url1={url[9]}
              url2={url[10]}
              index1={9}
              index2={10}
              size={12}
            />
            <Category
              category={"Sports"}
              title1={title[4]}
              title2={title[5]}
              url1={url[4]}
              url2={url[5]}
              index1={4}
              index2={5}
              size={12}
            />
            <Newsbox
              url1={url[19]}
              url2={url[21]}
              url3={url[23]}
              title1={title[19]}
              title2={title[21]}
              title3={title[23]}
              index1={19}
              index2={21}
              index3={23}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-9">
            <hr />
            <h5
              className="my-3"
              style={{ fontFamily: "Open Sans", fontWeight: 700 }}
            >
              Recent News
            </h5>
            <div className="row my-4">
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[1]}
                  url={url[1]}
                  size={12}
                  index={1}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[2]}
                  url={url[2]}
                  size={12}
                  index={2}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[3]}
                  url={url[3]}
                  index={3}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  title={title[4]}
                  url={url[4]}
                  size={12}
                  index={4}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  title={title[5]}
                  url={url[5]}
                  size={12}
                  index={5}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  title={title[6]}
                  url={url[6]}
                  size={12}
                  index={6}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[7]}
                  url={url[7]}
                  size={12}
                  index={7}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[8]}
                  url={url[8]}
                  size={12}
                  index={8}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  title={title[9]}
                  url={url[9]}
                  size={12}
                  index={9}
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <hr />
            <h5
              className="my-3"
              style={{ fontFamily: "Open Sans", fontWeight: 700 }}
            >
              Most Popular
            </h5>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/39"
                onClick={onclick}
              >
                {title[39]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/63"
                onClick={onclick}
              >
                {title[63]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/8"
                onClick={onclick}
              >
                {title[8]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/28"
                onClick={onclick}
              >
                {title[28]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/71"
                onClick={onclick}
              >
                {title[71]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/13"
                onClick={onclick}
              >
                {title[13]}
              </Link>
            </li>
            <hr />
            <li
              className="list-unstyled"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 700,
                fontSize: "medium",
                padding: "6px",
                color: "#000000",
              }}
            >
              <Link
                className="text-decoration-none text-dark"
                to="/blog/44"
                onClick={onclick}
              >
                {title[44]}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
