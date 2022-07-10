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
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [error, setError] = useState('');
    const [checkBoxes, setCheckboxes] = useState([false, false, false, false]);
    const [emailToSend, setEmailToSend] = useState({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_numer: phone,
        address: address,
        city: city,
        additional_info: additionalInfo,
        checkBoxes: checkBoxes
    });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setError('');

        if(phone.trim().length != 10) {
            setError('Please enter a valid phone number');
            return;
        }

        
        console.log(emailToSend);
        };

    const textAreaHandler = (event) => {
        setAdditionalInfo(document.getElementById("additionalInfo").value);
    };

    const checkBoxHandler = (event, idx) => {
        if(event.target.checked) {
        // setCheckboxes((prevState) => {
        //     let newArr = [...prevState.checkBoxes];
        //     newArr[idx] = true;
        //     checkBoxes: [...newArr];
        // })
    }
        console.log(checkBoxes);
    };

    return (<Fragment><h1 className={classes.quote__container}>Fill out the form below to get your quote!</h1>
    <div className={classes.quote__container} id="pricing">
    <form onSubmit={onSubmitHandler} action="https://formsubmit.co/socupoka@maildim.com" method="POST">
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={(e => {
            setFirstName(e.target.value)
            emailToSend.first_name = e.target.value;
        })} content="First name" inputType="text" inputName="first_name"/>
        <QuoteFormItem  changeHandler={(e => {
            setLastName(e.target.value)
        })} content="Last name" inputType="text" inputName="last_name"/>
        </div>
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={(e => {
            setEmail(e.target.value)
        })} content="Email" inputType="email" inputName="email"/>
        <QuoteFormItem  changeHandler={(e => {
            setPhone(e.target.value)
        })} content="Phone Number" inputType="tel" inputName="phone"/>
        </div>
        <div className={classes.quote__container__row}>
        <QuoteFormItem  changeHandler={(e => {
            setAddress(e.target.value)
        })} content="Street Address" inputType="text" inputName="address"/>
        <QuoteFormItem  changeHandler={(e => {
            setCity(e.target.value)
        })} content="City" inputType="text" inputName="city"/>
        </div>
        <div className={classes.quote__container__checkbox}>
        <div className={classes.quote__container__row}>
            <QuoteFormItem changeHandler={checkBoxHandler} content="I want de-icing services" inputType="checkbox"/>
            <QuoteFormItem changeHandler={checkBoxHandler} content="I want my walkway shoveled" inputType="checkbox"/>
        </div>
        <div className={classes.quote__container__row}>
            <QuoteFormItem changeHandler={checkBoxHandler} content="Test 3" inputType="checkbox"/>
            <QuoteFormItem changeHandler={checkBoxHandler} content="Test 4" inputType="checkbox"/>
            </div>
            </div>
            
        
        
        <div className={classes.lower__styling}>
            <p>Include any additional information that might help us </p>
            <textarea id="additionalInfo" onChange={textAreaHandler}></textarea>
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
        
        
    </form>
    </div></Fragment>
        
    );
}
export default QuoteForm;