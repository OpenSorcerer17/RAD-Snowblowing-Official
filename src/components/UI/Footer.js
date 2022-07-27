import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        <li>
          <i class="fas fa-map-marker-alt fa-2x" />
          <p>Location</p>
        </li>
        <li>
          <i class="fas fa-phone mt-4 fa-2x" />
          <p>Phone Number</p>
        </li>
        <li>
          <i class="fas fa-envelope mt-4 fa-2x" />
          <p>Email</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
