import React from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./nav-sidebar.css";
import Actions from "../Navbar/Actions";
import SocialLinks from "../Navbar/SocialLinks";
import Footer from "../Footer/Footer";

export default function NavSidebar(props) {
  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }

  React.useEffect(() => {
    if (props.sidebarIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [props.sidebarIsOpen]);

  return (
    <div
      className="navigation-sidebar f-poppins"
      style={{ zIndex: props.sidebarIsOpen ? 100 : -1 }}
      onClick={() => props.setSidebarIsOpen(false)}
    >
      <div
        className="navigation-list d-flex"
        style={{
          transform: props.sidebarIsOpen
            ? "translateX(250px)"
            : "translateX(-250px)",
        }}
      >
        <div className="button-group d-flex-fd-column">
          <div
            className="d-flex a-center j-center close-menu"
            style={{ width: "60%" }}
            onClick={() => props.setSidebarIsOpen()}
          >
            <FaChevronLeft size={12} />
            Close Menu
          </div>
          <Actions isInSidebar={true} />
          <a href="/" className="d-flex a-center j-center">
            <FaComments size={14} />
            Community
          </a>
          {/* New button for the blog */}
          <button className="blog-button">
            <a href="https://animetopic786.blogspot.com/?m=0" target="_blank" rel="noopener noreferrer">
              BLOG
            </a>
          </button>
        </div>

        <div className="navigation-link-list">
          <ul>
            <li>
              <Link onClick={() => scrollToTop()} to="/">
                Home
              </Link>
            </li>
            {/* Other navigation links */}
          </ul>
        </div>
      </div>

      <SocialLinks/>

      <div className="copyright-text">
        <p>
          <strong><a href="#">AB-ANIME-STREAM</a></strong> Stream for free without ads! Please Support Me OKAY<a
          target="_blank" rel="noopener noreferrer" href="https://wa.me/233533763772">AB-ANIME-STREAMER</a>.         </p>
        <p>&copy; {new Date().getFullYear()} Abraham Dwamena all right reserved.</p>
      </div>
    </div>
  );
          }
