import React, { Fragment } from "react";
import classes from "./SubmitModal.module.css";
import { Link } from "react-scroll";

const SubmitModal = ({ first_name, last_name, closeModalHandler }) => {
  return (
    <div className={classes.container}>
      <Link
        className={classes.backdrop}
        onClick={closeModalHandler}
        to="home"
        spy={true}
        smooth={true}
        duration={700}
      ></Link>
      <div className={classes.modal}>
        <h3>
          Hello {first_name} {last_name}, your request was submitted and we will
          get back to you with a quote as soon as we can. Thanks for choosing
          RAD Snowblowing.
        </h3>
        <Link
          onClick={closeModalHandler}
          className={classes.modalbutton}
          to="home"
          spy={true}
          smooth={true}
          duration={700}
        >
          Close
        </Link>
      </div>
    </div>
  );
};

export default SubmitModal;
