import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-scroll";
import { classNames } from "../../common/helpers";

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={classes.navbar}>
      <a href="#home" className={classes["brand-name"]}>
        RAD Snowblowing
      </a>
      <button
        className={classes.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classNames(
          classes["navbar-menu"],
          isNavExpanded ? classes.expanded : ""
        )}
      >
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              onClick={() => setIsNavExpanded(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              onClick={() => setIsNavExpanded(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
              onClick={() => setIsNavExpanded(false)}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div className={classes.icon_menus}>
          <div className={classes.icon_menu_item}>
            <i class="fas fa-phone mt-4 fa-1x" />
            <p>Phone Number</p>
          </div>
          <div className={classes.icon_menu_item}>
            <i class="fas fa-envelope mt-4 fa-1x" />
            <p>Contact Us</p>
          </div>
          <div className={classes.icon_menu_item}>
            <i class="fas fa-map-marker-alt fa-1x" />
            <p>Location</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
