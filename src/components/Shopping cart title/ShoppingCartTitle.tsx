import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {ShoppingCartContext} from '../../context/Shopping cart context/ShoppingCartContext';


const ShoppingCartTitle = () => {

    const {showPayment} = useContext(ShoppingCartContext);

    return (
        <div className="shopping-cart-title">
            <h1 className="shopping-cart-title__text">{!showPayment ? "Order Summary" : "Payment Method"}</h1>
        </div>
    )
};

export default ShoppingCartTitle;