import React, { Fragment } from "react";
import classes from "./QuoteFormItem.module.css";

const QuoteFormItem = (props) => {
  return (
    <Fragment>
      {props.inputType === "checkbox" && (
        <div className={classes.checkbox}>
          <label>
            <input
              id={props.inputId}
              type={props.inputType}
              name={props.inputName}
              onChange={props.changeHandler}
            />
            {props.content}
          </label>
        </div>
      )}
      {props.inputType !== "checkbox" && (
        <label>
          {props.content}
          <span>*</span>
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
