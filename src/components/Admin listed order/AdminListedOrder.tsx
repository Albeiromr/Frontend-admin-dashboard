import React, {FC, useContext} from 'react';
import {componentProps} from './types';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import grayEye from '../../assets/icons/grayEye.svg';

const AdminListedOrder:FC<componentProps> = (props) => {

    const {setAdminRoute} = useContext(AdminDashboardContext);

    const handleClick = () => {
        setAdminRoute("order-details");
    };

    return(
        <article onClick={handleClick} className="admin-listed-order">

            <p className="admin-listed-order__textOne">#5552375</p>
            <p className="admin-listed-order__textTwo">26 March 2020, 02:12 AM</p>
            <p className="admin-listed-order__textThree">Emilia Johanson</p>
            <p className="admin-listed-order__textFour">$251.16</p>

            {props.status === "new order" ? 
            <p className="admin-listed-order__text-new-order">New Order</p>
            : null}

            {props.status === "on delivery" ? 
            <p className="admin-listed-order__text-on-delivery">On Delivery</p>
            : null}

            <img 
            onClick={handleClick}
            className="admin-listed-order__icon" 
            src={grayEye} alt="view" 
            />

        </article>
    )
};

export default AdminListedOrder;