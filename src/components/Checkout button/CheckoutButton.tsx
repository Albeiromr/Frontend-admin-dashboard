import React, { useContext } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { ShoppingCartContext } from "../../context/Shopping cart context/ShoppingCartContext";
import { useWindowWidth } from "@react-hook/window-size";

const CheckoutButton = () => {
  const { setShowPayment } = useContext(ShoppingCartContext);

  //with this costum hook we can get the window width
  const windowWidth = useWindowWidth();

  const TabletVwToScrollUp: number = (windowWidth / 100) * 45;
  const smarthphoneVwToScrollUp: number = (windowWidth / 100) * 55;

  const handleCheckoutClick = () => {
    setShowPayment(true);
    if (windowWidth <= 599) {
      window.scrollTo(0, smarthphoneVwToScrollUp);
    } else if (windowWidth >= 600 && windowWidth <= 1024) {
      window.scrollTo(0, TabletVwToScrollUp);
    }
  };

  return (
    <div onClick={handleCheckoutClick} className="checkout-button">
      <p className="checkout-button__text">Checkout</p>
    </div>
  );
};

export default CheckoutButton;
