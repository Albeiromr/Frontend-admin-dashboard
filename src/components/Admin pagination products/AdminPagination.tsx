import React,{useContext, useEffect, useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import doubleArrowLeft from '../../assets/icons/doubleArrowLeft.svg';
import doubleArrowRight from '../../assets/icons/doubleArrowRight.svg';
import AdminPageNumber from '../Admin page number/AdminPageNumber';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';


const AdminPaginationProducts = () => {

    const {productFamily, productOffset, setProductOffset, pageNumberSelected,setPageNumberSelected, productGet} = useContext(AdminDashboardContext);
    type paginationNumber = {number: number};
    const [pages, setPages] = useState<paginationNumber[]>([]);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    

    //extracting how many pages must the paginator shows for every product fámily
    useEffect(() => {
        async function getTotalPages() {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/familyTotal/${productFamily}`);
            let responseToJson = await response.json();
            let extractedNumber = await Object.values(responseToJson[0])[0];
            if (typeof extractedNumber === "number"){
                let numberToPages:number = await Math.ceil(extractedNumber / 6);
                let temporalArray:paginationNumber[] = [];
                for(let i = 1; i <= numberToPages; i++){
                    temporalArray.push({number: i});
                };
                setPages(temporalArray);
                setTotalProducts(extractedNumber);
            };
        };
        getTotalPages();
    }, [productFamily]);

    const handleBackClick = () => {
        if(productOffset > 0) {
            setProductOffset(productOffset - 6);
            setPageNumberSelected(pageNumberSelected - 1);
        }else return;
    };

    const handleNextClick = () => {
        if(productOffset <= pages.length * 6 - 12 ) {
            setProductOffset(productOffset + 6);
            setPageNumberSelected(pageNumberSelected + 1);
        }else return;
    };
    
    return (
        <div className="admin-pagination">
            <div className="admin-pagination__subcontainer">
                <p className="admin-pagination__total-products">Showing {productGet.length} from {totalProducts} Products</p>
                <div className="admin-pagination__pagination-container">
                    
                    <div onClick={handleBackClick} className="admin-pagination__back-button">
                        <img className="admin-pagination__icon-left" src={doubleArrowLeft} alt="previous" />
                        <p className="admin-pagination__back-button-text">Previous</p>
                    </div>

                    <div className="admin-pagination__numbers-container">
                        {pages.map(pageNumber => <AdminPageNumber number={pageNumber.number}/>)}
                    </div>

                    <div onClick={handleNextClick} className="admin-pagination__next-button">
                        <p className="admin-pagination__next-button-text">Next</p>
                        <img className="admin-pagination__icon-right" src={doubleArrowRight} alt="previous" />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AdminPaginationProducts;