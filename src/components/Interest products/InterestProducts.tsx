import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { useWindowWidth } from "@react-hook/window-size";
import ProductCard from '../../components/Product card/ProductCard';
import arrowRight from '../../assets/icons/arrowRight.svg';
import {useHistory} from 'react-router-dom';


const InterestProducts = () => {

    //with this costum hook we can get the window width for conditionally to render some components
    const windowWidth = useWindowWidth();

    const history = useHistory();

    const handleClick = () => {
      history.push("/products");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });   
    };

    return (
        <section className="interest-products">
            <h2 className="interest-products__title">This might interest you!!</h2>
            <div className="interest-products__product-card-container">
                <ProductCard scrollSmooth={false}/>
                <ProductCard scrollSmooth={false}/>
                <ProductCard scrollSmooth={false}/> 
                {windowWidth < 1025 && windowWidth > 599 ? null : <ProductCard  scrollSmooth={false}/>} 
            </div>
            <div onClick={handleClick} className="interest-products__button">
                <p className="interest-products__button-text">Show More</p>
                <img className="interest-products__button-arrow" src={arrowRight} alt="arrow"/>
            </div>
        </section>
    )
}

export default InterestProducts;