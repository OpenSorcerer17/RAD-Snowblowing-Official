import React, { Fragment } from "react";

const QuoteFormItem = (props) => {
  return (
    <Fragment>
      {props.inputType === "checkbox" && (
        <label>
          <input
            id={props.inputId}
            type={props.inputType}
            name={props.inputName}
            onChange={props.changeHandler}
          />
          {props.content}
        </label>
      )}
      {props.inputType != "checkbox" && (
        <label>
          {props.content}
          <input
            id={props.inputId}
            type={props.inputType}
            name={props.inputName}
            required
            onChange={props.changeHandler}
          />
        </label>
      )}
    </Fragment>
  );
};

export default QuoteFormItem;
