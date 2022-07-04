import React from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    // <div className={classes.navbar__container}>
      <div className={classes.navbar}>
        <div className={classes.navbar__logo}>
          <h1>Testing</h1>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    // </div>
  );
};

export default Navbar;
