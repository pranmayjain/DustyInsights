import React from "react";

export default function ButtonRight(props) {
  return (
    <div className={`${props.display}`}>
      <button type="button" className="btn btn-dark">
        {props.text}
      </button>
    </div>
  );
}
