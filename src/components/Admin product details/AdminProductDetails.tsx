import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';


const AdminProductDetails = () => {

    const {productToShow} = useContext(AdminDashboardContext);

    return(
        <div className="admin-product-details">

            <div className="admin-product-details__table-title-bar">
                <p className="admin-product-details__table-title">Product Details</p>
            </div>

            <div className="admin-product-details__table-container">
                <div className="admin-product-details__table-image-container">
                    {/* <img className="admin-product-details__table-image" src={test} alt="product" /> */}
                </div>

                <h1 className="admin-product-details__title">{productToShow.productName}</h1>
                <p className="admin-product-details__description-title">Description:</p>
                <p className="admin-product-details__description-text">{productToShow.productDescription}</p>
                <p className="admin-product-details__product-type-title">Product Type:</p>
                <p className="admin-product-details__product-type-text">{productToShow.productType}</p>
                <p className="admin-product-details__sku-title">Sku:</p>
                <p className="admin-product-details__sku-text">{productToShow.sku}</p>
                <p className="admin-product-details__price-title">Price:</p>
                <p className="admin-product-details__price-text">${productToShow.productPrice}</p>
                <p className="admin-product-details__stock-title">Stock:</p>
                <p className="admin-product-details__stock-text">{productToShow.productStock}</p>
                <p className="admin-product-details__reviews-title">Reviews:</p>
                <p className="admin-product-details__reviews-text">{productToShow.reviewQuantity}</p>
                <p className="admin-product-details__sizes-title">Sizes:</p>
                <p className="admin-product-details__sizes-text">
                    {`${productToShow.sizeOne}, ${productToShow.sizeTwo}, ${productToShow.sizeThree}, ${productToShow.sizeFour}, ${productToShow.sizeFive}`}
                </p>
                <p className="admin-product-details__old-price-title">Old price:</p>
                <p className="admin-product-details__old-price-text">${productToShow.productOldPrice}</p>
                <p className="admin-product-details__rate-title">Rate:</p>
                <p className="admin-product-details__rate-text">{productToShow.productRate} Stars</p>
                <p className="admin-product-details__sold-title">Sold:</p>
                <p className="admin-product-details__sold-text">{productToShow.soldQuantity}</p>
                <p className="admin-product-details__profit-title">Profit:</p>
                <p className="admin-product-details__profit-text">${productToShow.productProfit}</p>

            </div>

        </div>
    )
};

export default AdminProductDetails;