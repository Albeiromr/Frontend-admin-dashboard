import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import IndividualCategory from '../Individual category/IndividualCategory';
import IndividualSize from '../Individual size/IndividualSize';
import PriceFilter from '../Price filter/PriceFilter';


const Filters = () => {

    return(
        <aside className="filters">
            <h2 className="filters__title-one">Choose a Category</h2>

            <div className="filters__categories-container">
                <IndividualCategory />
                <IndividualCategory />
                <IndividualCategory />
                <IndividualCategory />
                <IndividualCategory />
            </div>

            <h2 className="filters__title-two">Find your size</h2>

            <div className="filters__sizes-container">
                <IndividualSize />
                <IndividualSize />
                <IndividualSize />
                <IndividualSize />
                <IndividualSize />
            </div>

            <div className="filters__range-filter-container">
                <PriceFilter />
            </div>
            
            
        </aside>
    )
};

export default Filters;