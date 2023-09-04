import "../styles/header.css";

const TheHeader = () => {
  return (
    <div>
      <header className="header-container">
        <div className="logo">
          {/* <h2>
            CODE<span style={{ color: "red" }}>&#123;X&#125;</span>
          </h2> */}
          <img src="/src/assets/Dark mode logo.svg" width={225} />
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav className="main-nav">
          {/* <div className="logo">
            <img src="Logo.jpg" />
          </div> */}
          <ul>
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
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
