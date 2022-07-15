import React, { Fragment } from "react";
import classes from "./Landing.module.css";

const Landing = (props) => {
  return (
    <div className={classes.landing__container} id="home">
      <div className={classes.landing__content}>
        <h1 className={classes.title}>Seasonal Snow Removal Services</h1>
        <button>Get your quote today!</button>
      </div>
    </div>
  );
};

export default Landing;
