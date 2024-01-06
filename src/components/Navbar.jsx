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
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Home</span>
              </Link>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Home Dark</h6>
                        </div>
                        <div className="links">
                          <Link className="dropdown-item" href="home-main.html">
                            Main Home
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-creative.html"
                          >
                            Creative Home
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-corporate.html"
                          >
                            Corporate Business
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-onepage.html"
                          >
                            Home One page
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-digital-agency.html"
                          >
                            Digital Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-freelancer.html"
                          >
                            Freelancer
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-marketing-agency.html"
                          >
                            Marketing Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-creative-agency.html"
                          >
                            Creative Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-startup.html"
                          >
                            Startup Bussines
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-architecture.html"
                          >
                            Architecture
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="home-personal.html"
                          >
                            Personal
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Home Light</h6>
                        </div>
                        <div className="links">
                          <Link
                            className="dropdown-item"
                            href="../light/home-main.html"
                          >
                            Main Home
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-corporate.html"
                          >
                            Corporate Business
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-onepage.html"
                          >
                            Home One page
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-digital-agency.html"
                          >
                            Digital Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-freelancer.html"
                          >
                            Freelancer
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-marketing-agency.html"
                          >
                            Marketing Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-creative-agency.html"
                          >
                            Creative Agency
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-startup.html"
                          >
                            Startup Bussines
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/home-architecture.html"
                          >
                            Architecture
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Showcases</h6>
                        </div>
                        <div className="links">
                          <Link
                            className="dropdown-item"
                            href="showcase-parallax-slider.html"
                          >
                            Parallax Slider
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-frame-slider.html"
                          >
                            Frame Slider
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-circle-slider.html"
                          >
                            Circle Slider
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-carousel.html"
                          >
                            Showcase Carousel
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-interactive-center-horizontal.html"
                          >
                            Interactive Links1
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-interactive-center.html"
                          >
                            Interactive Links2
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="showcase-parallax.html"
                          >
                            Vertical Parallax
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Showcases Light</h6>
                        </div>
                        <div className="links">
                          <Link
                            className="dropdown-item"
                            href="../light/showcase-parallax-slider.html"
                          >
                            Parallax Slider
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/showcase-carousel.html"
                          >
                            Showcase Carousel
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/showcase-interactive-center-horizontal.html"
                          >
                            Interactive Links1
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/showcase-interactive-center.html"
                          >
                            Interactive Links2
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="../light/showcase-parallax.html"
                          >
                            Vertical Parallax
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <span className="rolling-text">Pages</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="page-about.html">
                  About
                </Link>
                <Link className="dropdown-item" href="page-services.html">
                  Services
                </Link>
                <Link className="dropdown-item" href="page-career.html">
                  Career
                </Link>
                <Link className="dropdown-item" href="page-single-service.html">
                  Single Service
                </Link>
                <Link className="dropdown-item" href="page-FAQS.html">
                  FAQS
                </Link>
                <Link className="dropdown-item" href="page-team.html">
                  Our Team
                </Link>
                <Link className="dropdown-item" href="page-single-team.html">
                  Single Team
                </Link>
                <Link className="dropdown-item" href="page-Oops404.html">
                  Oops 404
                </Link>
                <Link className="dropdown-item" href="page-comingsoon.html">
                  Coming Soon
                </Link>
              </div>
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
                <span className="rolling-text">Portfolio</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link href="#0">
                    Classic Grid <i className="fas fa-angle-right icon-arrow" />
                  </Link>
                  <ul className="dropdown-side">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-grid-2.html"
                      >
                        Grid 2 Columns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-grid-3.html"
                      >
                        Grid 3 Columns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-grid-4.html"
                      >
                        Grid 4 Columns
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <Link href="#0">
                    Masonry <i className="fas fa-angle-right icon-arrow" />
                  </Link>
                  <ul className="dropdown-side">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-masonry-2.html"
                      >
                        Masonry 2 Columns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-masonry-3.html"
                      >
                        Masonry 3 Columns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="portfolio-masonry-4.html"
                      >
                        Masonry 4 Columns
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" href="portfolio-metro.html">
                    Portfolio Metro
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="portfolio-modern.html">
                    Modern Grid
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="project-details1.html">
                    Project Details 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="project-details2.html">
                    Project Details 2
                  </Link>
                </li>
              </ul>
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
                <span className="rolling-text">Blogs</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="blog-classic.html">
                  Blog Standerd
                </Link>
                <Link className="dropdown-item" href="blog-list.html">
                  Blog List
                </Link>
                <Link className="dropdown-item" href="blog-half-img.html">
                  Image Out Frame
                </Link>
                <Link className="dropdown-item" href="blog-details.html">
                  Blog Details
                </Link>
              </div>
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
                <span className="rolling-text">Shop</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="shop-list.html">
                  Shop List
                </Link>
                <Link className="dropdown-item" href="shop-product.html">
                  Single Product
                </Link>
                <Link className="dropdown-item" href="shop-cart.html">
                  Cart
                </Link>
                <Link className="dropdown-item" href="shop-checkout.html">
                  Checkout
                </Link>
              </div>
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
