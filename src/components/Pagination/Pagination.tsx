import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import chevronLeft from '../../assets/icons/chevronLeft.svg';
import chevronRight from '../../assets/icons/chevronRight.svg'; 


const Pagination = () => {

    return (
        <div className="pagination">
            <div className="pagination__subcontainer">

                <p className="pagination__pages-text">Page:</p>
                <div className="pagination__pages-numbers-container">
                    <p className="pagination__page-number">1</p>
                    <p className="pagination__page-number">2</p>
                    <p className="pagination__page-number--selected">3</p>
                    <p className="pagination__page-number">4</p>
                </div>

                <div className="pagination__button-left">
                    <img className="pagination__button-left-icon" src={chevronLeft} alt="left" />
                    <p className="pagination__button-left-text">Back</p>
                </div>
                <div className="pagination__button-right">
                    <p className="pagination__button-right-text">Next</p>
                    <img className="pagination__button-right-icon" src={chevronRight} alt="right" />
                </div>

                <div className="pagination__product-quantity-container">
                    <p className="pagination__product-quantity">336</p>
                </div>
                <p className="pagination__product-text">Products</p>
            </div>
        </div>
    )
};

export default Pagination;

