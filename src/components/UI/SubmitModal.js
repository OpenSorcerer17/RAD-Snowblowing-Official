import React, { Fragment } from "react";
import classes from "./SubmitModal.module.css";

const SubmitModal = ({ first_name, last_name, closeModalHandler }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h3>
          Hello {first_name} {last_name}, your request was submitted and we will
          get back to you with a quote as soon as we can. Thanks for choosing
          RAD Snowblowing.
        </h3>
        <button onClick={closeModalHandler}>Close</button>
      </div>
    </div>
  );
};

export default SubmitModal;
