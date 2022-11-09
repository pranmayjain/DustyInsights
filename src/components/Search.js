import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import newsContext from "./context/newsContext";

export default function Search() {
  const context = useContext(newsContext);
  const { news, allNews } = context;
  const [search, setSearch] = useState("");
  const query = useLocation().search;

  useEffect(() => {
    allNews();
    if (query) {
      setSearch(query.split("=")[1]);
    }
  }, []);

  const onchange = (e) => {
    setSearch(e.target.value);
  };

  let index = -1;

  return (
    <div className="m-5 p-5">
      <div className="container">
        <form className="d-flex mx-2 " role="search">
          <input
            className="form-control me-2 shadow-none p-3 rounded-0"
            type="text"
            name="search"
            value={search}
            placeholder="Search"
            aria-label="Search"
            style={{
              backgroundColor: "#ffffff",
              border: "none",
              fontFamily: "Libre Franklin",
              fontWeight: 500,
              fontSize: "25px",
              borderBottom: "0.5px solid #DC3545",
            }}
            onChange={onchange}
          />
          <button
            className="btn btn-outline-light text-light bg-danger rounded-0"
            type="submit"
            style={{
              border: "none",
              fontFamily: "Libre Franklin",
              fontWeight: 500,
              padding: "0px 25px",
            }}
            onSubmit={onclick}
          >
            SEARCH
          </button>
        </form>
      </div>
      <div className="container">
        <div className="mt-5 row">
          {search.length !== 0 &&
            news.map((o) => {
              if (o.title.toUpperCase().search(search.toUpperCase()) !== -1) {
                index++;
                return (
                  <div className="col-4 mt-4">
                    <Card url={o.url} title={o.title} index={index} />
                  </div>
                );
              }
              index++;
              return;
            })}
        </div>
      </div>
    </div>
  );
}
