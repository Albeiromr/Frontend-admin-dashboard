import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import logo from "../../assets/logo/brand.png";
import basket from "../../assets/icons/basket.svg";
import home from "../../assets/icons/home.svg";
import SearchBar from "../Search bar/SearchBar";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Header = () => {

  const history =  useHistory();

  const handleLogoContainerClick = () => {
    history.push('/')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const handleHomeIconClick = () => {
    history.push('/')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const handleBasketIconClick = () => {
    history.push('/shopping-cart')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <header className="header">
      <div className="header__contact-bar">
        <div className="header__contact-data">
          <p className="header__green-text">Contact us</p>
          <p className="header__black-text">+420 336 775 664</p>
          <p className="header__black-text">info@freshnesecom.com</p>
          <div className="header__line"></div>
        </div>

        <div className="header__contact-links">
          <Link to="/" className="header__green-link">Home</Link>
          <Link to="/shopping-cart" className="header__green-link">Shopping Cart</Link>
        </div>
      </div>

      <div className="header__logo-bar">
        
          <div onClick={handleLogoContainerClick} className="header__logo-container">
            <img className="header__logo-image" src={logo} alt="logo" />
          </div>

        <div className="header__search-container">
          <SearchBar />
        </div>
        <div className="header__icon-container">

          <div onClick={handleHomeIconClick} className="header__icon-subcontainer">
            <img className="header__icon" src={home} alt="user icon" />
          </div>

          <div onClick={handleBasketIconClick}className="header__icon-subcontainer">
            <img className="header__icon" src={basket} alt="basket icon" />
          </div>

          <div className="header__basket-counter" />
          

        </div>
      </div>
    </header>
  );
};

export default Header;
