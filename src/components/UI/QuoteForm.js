import React, { useState, Fragment, useRef } from "react";
import classes from "./QuoteForm.module.css";
import QuoteFormItem from "./QuoteFormItem";
import emailjs from "emailjs-com";
import SubmitModal from "./SubmitModal";

const QuoteForm = (props) => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState("");
  const [deIce, setDeIce] = useState("No Deicing");
  const [shovel, setShovel] = useState("No Shoveling");
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = (props) => {
    setShowModal(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setError("");
    if (phone.trim().length != 10) {
      setError("Please enter a valid phone number");
      return;
    }

    // emailjs
    //   .sendForm(
    //     "service_2sunubk",
    //     "template_csywi4g",
    //     form.current,
    //     "1bTVL6KPTvsqyHpBj"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    event.target.reset();
    setShowModal(true);
  };

  const textAreaHandler = (event) => {
    setAdditionalInfo(document.getElementById("additionalInfo").value);
  };

  return (
    <Fragment>
      {showModal && (
        <SubmitModal
          first_name={firstName}
          last_name={lastName}
          closeModalHandler={closeModalHandler}
        />
      )}
      <h1 className={classes.quote__container}>
        Fill out the form below to get your quote!
      </h1>
      <div className={classes.quote__container} id="pricing">
        <form onSubmit={onSubmitHandler} ref={form}>
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
                changeHandler={(e) => {
                  setDeIce("No Deicing");
                  if (e.target.checked) {
                    setDeIce("I would like Deicing Services.");
                  }
                }}
                content="I want de-icing services"
                inputType="checkbox"
                inputName="deIce"
              />
              <QuoteFormItem
                changeHandler={(e) => {
                  setShovel("No Shoveling");
                  if (e.target.checked) {
                    setShovel("I would like Shoveling Services.");
                  }
                }}
                content="I want my walkway shoveled"
                inputType="checkbox"
              />
            </div>
          </div>

          <div className={classes.lower__styling}>
            <p>Include any additional information that might help us </p>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              onChange={textAreaHandler}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </Fragment>
  );
};
export default QuoteForm;
