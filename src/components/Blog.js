import React from "react";
import Comments from "./Comments";
import Headlines from "./Headlines";
import { useContext, useEffect } from "react";
import newsContext from "./context/newsContext";
import { marked } from "marked";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Blog() {
  const context = useContext(newsContext);
  const { news, allNews } = context;
  useEffect(() => {
    allNews();
  }, []);

  let tag = Array.from(
    news.map((o) => {
      return o.tag;
    })
  );

  let pos = [];
  let i = 0;
  tag = tag.filter(function (item) {
    if (item === "Travel") {
      pos.push(i);
    }
    i++;
  });

  const title = Array.from(
    news.map((o) => {
      return o.title.substring(0, 75);
    })
  );
  const description = Array.from(
    news.map((o) => {
      return o.description;
    })
  );
  const content = Array.from(
    news.map((o) => {
      return marked.parse(o.content);
    })
  );
  const url = Array.from(
    news.map((o) => {
      return o.url;
    })
  );

  const [path, setpath] = useState(useLocation().pathname);

  useEffect(() => {
    setpath(path.split("/"));
  }, []);
  const index = path[path.length - 1];

  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  return (
    <div>
      <div>
        <img
          src={url[index]}
          alt="news"
          style={{
            width: "100%",
            height: "auto",
            filter: "brightness(70%)",
          }}
        />
      </div>
      <div
        className="mx-5"
        style={{
          position: "absolute",
          top: "105%",
          left: "20%",
          right: "20%",
          textAlign: "center",
        }}
      >
        <h2
          className="text-light"
          style={{ fontFamily: "Playfair Display", fontWeight: "700" }}
        >
          {title[index]}
        </h2>
        <h5
          className="text-light"
          style={{ fontFamily: "Oswald", fontWeight: 300 }}
        >
          {description[index]}
        </h5>
      </div>
      <div style={{ padding: "3% 25%" }}>
        <p
          style={{
            fontFamily: "Libre Franklin",
            fontWeight: 500,
            fontSize: "large",
            padding: "6px",
            color: "#000000",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content[index] }} />
        </p>

        <Comments />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <hr />
            <h5
              className="my-3"
              style={{ fontFamily: "Open Sans", fontWeight: 700 }}
            >
              More in Travel
            </h5>
            <div className="row my-4">
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 1]]}
                  title={title[pos[pos.length - 1]]}
                  index={pos[pos.length - 1]}
                  size={12}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 2]]}
                  title={title[pos[pos.length - 2]]}
                  index={pos[pos.length - 2]}
                  size={12}
                />
              </div>
              <div className="col-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 3]]}
                  title={title[pos[pos.length - 3]]}
                  index={pos[pos.length - 3]}
                  size={12}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 4]]}
                  title={title[pos[pos.length - 4]]}
                  index={pos[pos.length - 4]}
                  size={12}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 5]]}
                  title={title[pos[pos.length - 5]]}
                  index={pos[pos.length - 5]}
                  size={12}
                />
              </div>
              <div className="col-4 my-4">
                <Headlines
                  display={"d-none"}
                  url={url[pos[pos.length - 6]]}
                  title={title[pos[pos.length - 6]]}
                  index={pos[pos.length - 6]}
                  size={12}
                />
              </div>
            </div>
            <div>
              <hr />
              <h5
                className="my-3"
                style={{ fontFamily: "Open Sans", fontWeight: 700 }}
              >
                Editors' Picks
              </h5>
              <div className="row">
                <div className="col-4">
                  <Headlines
                    display={"d-none"}
                    url={url[34]}
                    title={title[34]}
                    index={34}
                    size={12}
                  />
                </div>
                <div className="col-4">
                  <Headlines
                    display={"d-none"}
                    url={url[45]}
                    title={title[45]}
                    index={45}
                    size={12}
                  />
                </div>
                <div className="col-4">
                  <Headlines
                    display={"d-none"}
                    url={url[40]}
                    title={title[40]}
                    index={40}
                    size={12}
                  />
                </div>
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
