import React, { Fragment } from "react";
import classes from "./Landing.module.css";
import { Link } from "react-scroll";

const Landing = (props) => {
  return (
    <div className={classes.landing__container} id="home">
      <div className={classes.landing__content}>
        <h1 className={classes.title}>Seasonal Snow Removal Services</h1>
        <Link
          className={classes.getquote}
          to="pricing"
          spy={true}
          smooth={true}
          offset={-30}
          duration={700}
        >
          Get your quote today!
        </Link>
        <div className={classes.video}>
          <iframe
            src="https://www.youtube.com/embed/tonGoVIYdA4?rel=0&amp;autoplay=1&mute=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="Snowblower"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;
