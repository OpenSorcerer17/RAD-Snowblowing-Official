import React, { Fragment } from "react";
import classes from "./Landing.module.css";

const Landing = (props) => {
  return (
    <div className={classes.landing__container}>
      <div className={classes.landing__content}>
        <h1 className={classes.title}>Seasonal Snow Removal Services</h1>
        <button onCilck="document.getElementById('quote').scrollIntoView();">Get your quote today!</button>
      </div>
    </div>
  );
};

export default Landing;
