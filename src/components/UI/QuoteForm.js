import React, {useState, Fragment} from "react";
import classes from './QuoteForm.module.css';
import QuoteFormItem from "./QuoteFormItem";

const QuoteForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState({error: false,
    message: ''})

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };

    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    };

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(phone.trim().length != 10) {
            setError(prevState => ({
                error: {
                    ...prevState.error,
                    message: "Please enter a valid 10 digit phone number",
                    error: true
                }
            }))
            console.log(error['message']);
        }
    };

    return (<Fragment><h1 className={classes.quote__container}>Fill out the form below to get your quote!</h1>
    <div className={classes.quote__container} id="pricing">
    <form onSubmit={onSubmitHandler}>
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={firstNameChangeHandler} content="First name" inputType="text" inputName="first_name"/>
        <QuoteFormItem  changeHandler={lastNameChangeHandler} content="Last name" inputType="text" inputName="last_name"/>
        </div>
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={emailChangeHandler} content="Email" inputType="email" inputName="email"/>
        <QuoteFormItem  changeHandler={phoneChangeHandler} content="Phone Number" inputType="tel" inputName="phone"/>
        </div>
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={addressChangeHandler} content="Street Address" inputType="text" inputName="address"/>
        <QuoteFormItem  changeHandler={cityChangeHandler} content="City" inputType="text" inputName="city"/>
        </div>
        
        <div className={classes.quote__container__checkbox}>
            <QuoteFormItem changeHandler='' content="I want de-icing services" inputType="checkbox"/>
            <QuoteFormItem changeHandler='' content="I want my walkway shoveled" inputType="checkbox"/>
            <QuoteFormItem changeHandler='' content="Test 3" inputType="checkbox"/>
            <QuoteFormItem changeHandler='' content="Test 4" inputType="checkbox"/>
            
        </div>
        
        <div className={classes.lower__styling}>
            <p>Include any additional information that might help us </p>
            <textarea></textarea>
        </div>
        <button type="submit">Submit</button>
        {error.error && <p>{error.message}</p>}
        
        
    </form>
    </div></Fragment>
        
    );
}
export default QuoteForm;