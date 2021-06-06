import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import CartIndividualProduct from '../Cart individual Product/CartIndividualProduct';

const CartOrderDetails  = () => {
    
    return(
        <div className="cart-order-details">

            <div className="cart-order-details__title-container">
                <h1 className="cart-order-details__title">Cart Summary</h1>
                <p className="cart-order-details__paragraph">
                Price can change depending on shipping method and taxes
                </p>
            </div>

            <div className="cart-order-details__products-container">
                <CartIndividualProduct />
                <CartIndividualProduct />
                
            </div>

            <div className="cart-order-details__price-summary-container">
                <div className="cart-order-details__subtotal-container">
                    <p className="cart-order-details__text">Subtotal</p>
                    <p className="cart-order-details__text">73.98 USD</p>
                </div>
                <div className="cart-order-details__tax-container">
                    <p className="cart-order-details__text">Tax</p>
                    <p className="cart-order-details__text">19% 16.53 USD</p>
                </div>
                <div className="cart-order-details__shipping-container">
                    <p className="cart-order-details__text">Shipping</p>
                    <p className="cart-order-details__text">5.00 USD</p>
                </div>
            </div>

            <div className="cart-order-details__total-price">
                <p className="cart-order-details__total-order-text">Total Order</p>
                <p className="cart-order-details__total-order-paragraph">Guaranteed delivery day:  June 12, 2020</p>
                <p className="cart-order-details__total-number">89.84 USD</p>
            </div>

        </div>
    )
};

export default CartOrderDetails;