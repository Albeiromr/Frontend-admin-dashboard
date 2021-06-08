import React, {FC, useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import pencil from '../../assets/icons/pencil.svg';
import {componentProps} from './types';

const AdminListedProduct:FC<componentProps> = (props) => {

    const {setAdminRoute, setProductToEdit, setProductPost, productGet, setProductGet, setProductToShow} = useContext(AdminDashboardContext);

    const handleProductClick = () => {
        async function getProductToShow() {
            let fetchedData = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/product/${props.productSku}`);
            let responseToJson = await fetchedData.json();
            let fetchedProduct = responseToJson[0];
            setProductToShow(fetchedProduct);
            setAdminRoute("product-details");
        };
        getProductToShow();
    };

    const handleDeleteClick = () => {
        
        fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/product/${props.productSku}`, {
            method: "DELETE"
        })
        .then(() => {
            const withoutDeletedProduct = productGet.filter(product => product.sku !== props.productSku);
            setProductGet(withoutDeletedProduct);
        });
    };

    const handleEditClick = () => {

        fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/product/${props.productSku}`)
        .then(response => response.json())
        .then(response => {
            setProductToEdit(response[0]);
            setProductPost(response[0]);
            setAdminRoute("product-form");
        });        
    };

    return (
        <article  className="admin-listed-product">

            <div onClick={handleProductClick} className="admin-listed-product__clicked-area"></div>

            <div className="admin-listed-product__image-container">
                <img className="admin-listed-product__image" 
                src={`${process.env.REACT_APP_BACKEND_DOMAIN}/static/${props.productPicture}`}
                alt="product" />
            </div>

            <p className="admin-listed-product__textOne">{props.productSku}</p>
            <p className="admin-listed-product__textTwo">{props.productName}</p>
            <p className="admin-listed-product__textThree">{`$${props.productPrice}`}</p>
            <p className="admin-listed-product__textFour">{`$${props.productProfit}`}</p>
            <p className="admin-listed-product__textFive">{props.productStock}</p>

            <div className="admin-listed-product__icon-container">

                <img
                onClick={handleDeleteClick}
                className="admin-listed-product__icon" 
                src={deleteIcon} alt="delete" />

                <img 
                onClick={handleEditClick}
                className="admin-listed-product__icon" 
                src={pencil} alt="edit" />

            </div>

        </article>
    )
};

export default AdminListedProduct;