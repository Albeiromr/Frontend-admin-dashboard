import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import AdminDashboardHeader from '../../components/Admin dashboard header/AdminDashboardHeader';
import AdminDashboardNav from '../../components/Admin dashboard nav/AdminDashboardNav';
import AdminProductsTable from '../../components/Admin products table/AdminProductsTable';
import AdminOrdersTable from '../../components/Admin orders table/AdminOrdersTable';
import AdminOrderDetailsTable from '../../components/Admin order details table/AdminOrderDetailsTable';
import AdminProductForm from '../../components/Admin product form/AdminProductForm';
import AdminProductDetails from '../../components/Admin product details/AdminProductDetails';
import AdminPagination from '../../components/Admin pagination products/AdminPagination';
import AdminLogoutButton from '../../components/Admin logout button/AdminLogoutButton';


const AdminDashboard = () => {

    const {adminRoute} = useContext(AdminDashboardContext);

    return(
        <div className="admin-dashboard">
            
            <AdminDashboardHeader />
            <AdminDashboardNav />

            {adminRoute === "products" ? <AdminProductsTable /> : null}
            {adminRoute === "orders" ? <AdminOrdersTable /> : null}
            {adminRoute === "order-details" ? <AdminOrderDetailsTable /> : null}
            {adminRoute === "product-form" ? <AdminProductForm /> : null}
            {adminRoute === "product-details" ? <AdminProductDetails /> : null}
            {adminRoute === "products" || adminRoute === "orders" ? <AdminPagination /> : null}

            <AdminLogoutButton />

        </div>
    )
};

export default AdminDashboard;