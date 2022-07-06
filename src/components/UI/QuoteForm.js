import React, {useState} from "react";
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

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
        if(firstName.trim().length === 0) {
            console.log("First name cannot be blank");
        }

        if(lastName.trim().length === 0) {
            console.log("Last name cannot be blank");
        }

        if(email.trim().length === 0) {
            console.log("Email name cannot be blank");
        }

        if(phone.trim().length === 0) {
            console.log("Phone name cannot be blank");
        }

        if(address.trim().length === 0) {
            console.log("Address name cannot be blank");
        }

        if(city.trim().length === 0) {
            console.log("City name cannot be blank");
        }
    };

    return (<div className={classes.quote__container} id="pricing">
        <h1>Fill out the form below to get your quote!</h1>
        <form>
            <div className={classes.quote__container__row}>
            <label>
                First Name
                <input type="text" name="first_name"  onChange={firstNameChangeHandler} />
            </label>
            <label>
                Last Name
                <input type="text" name="last_name" onChange={lastNameChangeHandler} />
            </label>
            </div>
            <div className={classes.quote__container__row}>
            <label>
                Email Address
                <input type="email" name="email" onChange={emailChangeHandler} />
            </label>
            <label>
                Phone Number
                <input type="text" name="phone" onChange={phoneChangeHandler} />
            </label>
            </div>
            <div className={classes.quote__container__row}>
            <label>
                Street Address
                <input type="text" name="address" onChange={addressChangeHandler} />
            </label>
            <label>
                City
                <input type="text" name="city" onChange={cityChangeHandler} />
            </label>
            </div>
            <div className={classes.quote__container__checkbox}>
            <input type="checkbox"/>
                <label>I have a paved driveway
                    
                </label>
                <input type="checkbox"/>
                <label>I have a concrete driveway
                </label>
                <input type="checkbox"/>
                <label>I am interested in de-icing service
                </label>
                <input type="checkbox"/>
                <label>I am interested in sidewalk snow-shoveling
                </label>
            </div>
            <div>
                <p>Include any additional information that might help us </p>
                <textarea></textarea>
            </div>
            <button onClick={onSubmitHandler}>Submit</button>
            
        </form>
    </div>);
};

export default QuoteForm;