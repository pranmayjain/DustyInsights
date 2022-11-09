import React from "react";
import ButtonLeft from "./Button/ButtonLeft";
import ButtonRight from "./Button/ButtonRight";
import Headlines from "./Headlines";

export default function Category(props) {
  const { category, title1, title2, url1, url2, size, index1, index2 } = props;
  return (
    <div className="my-5">
      <div className="row">
        <div className="col-6">
          <h1 style={{ fontFamily: "Oswald", fontWeight: "700" }}>
            {category}
          </h1>
        </div>

        {/* <div className="col-6 my-2">
          <div className="d-flex justify-content-end">
            <div className="mx-3">
              <ButtonLeft text={"<"} />
            </div>
            <ButtonRight text={">"} />
          </div>
        </div> */}

        <div className="container" style={{ marginTop: "-15px" }}>
          <hr />
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">
          <Headlines
            display={"d-none"}
            title={title1}
            url={url1}
            size={size}
            index={index1}
          />
        </div>
        <div className="col-6">
          <Headlines
            display={"d-none"}
            title={title2}
            url={url2}
            size={size}
            index={index2}
          />
        </div>
      </div>
    </div>
  );
}
