import React from "react";
import instagram from "./Images/instagram.png";
import youtube from "./Images/youtube.png";
import twitter from "./Images/twitter.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
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
  });

  return (
    <div
      className={`bg-dark text-light ${disable}`}
      style={{ fontFamily: "Libre Franklin" }}
    >
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p className="text-light">
                  Monthly digest of whats new and exciting from us.
                </p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control rounded-1"
                    placeholder="Email address"
                  />
                  <button className="btn btn-danger rounded-1" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p className="text-light">
              © 2022 Dusty Insights, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <img src={instagram} alt="instagram logo" />
              </li>
              <li className="ms-3">
                <img src={youtube} alt="youtube logo" />
              </li>
              <li className="ms-3">
                <img src={twitter} alt="twitter logo" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
