import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const TestForm = () => {

    return (
        <div className="test-form">

            <h1 className="test-form__title">Don't you have an account?</h1>
            <p className="test-form__text">Don't worry, is for free, just sign up with your data and access to make purchases in our store</p>

            <form className="test-form__form">
                <div className="test-form__input-container">

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">First Name</label>
                        <input className="test-form__input" type="text" placeholder="First Name"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">last Name</label>
                        <input className="test-form__input" type="text" placeholder="last Name"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">Email address</label>
                        <input className="test-form__input" type="email" placeholder="Email address"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">Phone number</label>
                        <input className="test-form__input" type="text" placeholder="Phone number"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">Password</label>
                        <input className="test-form__input" type="password" placeholder="Password"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">Confirm password</label>
                        <input className="test-form__input" type="password" placeholder="Confirm password"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">State / Country</label>
                        <input className="test-form__input" type="text" placeholder="State / Country"/>
                    </div>

                    <div className="test-form__input-and-label-container">
                        <label className="test-form__label">ZIP/Postal code</label>
                        <input className="test-form__input" type="text" placeholder="ZIP/Postal code"/>
                    </div>

                </div>
            </form>

            <div className="test-form__submit-button">
                <p className="test-form__submit-button-text">Sign Up</p>
            </div>
        </div>
    )
};

export default TestForm;