import React, {useState, useContext, useEffect} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import chevronHideCategories from '../../assets/icons/chevronHideCategories.svg';
import {cssVariables} from './types';
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';
import ProductCard from '../Product card/ProductCard';
import Filters from '../Filters/Filters';

const MobileProductGrid = () => {

    const {showFilters, setShowFilters} = useContext(ProductGridContext);

    //This state is for hidding or not the filters in smartphone and tablets screens
    const [translate, setTranslate] = useState("-44.726%");

    const handlebuttonClick = () => {
        setShowFilters(false)
    };

    useEffect(() => {
        if (showFilters === false) setTranslate("-44.726%");
        else setTranslate("-0%");
      }, [showFilters]);

    return (
        <main style={{"--translate": translate} as cssVariables} className="mobile-product-grid">

            <div className="mobile-product-grid__filter-container">
                <Filters />
            </div>

            <div onClick={handlebuttonClick} className="mobile-product-grid__button">
                <img className="mobile-product-grid__button-icon" src={chevronHideCategories} alt="hide"/>
            </div>

            <div className="mobile-product-grid__subcontainer">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </main>
    )
};

export default MobileProductGrid;