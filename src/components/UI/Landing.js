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
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tonGoVIYdA4?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
