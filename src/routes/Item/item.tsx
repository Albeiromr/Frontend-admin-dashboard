import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ActualPath from '../../components/Actual path/ActualPath';
import InterestProducts from '../../components/Interest products/InterestProducts';
import ProductDetails from '../../components/Product details/ProductDetails';


const Item = () => {

    return(
        <div className="item">
            <ActualPath />
            <ProductDetails />
            <InterestProducts />

        </div>
    )
};


export default Item;