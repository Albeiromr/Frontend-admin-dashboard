import React, {useState, useRef, useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import profile from '../../assets/images/profile.jpg';
import graySearch from '../../assets/icons/graySearch.svg';
import validator from 'validator';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminDashboardHeader = () => {

    const {setAdminRoute, setProductToShow} = useContext(AdminDashboardContext);

    const [productToSearch, setProductToSearch] = useState<{productSku:string}>({productSku: ""});
    const [errorMessage, setErrorMessage] = useState<string>("Invalid SKU");
    const [showError, setShowError] = useState<boolean>(false);
    const searchBar = useRef<HTMLInputElement>(null);
    const form = useRef<HTMLFormElement>(null);
    

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(productToSearch.productSku === ""){
            setShowError(true);
            setErrorMessage("Invalid SKU");
            setTimeout(()=> {
                setShowError(false);
                form.current!.reset();
            }, 5000)
        }else {
            setShowError(false);
            let data = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/product/${productToSearch.productSku}`);
            let dataToJson = await data.json();
            if(dataToJson.length === 1){
                setProductToShow(dataToJson[0]);
                setShowError(false);
                searchBar.current!.style.border = "1px #D1D1D1 solid";
                setAdminRoute("product-details");
                form.current!.reset();
                setProductToSearch({productSku: ""});
            }else{
                searchBar.current!.style.border = "2px #E5704B solid";
                setShowError(true);
                setErrorMessage("No results");
                setTimeout(() => {
                    form.current!.reset();
                    setShowError(false);
                    setErrorMessage("Invalid SKU");
                    searchBar.current!.style.border = "1px #D1D1D1 solid";
                }, 8000);

            };
        };
    };
    


    //validating the search bar value, it is only gonna work if the value is a correct sku;
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
          !validator.isNumeric(e.target.value) &&
          validator.isLength(e.target.value, { min: 11, max: 11 }) &&
          !validator.isAlpha(e.target.value)
        ){
            setProductToSearch({...productToSearch,[e.target.name]: e.target.value});
            e.target.style.border = "2px #9cc069 solid";
            setShowError(false);
            
        }else {
            setProductToSearch({...productToSearch,[e.target.name]: ""});
            e.target.style.border = "1px #D1D1D1 solid";
            setShowError(false);
            setErrorMessage("Invalid SKU");
        };
    };

    return(
        <header className="admin-dashboard-header">
            <h1 className="admin-dashboard-header__title">Admin Dashboard</h1>

            <form ref={form} onSubmit={handleFormSubmit} className="admin-dashboard-header__form">


                <input 
                className="admin-dashboard-header__form-input"
                type="text" 
                placeholder="Enter Product SKU"
                name="productSku"
                onChange={handleSearchChange}
                ref={searchBar}
                />

                <img className="admin-dashboard-header__form-icon" src={graySearch} alt="search" />
                {showError ? <p className="admin-dashboard-header__error">{errorMessage}</p> : null}

            </form>

            

            <div className="admin-dashboard-header__admin-container">
                <div className="admin-dashboard-header__admin-image-container">
                    <img className="admin-dashboard-header__admin-image" src={profile} alt="admin" />
                </div>
                <div className="admin-dashboard-header__admin-line"/>
                <div className="admin-dashboard-header__admin-text-container">
                    <p className="admin-dashboard-header__admin-name">Albeiro Marín</p>
                    <p className="admin-dashboard-header__admin-roll">Admin</p>
                </div>
            </div>
        </header>
    )
};

export default AdminDashboardHeader;