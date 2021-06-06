import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import CartOrderDetails from '../Cart order details/CartOrderDetails';
import CheckoutButton from '../Checkout button/CheckoutButton';
import Payment from '../Payment/Payment'

const Cart = () => {

    return (
        <section className="cart">

            <div className="cart__payment-container">
                <Payment />
            </div>

            <div className="cart__cart-order-details-container">
                <CartOrderDetails />
            </div>
            <CheckoutButton />
        </section>
    )
};

export default Cart;