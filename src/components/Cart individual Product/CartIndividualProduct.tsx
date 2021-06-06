import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import remove from '../../assets/icons/remove.svg';
import {useHistory} from 'react-router-dom';

const CartIndividualProduct = () => {

    const history = useHistory();

    const handleNameClick = () => {
      history.push("/products/item");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    return(
        <article className="cart-individual-product">
            <div className="cart-individual-product__subcontainer">

                <div className="cart-individual-product__image-container">
                    {/* <img className="cart-individual-product__image" src={test} alt="product" /> */}
                </div>

                <h2 onClick={handleNameClick} className="cart-individual-product__title">Product Title</h2>
                <p className="cart-individual-product__big-price">36.99 USD</p>
                <p className="cart-individual-product__crossed-line-price">48.56 USD</p>
                <p className="cart-individual-product__size-text">Size</p>
                <div className="cart-individual-product__size-container">
                    <p className="cart-individual-product__size">M</p>
                </div>

                <div className="cart-individual-product__quantity-container">
                    <p className="cart-individual-product__quantity-container-number">3</p>
                    <div className="cart-individual-product__quantity-container-line" />
                    <p className="cart-individual-product__quantity-container-text">Pcs</p>
                </div>

                <div className="cart-individual-product__remove-container">
                    <img className="cart-individual-product__remove-container-icon" src={remove} alt="close" />
                    <p className="cart-individual-product__remove-container-text">Remove</p>
                </div>

            </div>

            <div className="cart-individual-product__line"/>

        </article>
    )
};

export default CartIndividualProduct;