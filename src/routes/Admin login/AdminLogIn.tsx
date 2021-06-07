import React, {useContext, useRef, useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminLogIn = () => {

    const {credentials, setCredentials, setAuth} = useContext(AdminDashboardContext);

    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Wrong credentials, please verify");

    const loginForm = useRef<HTMLFormElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(credentials.password === "" || credentials.username === ""){

            setShowError(true);
            setErrorMessage("Please enter an username and password");

        }else {

            try {
                let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/administrator/${credentials.username}`);
                let responseToJson = await response.json();
                if (responseToJson.length === 0) {
                  setAuth(false);
                  setShowError(true);
                  setErrorMessage("Wrong credentials, please verify");
                  return;
                } else if (responseToJson[0].password === credentials.password) {
                  setAuth(true);
                  setShowError(false);
                  setCredentials({username: "", password: ""});
                }else if (responseToJson[0].password !== credentials.password){
                  setAuth(false);
                  setShowError(true);
                  setErrorMessage("Wrong credentials, please verify");
                }
              } catch {
                  if(credentials.username === "") setErrorMessage("Please enter an username and password");
                  else setErrorMessage("Database error, verify connection");
              };

        };
       
    };


    return(
        <div className="admin-login">
            <div className="admin-login__subcontainer">
                <h1 className="admin-login__title">LOG IN </h1>
                <p className="admin-login__paragraph">Enter your Admin username and password to be able to access the admin dashboard</p>
                <form ref={loginForm} onSubmit={handleFormSubmit} className="admin-login__form">
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
                {showError ? <p className="admin-login__error">{errorMessage}</p> : null}
            </div>
            

        </div>
    )
};

export default AdminLogIn;