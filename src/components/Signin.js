import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link
          to="/"
          className="btn-close my-5 mx-5 text-right shadow-none"
          aria-label="Close"
        ></Link>
      </div>
      <div className="container my-5">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active text-light bg-danger"
              id="tab-login"
              data-mdb-toggle="pill"
              to="/signin"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link text-danger"
              id="tab-register"
              data-mdb-toggle="pill"
              to="/signup"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </Link>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleSubmit}>
              <div className="text-center my-5">
                <h5
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 800,
                    fontSize: "50px",
                  }}
                >
                  Sign In
                </h5>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="btn btn-danger btn-block mb-4">
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Admin?{" "}
                  <Link className="text-danger" to="/adminsignin">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
