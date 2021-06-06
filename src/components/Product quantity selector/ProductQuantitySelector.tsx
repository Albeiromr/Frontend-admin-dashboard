import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import less from '../../assets/icons/less.svg';
import plus from '../../assets/icons/plus.svg';


const ProductQuantitySelector = () => {

    return (
        <div className="product-quantity-selector">
            <div className="product-quantity-selector__button">
                <img className="product-quantity-selector__icon" src={less} alt="less" />
            </div>
            
                <p className="product-quantity-selector__number">1</p>

            <div className="product-quantity-selector__button">
                <img className="product-quantity-selector__icon" src={plus} alt="plus" />
            </div>
        </div>
    )
};

export default ProductQuantitySelector;