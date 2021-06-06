import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import graySearch from '../../assets/icons/graySearch.svg';

const AdminDashboardHeader = () => {

    return(
        <header className="admin-dashboard-header">
            <h1 className="admin-dashboard-header__title">Admin Dashboard</h1>
            <form className="admin-dashboard-header__form">


                <input 
                className="admin-dashboard-header__form-input"
                type="text" 
                placeholder="Enter Product SKU"
                />

                <img className="admin-dashboard-header__form-icon" src={graySearch} alt="search" />
            </form>

            <div className="admin-dashboard-header__admin-container">
                <div className="admin-dashboard-header__admin-image-container">
                    {/* <img className="admin-dashboard-header__admin-image" src={test} alt="admin" /> */}
                </div>
                <div className="admin-dashboard-header__admin-line"/>
                <div className="admin-dashboard-header__admin-text-container">
                    <p className="admin-dashboard-header__admin-name">Andru Dexter</p>
                    <p className="admin-dashboard-header__admin-roll">Admin</p>
                </div>
            </div>
        </header>
    )
};

export default AdminDashboardHeader;