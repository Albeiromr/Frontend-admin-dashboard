import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import plusDark from '../../assets/icons/plusDark.svg';


const AddButton = () => {

    return (
        <div className="add-button">
            <img className="add-button__icon" src={plusDark} alt="plus" />
            <p className="add-button__text">Add to Cart</p>
        </div>
    )
};

export default AddButton;