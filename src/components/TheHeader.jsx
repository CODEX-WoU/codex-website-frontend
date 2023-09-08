import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";

const TheHeader = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-10" id="header">
      <header className="header-container ">
        <div className="logo">
          {/* <h2>
            CODE<span style={{ color: "red" }}>&#123;X&#125;</span>
          </h2> */}
          <a href="/">
            <img src="/src/assets/Dark mode logo.svg" width={225} />
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
                to={"/"}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <Link
                className={location.pathname === "/blogs" ? "active" : ""}
                to="/blogs"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/events" ? "active" : ""}
                to="/events"
              >
                Events
              </Link>
            </li>

            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#footer">Contact</a>
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
