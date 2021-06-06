import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { useWindowWidth } from "@react-hook/window-size";
import ProductCard from '../Product card/ProductCard';
import arrowRight from '../../assets/icons/arrowRight.svg';
import {useHistory} from 'react-router-dom';

const HomeGrid = () => {
    
    //with this costum hook we can get the window width for conditionally to render some components
    const windowWidth = useWindowWidth()

    const history = useHistory();

    const handleCategoryclick = () => {
      history.push("/products");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    const handleButtonClick = () => {
        history.push("/products");
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };

    return (
        <section className="home-grid">
            <h2 className="home-grid__title"># Run With Style</h2>
            <div className="home-grid__category-container">
                <div className="home-grid__category-subcontainer">

                    <div onClick={handleCategoryclick} className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Training Sneakers</h3>
                    </div>
                    
                    <div onClick={handleCategoryclick} className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Casual Sneakers</h3>
                    </div>
                    
                    <div  onClick={handleCategoryclick} className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Thin Material</h3>
                    </div>
                    
                    <div onClick={handleCategoryclick} className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Thick sole</h3>
                    </div>
                    
                    <div onClick={handleCategoryclick} className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">For Any Occasion</h3>
                    </div>
                    
                </div>
            </div>

            <div className="home-grid__product-card-container">
                <ProductCard />
                <ProductCard />
                <ProductCard /> 
                {windowWidth < 599 ? <ProductCard /> : null} 
            </div>

            <div onClick={handleButtonClick} className="home-grid__button">
                <p className="home-grid__button-text">All Sneakers</p>
                <img className="home-grid__button-arrow" src={arrowRight} alt="arrow"/>
            </div>
        </section>
    )
};

export default HomeGrid;