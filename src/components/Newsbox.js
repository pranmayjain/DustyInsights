import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Newsbox(props) {
  const { url1, url2, url3, title1, title2, title3, index1, index2, index3 } =
    props;

  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  return (
    <div
      className="card my-5"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 6px 10px rgba(0,0,0,.25)",
      }}
    >
      <div
        className="row"
        style={{ fontFamily: "Open Sans", fontWeight: "300" }}
      >
        <div className="col-4" style={{ paddingRight: 0 }}>
          <nav
            className="navbar navbar-dark bg-danger border-light"
            style={{ border: " 1px solid" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand mx-auto" href="/">
                Featured News
              </a>
            </div>
          </nav>
        </div>
        <div className="col-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
          <nav
            className="navbar navbar-dark bg-danger border-light"
            style={{ borderTop: " 1px solid", borderBottom: " 1px solid" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand mx-auto" href="/">
                Popular News
              </a>
            </div>
          </nav>
        </div>
        <div
          className="col-4"
          style={{
            paddingLeft: 0,
            paddingRight: "10px",
          }}
        >
          <nav
            className="navbar navbar-dark bg-danger border-light"
            style={{ border: " 1px solid" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand mx-auto" href="/">
                Latest News
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="container"
        style={{ fontFamily: "Open Sans", fontWeight: "300" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="row container p-3" style={{ zIndex: 1 }}>
              <div className="col-4">
                <img
                  src={url1}
                  alt="news"
                  style={{
                    height: "8rem",
                    width: "15rem",
                    position: "relative",
                    zIndex: 3,
                    boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                  }}
                />
              </div>
              <div
                className="col-8 card pt-3"
                style={{
                  paddingLeft: "14%",
                  boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "Playfair Display",
                    fontWeight: "500",
                  }}
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/blog/${index1}`}
                    onClick={onclick}
                  >
                    {title1}
                  </Link>
                </p>
              </div>
            </div>
            <div className="row container p-3" style={{ zIndex: 1 }}>
              <div className="col-4">
                <img
                  src={url2}
                  alt="news"
                  style={{
                    height: "8rem",
                    width: "15rem",
                    position: "relative",
                    zIndex: 3,
                    boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                  }}
                />
              </div>
              <div
                className="col-8 card pt-3"
                style={{
                  paddingLeft: "14%",
                  boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "Playfair Display",
                    fontWeight: "500",
                  }}
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/blog/${index2}`}
                    onClick={onclick}
                  >
                    {title2}
                  </Link>
                </p>
              </div>
            </div>
            <div className="row container p-3" style={{ zIndex: 1 }}>
              <div className="col-4">
                <img
                  src={url3}
                  alt="news"
                  style={{
                    height: "8rem",
                    width: "15rem",
                    position: "relative",
                    zIndex: 3,
                    boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                  }}
                />
              </div>
              <div
                className="col-8 card pt-3"
                style={{
                  paddingLeft: "14%",
                  boxShadow: "0 6px 10px rgba(0,0,0,.35)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "Playfair Display",
                    fontWeight: "500",
                  }}
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/blog/${index3}`}
                    onClick={onclick}
                  >
                    {title3}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
