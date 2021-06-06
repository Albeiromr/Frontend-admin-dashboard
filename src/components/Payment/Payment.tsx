import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import cardCircle from '../../assets/images/cardCircle.png';
import colorCards from '../../assets/images/colorCards.png';
import shield from '../../assets/icons/shield.svg';
import chevronHideCategories from '../../assets/icons/chevronHideCategories.svg';
import {ShoppingCartContext} from '../../context/Shopping cart context/ShoppingCartContext';
import { useWindowWidth } from "@react-hook/window-size";

const Payment = () => {

    const {setShowPayment} = useContext(ShoppingCartContext);

    //with this costum hook we can get the window width
    const windowWidth = useWindowWidth();
    
    const TabletVwToScrollUp: number = (windowWidth / 100) * 25;
    const smarthphoneVwToScrollUp: number = (windowWidth / 100) * 58;

    const handleReturnClick = () => {
      setShowPayment(false);
      if (windowWidth <= 599) {
        window.scrollTo(0, smarthphoneVwToScrollUp);
      } else if (windowWidth >= 600 && windowWidth <= 1024) {
        window.scrollTo(0, TabletVwToScrollUp);
      }
    };

    return (
        <div className="payment">
            <h2 className="payment__title">Payment Method</h2>
            <p className="payment__text">Please enter your payment method</p>
            <div className="payment__card-info-container">

                <img className="payment__card-circle" src={cardCircle} alt="circle" />
                <div className="payment__card-text">Credit Card</div>
                <img  className="payment__card-color-cards" src={colorCards} alt="cards" />

                <div className="payment__card-number-input-container">
                    <label className="payment__label" htmlFor="number">Card Number</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="number"
                    placeholder="Card number"
                    />
                </div>

                <div className="payment__card-holder-input-container">
                    <label className="payment__label" htmlFor="holder">Card Holder</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="holder"
                    placeholder="Card holder"
                    />
                </div>

                <div className="payment__card-expiration-input-container">
                    <label className="payment__label" htmlFor="expiration">Expiration Date</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="expiration"
                    placeholder="MM/YY"
                    />
                </div>

                <div className="payment__card-cvc-input-container">
                    <label className="payment__label" htmlFor="cvc">CVC</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="cvc"
                    placeholder="CVC"
                    />
                </div>

            </div>

            <div className="payment__demo-card-button">
                <p className="payment__demo-card-button-text">Use Demo Card</p>
            </div>

            <h2 className="payment__confirmation-title">Shipping Information</h2>

            <div className="payment__confirmation-name-container">
                <label className="payment__confirmation-lable" htmlFor="name">Name and Lastname</label>
                <input 
                className="payment__confirmation-input"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name and lastname"
                />
            </div>

            <div className="payment__confirmation-address-container">
                <label className="payment__confirmation-lable" htmlFor="address">Shipping Adress</label>
                <input 
                className="payment__confirmation-input"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your shipping Adress"
                />
            </div>
            
            <div className="payment__complete-order-button">
                <p className="payment__demo-card-button-text"> Complete Order</p>
            </div>

            <img className="payment__shield-icon" src={shield} alt="shield" />
            <p className="payment__shield-title">All your data is safe</p>
            <p className="payment__shield-paragraph">
                We are using the most advanced security to provide you the best experience ever.
            </p>

            <div className="payment__return-button">
                <img onClick={handleReturnClick} className="payment__return-button-icon" src={chevronHideCategories} alt="arrow" />
            </div>
        </div>
    )
};

export default Payment;