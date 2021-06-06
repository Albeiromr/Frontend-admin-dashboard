import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import adminLogout from '../../assets/icons/adminLogout.svg';
import {useHistory} from 'react-router-dom';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import {productToEditInitial, productPostInitial} from '../../context/Admin dashboard context/initialValues';

const AdminLogoutButton = () => {

    const {setProductToEdit, setProductPost} = useContext(AdminDashboardContext);

    const history = useHistory();

    const handleClick = () => {
        setProductToEdit(productToEditInitial);
        setProductPost(productPostInitial);
        history.push("/");
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className="amin-logout-button">
            <div onClick={handleClick} className="amin-logout-button__button">
                <img className="amin-logout-button__icon" src={adminLogout} alt="log out" />
                <p className="amin-logout-button__text">Log Out</p>
            </div>
        </div>
    )
};

export default AdminLogoutButton;