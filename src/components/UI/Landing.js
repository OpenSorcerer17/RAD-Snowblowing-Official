import React, { Fragment } from "react";
import classes from "./Landing.module.css";
import background from "../../assets/snowblow_bg.jpg";

const Landing = (props) => {
  return (
    <div className={classes.landing}>
      <img src={background} alt="Snowblower" className={classes.landing__img} />
      <h1 className={classes.title}>Seasonal Snow Removal Services</h1>
    </div>
  );
};

export default Landing;
