import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import personFooter from '../../assets/images/personFooter.png';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import amex from '../../assets/icons/amex.svg';
import discover from '../../assets/icons/discover.svg';
import logo from '../../assets/logo/brand.png';
import dashboard from '../../assets/icons/dashboard.svg';
import {useHistory} from 'react-router-dom';


const Footer = () => {

  const history = useHistory();

    const handleClick = () => {
      history.push("/products");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });   
    };

    const handleAdminButtonClick = () => {
      history.push("/admin-dashboard");
      window.scroll({
        top: 0,
        left: 0
      });
    };

  return (
    <footer className="footer">
      <div className="footer__subcontainer">
        <article className="footer__article">
          <div className="footer__article-subcontainer">
            <div className="footer__article-text-box">
              <p className="footer__article-title">All UPS FOR GRABS</p>
              <h2 className="footer__article-subtitle">Enjoy up to 70% off</h2>
              <p className="footer__article-paragraph">Lorem ipsum dolor amet lorem ipsum dolor amet aler products </p>
              <div onClick={handleClick} className="footer__article-button">
                <p className="footer__article-button-text">View Products</p>
              </div>
            </div>
          </div>
          <div className="footer__image-container">
            <img className="footer__image" src={personFooter} alt="happy person"/>
          </div>
        </article>
        <div className="footer__social">

          <div className="footer__social-network-container">
            <div className="footer__social-facebook-container">
              <img className="footer__social-icon" src={facebook} alt="facebook icon"/>
            </div>
            <div className="footer__social-twitter-container">
              <img className="footer__social-icon" src={twitter} alt="twitter icon"/>
            </div>
            <div className="footer__social-linkedin-container">
              <img className="footer__social-icon" src={linkedin} alt="linkedin icon"/>
            </div>
            <div className="footer__social-instagram-container">
              <img className="footer__social-icon" src={instagram} alt="instagram icon"/>
            </div>
          </div>

          <div className="footer__social-card-container">
            <img className="footer__social-card" src={visa} alt="credit card icon"/>
            <img className="footer__social-card" src={mastercard} alt="credit card icon"/>
            <img className="footer__social-card" src={amex} alt="credit card icon"/>
            <img className="footer__social-card" src={discover} alt="credit card icon"/>
          </div>

        </div>

        <div onClick={handleAdminButtonClick} className="footer__admin-button">
          <img className="footer__admin-button-icon" src={dashboard} alt="dashboard" />
          <p className="footer__admin-button-text">Admin Dashboard</p>
        </div>


        <div className="footer__copyright">
          <img className="footer__copyright-brand" src={logo} alt="brand icon"/>
          <p className="footer__copyright-text">© Copyright 2021.  Albeiro Marín</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
