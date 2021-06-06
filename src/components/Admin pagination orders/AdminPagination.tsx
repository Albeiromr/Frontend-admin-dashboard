import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import doubleArrowLeft from '../../assets/icons/doubleArrowLeft.svg';
import doubleArrowRight from '../../assets/icons/doubleArrowRight.svg';
import AdminPageNumber from '../Admin page number/AdminPageNumber';


const AdminPaginationOrders = () => {


    //temporal pagination Array, it should be replaced by a context
    type paginationNumber = {number: number};
    const temporalNumbers: paginationNumber[] = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5}
    ];
    //------------------------------------------------------------


    return (
        <div className="admin-pagination">
            <div className="admin-pagination__subcontainer">
                <p className="admin-pagination__total-products">Showing 10 from 160 Products</p>
                <div className="admin-pagination__pagination-container">
                    
                    <div className="admin-pagination__back-button">
                        <img className="admin-pagination__icon-left" src={doubleArrowLeft} alt="previous" />
                        <p className="admin-pagination__back-button-text">Previous</p>
                    </div>

                    <div className="admin-pagination__numbers-container">
                        {temporalNumbers.map(pageNumber => <AdminPageNumber number={pageNumber.number}/>)}
                    </div>

                    <div className="admin-pagination__next-button">
                        <p className="admin-pagination__next-button-text">Next</p>
                        <img className="admin-pagination__icon-right" src={doubleArrowRight} alt="previous" />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AdminPaginationOrders;