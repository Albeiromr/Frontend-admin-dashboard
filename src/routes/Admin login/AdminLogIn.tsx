import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminLogIn = () => {

    const {credentials, setCredentials, auth, setAuth} = useContext(AdminDashboardContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };


    return(
        <div className="admin-login">
            <div className="admin-login__subcontainer">
                <h1 className="admin-login__title">LOG IN </h1>
                <p className="admin-login__paragraph">Enter your Admin username and password to be able to access the admin dashboard</p>
                <form className="admin-login__form">
                    <div className="admin-login__user-input-container">
                        <label className="admin-login__label" htmlFor="username">Username</label>
                        <input 
                        onChange={handleInputChange}
                        className="admin-login__input" 
                        type="text" 
                        name="username"    
                        id="username"     
                        placeholder="Enter username"               
                        />
                    </div>
                    <div className="admin-login__password-input-container">
                        <label className="admin-login__label" htmlFor="password">Password</label>
                        <input 
                        onChange={handleInputChange}
                        className="admin-login__input" 
                        type="password" 
                        name="password"    
                        id="password"     
                        placeholder="Enter password"           
                        />
                    </div>
                    <button className="admin-login__submit-button" type="submit">Log In</button>
                </form>
                <p className="admin-login__error">Wrong credentials, please verify </p>
            </div>
            

        </div>
    )
};

export default AdminLogIn;