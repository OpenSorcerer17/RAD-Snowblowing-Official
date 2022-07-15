import React, { Fragment } from "react";

const SubmitModal = ({ first_name, last_name, closeModalHandler }) => {
  return (
    <Fragment>
      <div>
        <h3>
          Hello {first_name} {last_name}, your request was submitted and we will
          get back to you with a quote as soon as we can. Thanks for choosing
          RAD Snowblowing.
        </h3>
        <button onClick={closeModalHandler}>Close</button>
      </div>
    </Fragment>
  );
};

export default SubmitModal;
