import { useState } from "react";
import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";
import DarkModeLogo from "../assets/Dark mode logo.svg";

const TheHeader = () => {
  const location = useLocation();

  const [active, setActive] = useState({
    home: false,
    about: false,
    blogs: false,
    events: false,
    team: false,
    contact: false,
  });

  function activeClass(active) {}

  return (
    <div className="sticky top-0 z-10" id="header">
      <header className="header-container ">
        <div className="logo">
          {/* <h2>
            CODE<span style={{ color: "red" }}>&#123;X&#125;</span>
          </h2> */}
          <a href="/">
            <img src={DarkModeLogo} width={225} />
          </a>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav className="main-nav">
          {/* <div className="logo">
            <img src="Logo.jpg" />
          </div> */}
          <ul>
            <li>
              <Link
                onClick={() => activeClass("home")}
                to={"/"}
                className={
                  (location.pathname === "/" ? "active" : "") +
                  (active.home === true ? " active" : "")
                }
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#about"
                onClick={() => activeClass("about")}
                className={active.about ? "active" : ""}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/#team"
                onClick={() => activeClass("team")}
                className={active.team ? "active" : ""}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/#footer"
                onClick={() => activeClass("contact")}
                className={active.contact ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                className={
                  (location.pathname === "/blogs" ? "active" : "") +
                  (active.blogs ? " active" : "")
                }
                to="/blogs"
                onClick={() => activeClass("blogs")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/events" ? "active" : ""}
                to="/events"
                onClick={() => activeClass("events")}
              >
                Events
              </Link>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </div>
  );
};

export default TheHeader;
