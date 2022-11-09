import React from "react";
import { useState } from "react";

export default function Comments() {
  const [visible, setVisible] = useState("d-none");
  const commentsVisible = () => {
    if (visible === "d-none") {
      setVisible("");
      console.log(visible);
    } else {
      setVisible("d-none");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-danger btn-lg col-12 mt-5 rounded-1"
        onClick={commentsVisible}
        style={{ fontFamily: "Open Sans", fontWeight: "700" }}
      >
        Comments - Join the Conversation
      </button>

      <section className={`${visible}`} style={{ backgroundColor: "#eee" }}>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        Lily Coleman
                      </h6>
                      <p className="text-muted small mb-0">
                        Shared publicly - Jan 2020
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip consequat.
                  </p>

                  <div className="small d-flex justify-content-start">
                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="far fa-thumbs-up me-2"></i>
                      <p className="mb-0">Like</p>
                    </a>
                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="far fa-comment-dots me-2"></i>
                      <p className="mb-0">Comment</p>
                    </a>
                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="fas fa-share me-2"></i>
                      <p className="mb-0">Share</p>
                    </a>
                  </div>
                </div>
                <div
                  className="card-footer py-3 border-0"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex flex-start w-100">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="textAreaExample"
                        rows="4"
                        style={{ background: "#fff" }}
                      ></textarea>
                      <label className="form-label" htmlFor="textAreaExample">
                        Message
                      </label>
                    </div>
                  </div>
                  <div className="float-end mt-2 pt-1">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mx-2"
                    >
                      Post comment
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
