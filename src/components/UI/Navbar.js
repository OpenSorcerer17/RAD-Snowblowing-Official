import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    // <div className={classes.navbar__container}>
    <div className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <h1>RAD Snowblowing</h1>
      </div>
      <nav>
        <Link
          className={classes.navbar_item}
          to="home"
          spy={true}
          smooth={true}
          duration={700}
        >
          Home
        </Link>
        <Link
          className={classes.navbar_item}
          to="pricing"
          spy={true}
          smooth={true}
          offset={-30}
          duration={700}
        >
          Pricing
        </Link>
        <Link
          className={classes.navbar_item}
          to="faq"
          spy={true}
          smooth={true}
          offset={-60}
          duration={700}
        >
          FAQ
        </Link>
      </nav>
    </div>
    // </div>
  );
};

export default Navbar;
