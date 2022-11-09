import React from "react";
import logo from "./Images/logo3.png";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const [size, setSize] = useState("");
  const [disable, setdisable] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    if (
      location === "/adminsignin" ||
      location === "/signin" ||
      location === "/signup" ||
      location === "/news"
    ) {
      setdisable("d-none");
    } else {
      setdisable("");
    }

    window.addEventListener("scroll", see, { passive: true });
    return () => {
      window.removeEventListener("scroll", see);
    };
  }, [location]);

  const see = () => {
    if (window.pageYOffset >= 110) {
      setSize("fixed-top");
    } else {
      setSize("");
    }
  };

  return (
    <div className={`${disable}`}>
      <div className="d-flex justify-content-center bg-danger">
        <img src={logo} alt="logo" style={{ width: "8%" }} />
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${size}`}
        onScroll={see}
        style={{
          fontFamily: "Libre Franklin",
          backgroundColor: "#000000",
          boxShadow: "0 6px 10px rgba(0,0,0,.35)",
          fontWeight: 600,
          padding: "8px",
        }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="container navbar-nav me-auto mb-2 mb-lg-0">
              <li className="mx-4 nav-item">
                <Link
                  aria-current="page"
                  to="/"
                  className="text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/business" className="text-decoration-none">
                  Business
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/entertainment" className="text-decoration-none">
                  Entertainment
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/health" className="text-decoration-none">
                  Health
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/science" className="text-decoration-none">
                  Science
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/sports" className="text-decoration-none">
                  Sports
                </Link>
              </li>
              <li className="mx-4 nav-item">
                <Link to="/technology" className="text-decoration-none">
                  Technology
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-outline-light text-light rounded-1"
              type="submit"
              style={{ backgroundColor: "#000000" }}
            >
              <Link to="/search">
                <i className="fas fa-search"></i>
              </Link>
            </button>

            {!localStorage.getItem("token") ? (
              <button
                className="btn btn-outline-light text-dark rounded-1 mx-3"
                type="submit"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link className="text-dark text-decoration-none" to="/signin">
                  Login
                </Link>
              </button>
            ) : (
              <button
                className="btn btn-outline-light text-dark rounded-1 mx-3"
                type="submit"
                style={{ backgroundColor: "#ffffff" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
