import React, { Fragment } from "react";

const SubmitModal = ({
  first_name,
  last_name,
  closeModalHandler,
  previous_submit,
  resubmit,
}) => {
  return (
    <Fragment>
      {previous_submit && (
        <div>
          <h3>
            It appears you have already requested a quote for us. If this is a
            mistake or you would like to request another quote please click the
            "Request New Quote" button below.
          </h3>
          <button
            onClick={() => {
              localStorage.setItem("submitted", false);
              resubmit();
            }}
          >
            Request New Quote
          </button>
          <button onClick={closeModalHandler}>Nevermind</button>
        </div>
      )}
      {!previous_submit && (
        <div>
          <h3>
            Hello {first_name} {last_name}, your request was submitted and we
            will get back to you with a quote as soon as we can. Thanks for
            choosing RAD Snowblowing.
          </h3>
          <button onClick={closeModalHandler}>Close</button>
        </div>
      )}
    </Fragment>
  );
};

export default SubmitModal;
