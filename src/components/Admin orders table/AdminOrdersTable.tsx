import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import AdminListedOrder from '../Admin listed order/AdminListedOrder';

const AdminOrdersTable = () => {
    
    return (
        <div className="admin-orders-table">

            <div className="admin-orders-table__table-title-bar">
                <p className="admin-orders-table__titleOne">Order ID</p>
                <p className="admin-orders-table__titleTwo">Date</p>
                <p className="admin-orders-table__titleThree">Customer Name</p>
                <p className="admin-orders-table__titleFour">Amount</p>
                <p className="admin-orders-table__titleFive">Status Order</p>    
            </div> 

            <div className="admin-orders-table__table-container">

                <AdminListedOrder status="on delivery"/>
                <AdminListedOrder status="on delivery"/>
                <AdminListedOrder status="new order"/>
                <AdminListedOrder status="on delivery"/>
                <AdminListedOrder status="new order"/>
                <AdminListedOrder status="new order"/>
                <AdminListedOrder status="on delivery"/>
                <AdminListedOrder status="on delivery"/>

            </div>

        </div>
    )
};

export default AdminOrdersTable;