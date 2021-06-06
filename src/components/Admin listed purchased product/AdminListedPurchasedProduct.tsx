import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const AdminListedPurchasedProduct = () => {

    return(
        <article className="admin-listed-purchased-product">

            <div className="admin-listed-purchased-product__image-container">
                {/* <img className="admin-listed-purchased-product__image" src={test} alt="product" /> */}
            </div>

            <p className="admin-listed-purchased-product__text-one">8907SNE78976</p>
            <p className="admin-listed-purchased-product__text-two">Adidas AH80</p>
            <p className="admin-listed-purchased-product__text-three">8 units</p>
            <p className="admin-listed-purchased-product__text-four">$251.16</p>
            
        </article>
    )
};

export default AdminListedPurchasedProduct;