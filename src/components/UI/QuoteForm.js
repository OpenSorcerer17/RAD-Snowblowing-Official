import React, { useState, Fragment } from "react";
import classes from "./QuoteForm.module.css";
import QuoteFormItem from "./QuoteFormItem";

const QuoteForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState("");
  const [checkBoxes, setCheckboxes] = useState({
    deIce: false,
    shovel: false,
    test3: false,
    test4: false,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const emailToSend = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_numer: phone,
      address: address,
      city: city,
      additional_info: additionalInfo,
      checkBoxes: checkBoxes,
    };
    setError("");

    if (phone.trim().length != 10) {
      setError("Please enter a valid phone number");
      return;
    }

    console.log(emailToSend);
  };

  const textAreaHandler = (event) => {
    setAdditionalInfo(document.getElementById("additionalInfo").value);
  };

  const checkBoxHandler = (event, currentBox) => {
    if (event.target.checked) {
      let newCheckboxes = { ...checkBoxes, [currentBox]: true };
      setCheckboxes(newCheckboxes);
    } else {
      let newCheckboxes = { ...checkBoxes, [currentBox]: false };
      setCheckboxes(newCheckboxes);
    }
    console.log(checkBoxes);
  };

  return (
    <Fragment>
      <h1 className={classes.quote__container}>
        Fill out the form below to get your quote!
      </h1>
      <div className={classes.quote__container} id="pricing">
        <form onSubmit={onSubmitHandler}>
          <div className={classes.quote__container__row}>
            <QuoteFormItem
              changeHandler={(e) => {
                setFirstName(e.target.value);
              }}
              content="First name"
              inputType="text"
              inputName="first_name"
            />
            <QuoteFormItem
              changeHandler={(e) => {
                setLastName(e.target.value);
              }}
              content="Last name"
              inputType="text"
              inputName="last_name"
            />
          </div>
          <div className={classes.quote__container__row}>
            <QuoteFormItem
              changeHandler={(e) => {
                setEmail(e.target.value);
              }}
              content="Email"
              inputType="email"
              inputName="email"
            />
            <QuoteFormItem
              changeHandler={(e) => {
                setPhone(e.target.value);
              }}
              content="Phone Number"
              inputType="tel"
              inputName="phone"
            />
          </div>
          <div className={classes.quote__container__row}>
            <QuoteFormItem
              changeHandler={(e) => {
                setAddress(e.target.value);
              }}
              content="Street Address"
              inputType="text"
              inputName="address"
            />
            <QuoteFormItem
              changeHandler={(e) => {
                setCity(e.target.value);
              }}
              content="City"
              inputType="text"
              inputName="city"
            />
          </div>
          <div className={classes.quote__container__checkbox}>
            <div className={classes.quote__container__row}>
              <QuoteFormItem
                changeHandler={(e) => checkBoxHandler(e, "deIce")}
                content="I want de-icing services"
                inputType="checkbox"
              />
              <QuoteFormItem
                changeHandler={(e) => checkBoxHandler(e, "shovel")}
                content="I want my walkway shoveled"
                inputType="checkbox"
              />
            </div>
            <div className={classes.quote__container__row}>
              <QuoteFormItem
                changeHandler={(e) => checkBoxHandler(e, "test3")}
                content="Test 3"
                inputType="checkbox"
              />
              <QuoteFormItem
                changeHandler={(e) => checkBoxHandler(e, "test4")}
                content="Test 4"
                inputType="checkbox"
              />
            </div>
          </div>

          <div className={classes.lower__styling}>
            <p>Include any additional information that might help us </p>
            <textarea id="additionalInfo" onChange={textAreaHandler}></textarea>
          </div>
          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </Fragment>
  );
};
export default QuoteForm;
