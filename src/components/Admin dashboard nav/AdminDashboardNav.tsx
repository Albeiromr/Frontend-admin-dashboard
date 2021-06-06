import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import productsWhite from '../../assets/icons/productsWhite.svg';
import chevronLeftGray from '../../assets/icons/chevronLeftGray.svg';
import addGray from '../../assets/icons/addGray.svg';
import shoesGray from '../../assets/icons/shoesGray.svg';
import shoesGreen from '../../assets/icons/shoesGreen.svg';
import pantsGray from '../../assets/icons/pantsGray.svg';
import pantsGreen from '../../assets/icons/pantsGreen.svg';
import capGray from '../../assets/icons/capGray.svg';
import capGreen from '../../assets/icons/capGreen.svg';
import jacketGray from '../../assets/icons/jacketGray.svg';
import jacketGreen from '../../assets/icons/jacketGreen.svg';
import shortsGray from '../../assets/icons/shortsGray.svg';
import shortsGreen from '../../assets/icons/shortsGreen.svg';
import shirtGray from '../../assets/icons/shirtGray.svg';
import shirtGreen from '../../assets/icons/shirtGreen.svg';
import {productToEditInitial, productPostInitial} from '../../context/Admin dashboard context/initialValues';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminDashboardNav = () => {

    const {
        adminRoute,
        setAdminRoute,
        productFamily,
        setProductFamily,
        setProductToEdit,
        setProductPost
    } = useContext(AdminDashboardContext);


    const handleAddNewClick = () => {
        setAdminRoute("product-form");
        setProductToEdit(productToEditInitial);
        setProductPost(productPostInitial);
    }

    const handleAllProductsClick = () => {
        setAdminRoute("products");
        setProductToEdit(productToEditInitial);
        setProductPost(productPostInitial);
    }
    
    
    const handleSneakersClick = () => {
      if (productFamily !== "Sneakers & Shoes") setProductFamily("Sneakers & Shoes");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    const handlePantsClick = () => {
      if (productFamily !== "Pants") setProductFamily("Pants");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    const handleCapsClick = () => {
      if (productFamily !== "Caps") setProductFamily("Caps");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    const handleJacketsClick = () => {
      if (productFamily !== "Jackets") setProductFamily("Jackets");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    const handleShortsClick = () => {
      if (productFamily !== "Shorts") setProductFamily("Shorts");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    const handleShirtClick = () => {
      if (productFamily !== "Tshirts & Shirts") setProductFamily("Tshirts & Shirts");
      else return;
      setProductToEdit(productToEditInitial);
      setProductPost(productPostInitial);
    };

    return(
        <div className="admin-dashboard-nav">

            <div className="admin-dashboard-nav__left-button-container">

                

                <div className="admin-dashboard-nav__selected-button">
                    <img className="admin-dashboard-nav__products-icon" src={productsWhite} alt="products" />
                     <p className="admin-dashboard-nav__selected-text">Products</p>
                </div>

            </div>

            {adminRoute === "products" ?
            <div className="admin-dashboard-nav__product-icon-container">

                <img 
                onClick={handleSneakersClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Sneakers & Shoes" ? shoesGreen : shoesGray}
                alt="product type" />

                <img 
                onClick={handlePantsClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Pants" ? pantsGreen : pantsGray}
                alt="product type" />

                <img 
                onClick={handleCapsClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Caps" ? capGreen : capGray}
                alt="product type" />

                <img 
                onClick={handleJacketsClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Jackets" ? jacketGreen : jacketGray}
                alt="product type" />

                <img 
                onClick={handleShortsClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Shorts" ? shortsGreen : shortsGray}
                alt="product type" />

                <img 
                onClick={handleShirtClick}
                className="admin-dashboard-nav__product-icon"
                src={productFamily === "Tshirts & Shirts" ? shirtGreen : shirtGray}
                alt="product type" />

            </div>
            : null}

            <div className="admin-dashboard-nav__right-button-container">


                {adminRoute === "products" ?
                <div onClick={handleAddNewClick} className="admin-dashboard-nav__add-new-button">
                    <img className="admin-dashboard-nav__add-new-button-icon" src={addGray} alt="add" />
                    <p className="admin-dashboard-nav__add-new-button-text">Add New</p>
                </div>
                : null}

                {adminRoute === "product-form" || adminRoute === "product-details" ?
                <div onClick={handleAllProductsClick} className="admin-dashboard-nav__all-products-button">
                    <img className="admin-dashboard-nav__all-products-button-icon" src={chevronLeftGray} alt="back" />
                    <p className="admin-dashboard-nav__all-products-button-text">All Products</p>
                </div>
                : null}

                

            </div>
            

       </div>
    )
};

export default AdminDashboardNav;