import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import segoAlone from '../../assets/logo/segoAlone.svg';

const AdminNotAvailable = () => {

    return(
        <div className="admin-not-avaiable">
            <img className="admin-not-avaiable__logo" src={segoAlone} alt="logo" />
            <p className="admin-not-avaiable__paragraph">App not available in this resolution</p>
        </div>
    )
};

export default AdminNotAvailable;