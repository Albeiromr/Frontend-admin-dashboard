import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import close from '../../assets/icons/close.svg'

const SmallFilter = () => {

    return (
        <div className="small-filter">
            <p className="small-filter__text">Selected Filtre</p>
            <img className="small-filter__close-icon" src={close} alt="close"/>
        </div>
    )
};

export default SmallFilter;