import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-scroll";
import { classNames } from "../../common/helpers";

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={classes.navbar}>
      <Link
        className={classes["brand-name"]}
        to="home"
        spy={true}
        smooth={true}
        duration={700}
        onClick={() => setIsNavExpanded(false)}
      >
        RAD Snowblowing
      </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
