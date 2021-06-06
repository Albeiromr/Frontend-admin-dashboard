import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import MultiRangeSlider from '../Multi range slider/MultiRangeSlider';
import { ProductGridContext } from "../../context/Product grid context/ProductGridContext";


const PriceFilter = () => {

    const {priceRange,minValue, maxValue} = useContext(ProductGridContext);

    

    return (
        <div className="price-filter">
            <h2 className="price-filter__title">price range</h2>
            <MultiRangeSlider min={priceRange.min} max={priceRange.max}/>

            <div className="price-filter__subcontainer">

                <div className="price-filter__min-container">

                    <p className="price-filter__label">Min</p>
                    <div className="price-filter__text-container">
                        <p className="price-filter__text">{`$${minValue}.00`}</p>
                    </div>

                </div>

                <div className="price-filter__dash"/>

                <div className="price-filter__max-container">

                    <p className="price-filter__label" >Max</p>
                    <div className="price-filter__text-container">
                        <p className="price-filter__text">{`$${maxValue}.00`}</p>
                    </div>

                </div>


            </div>

            <div className="price-filter__submit" >
                <p className="price-filter__submit-text">Apply</p>
            </div>

            <p className="price-filter__reset">Reset</p>

        </div>
    )
};

export default PriceFilter;