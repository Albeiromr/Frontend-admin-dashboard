import React,{useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';
import filters from '../../assets/icons/filters.svg';
import chevronHideCategories from '../../assets/icons/chevronHideCategories.svg';
import SmallFilter from '../Small filter/SmallFilter';


const MainTitle = () => {

    const {showFilters, setShowFilters} = useContext(ProductGridContext);

    const handleButtonClick = () => {
        if(showFilters === false) setShowFilters(true);
        else setShowFilters(false);
    };

    return(
        <section className="main-title">
            <h1 className="main-title__title">Sneakers &amp; Shoes</h1>

            <div onClick={handleButtonClick} 
            className={showFilters === false ? "main-title__filter-button" : "main-title__filter-button--activated"}
            >

                <img className="main-title__filter-button-icon" 
                src={showFilters === false ? filters : chevronHideCategories} 
                alt="filters"/>

            </div>
            
            <div className="main-title__small-category-container">
                <div className="main-title__small-category-subcontainer">
                    <p className="main-title__small-category-pretext">Applied filters:</p>
                    <SmallFilter />
                    <SmallFilter />
                    <SmallFilter />
                </div>
            </div>

        </section>
    )
};

export default MainTitle;