import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Type from "./components/Type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminSignin from "./components/AdminSignin";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NewsState from "./components/context/NewsState";
import News from "./components/News";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [path, setpath] = useState(window.location.pathname);
  useEffect(() => {
    setpath(path.split("/"));
  }, []);

  return (
    <div>
      <NewsState>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path={`/blog/${path[path.length - 1]}`}
                element={<Blog />}
              />
              <Route path="/business" element={<Type title={"Business"} />} />
              <Route
                path="/entertainment"
                element={<Type title={"Entertainment"} />}
              />
              <Route path="/health" element={<Type title={"Health"} />} />
              <Route path="/science" element={<Type title={"Science"} />} />
              <Route path="/sports" element={<Type title={"Sports"} />} />
              <Route
                path="/technology"
                element={<Type title={"Technology"} />}
              />
              <Route path="/adminsignin" element={<AdminSignin />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/news" element={<News />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </Router>
      </NewsState>
    </div>
  );
}

export default App;
