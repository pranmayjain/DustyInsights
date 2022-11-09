import ButtonLeft from "./Button/ButtonLeft";
import ButtonRight from "./Button/ButtonRight";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Headlines(props) {
  const { title, url, display, visible, size, index } = props;
  const location = useLocation().pathname;
  const onclick = () => {
    location.reload();
  };

  return (
    <div style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
      <div
        className="card z-depth-1"
        style={{
          boxShadow: "0 6px 10px rgba(0,0,0,.35)",
          position: "relative",
          zIndex: 100,
        }}
      >
        <img
          src={url}
          alt="headlines"
          style={{
            height: size + "rem",
            width: "auto",
            display: "inline-block",
          }}
        />
        {/* <div
          style={{
            position: "absolute",
            top: "45%",
            left: "0%",
            fontWeight: "bold",
          }}
        >
          <ButtonLeft display={display} text={"<"} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "45%",
            right: "0%",
            fontWeight: "bold",
          }}
        >
          <ButtonRight display={display} text={">"} />
        </div> */}
        <div
          className={` ${visible}`}
          style={{
            position: "absolute",
            top: "70%",
            left: "5%",
            fontSize: size + 2 + "px",
            fontFamily: "Playfair Display",
            fontWeight: "500",
            color: "rgba(255, 255, 255)",
            backgroundColor: "rgba(235,	53,	53, 0.8)",
            display: "inline-flex",
          }}
        >
          <Link
            className="text-decoration-none text-light"
            to={`/blog/${index}`}
            onClick={onclick}
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
