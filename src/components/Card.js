import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Card(props) {
  const { title, url, index } = props;
  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  return (
    <div
      className="card rounded-0"
      style={{
        boxShadow: "0 6px 10px rgba(0,0,0,.35)",
        height: "25rem",
        width: "auto",
        display: "inline-block",
      }}
    >
      <img className="card-img-top rounded-0" src={url} alt="Card" />
      <div className="card-body">
        <h5 style={{ fontFamily: "Playfair Display", fontWeight: 600 }}>
          <Link
            className="text-decoration-none cardhover"
            to={`/blog/${index}`}
            onClick={onclick}
          >
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}
