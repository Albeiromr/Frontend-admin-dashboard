import React, {useContext} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ActualPath from '../../components/Actual path/ActualPath';
import Cart from '../../components/Cart/Cart'
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import InterestProducts from '../../components/Interest products/InterestProducts';
import MobileCheckout from '../../components/Mobile checkout/MobileCheckout';
import ShoppingCartTitle from '../../components/Shopping cart title/ShoppingCartTitle';
import {ShoppingCartContext} from '../../context/Shopping cart context/ShoppingCartContext';
import { useWindowWidth } from "@react-hook/window-size";


const ShoppingCart = () => {

  const {showPayment} = useContext(ShoppingCartContext);
  
  const width = useWindowWidth();

  return <div className="shopping-cart">
    <ActualPath />

    { width <= 599 ? <ShoppingCartTitle /> : null }

    { width >= 1025 ? <Cart /> : null }

    { width <= 1024 && showPayment === false ? <Cart />
    : width <= 1024 && showPayment === true ? <MobileCheckout /> 
    : null}

    <DiscoverSection />
    <InterestProducts />
  </div>;
};

export default ShoppingCart;
