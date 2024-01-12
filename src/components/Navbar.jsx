import "./Navbar.css";
import { Link } from "react-router-dom";
import { LogoImage } from "../assets/imgs/HomePage";
export default function Navbar() {
  return (
    <nav className="navbar nav-crev navbar-expand-lg">
      <div className="container">
        {/* logo */}
        <Link className="logo icon-img-100" href="#">
          <img src={LogoImage} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars" />
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link" to={"/"}>
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Community</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="page-about.html">
                  API
                </Link>
                <Link className="dropdown-item" href="page-services.html">
                  Blogs
                </Link>
                <Link className="dropdown-item" to={"/ourteam"}>
                  Our Team
                </Link>
                <Link className="dropdown-item" href="page-single-service.html">
                  Hire
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " to={"/portfolio"}>
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " to={"/about"}>
                <span className="rolling-text">About us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="page-contact.html">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button>
              <span className="pe-7s-search" />
            </button>
          </div>
          <div className="search-icon">
            <span className="pe-7s-search open-search" />
            <span className="pe-7s-close close-search" />
          </div>
        </div>
      </div>
    </nav>
  );
}
