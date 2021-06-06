import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Payment from '../Payment/Payment';


const MobileCheckout = () => {

    return(
        <section className="mobile-checkout">
            <div className="mobile-checkout__payment-container">
                <Payment />
            </div>
        </section>
    )
};

export default MobileCheckout;