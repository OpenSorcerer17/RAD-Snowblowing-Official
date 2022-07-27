import React, { useState, Fragment } from "react";
import classes from "./FAQItem.module.css";

const FAQItem = (props) => {
  const [isItemClicked, setIsItemClicked] = useState(false);

  const itemClickHandler = () => {
    if (isItemClicked === true) {
      setIsItemClicked(false);
      console.log("false");
      return;
    }
    setIsItemClicked(true);
  };
  return (
    <div className={classes.item_container}>
      <div className={classes.question}>
        <h3>{props.question}</h3>
        <button
          onClick={itemClickHandler}
          className={
            (isItemClicked === false && `fas fa-plus`) ||
            (isItemClicked === true && `fas fa-minus`)
          }
        ></button>
      </div>
      {isItemClicked === true && (
        <div className={classes.answer_shown}>
          <p>{props.answer}</p>
        </div>
      )}
      {isItemClicked === false && (
        <div className={classes.answer_hidden}>
          <p>{props.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
