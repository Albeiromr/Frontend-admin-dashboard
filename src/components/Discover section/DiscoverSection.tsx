import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import youngMan from '../../assets/images/youngMan.png';
import adultMan from '../../assets/images/adultMan.png';
import adidas from '../../assets/icons/adidas.svg';
import puma from '../../assets/icons/puma.svg';
import hm from '../../assets/icons/hm.svg';
import {useHistory} from 'react-router-dom';



const DiscoverSection = () => {

    const history = useHistory();

    const handleClick = () => {
      history.push("/products");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    return (
        <section className="discover-section">

            <div className="discover-section__card-container">
                <div className="discover-section__card-subcontainer">
                    <div className="discover-section__card-flex-container">

                        <article className="discover-section__card">
                            <div className="discover-section__card-text-container">
                                <h2 className="discover-section__card-title">Lorem ipsum Dolor</h2>
                                <p className="discover-section__card-paragraph">Lorem ipsum dolor amet lorem ipsum dolor amet aler</p>
                                <div  onClick={handleClick} className="discover-section__card-button">
                                    <p className="discover-section__card-button-text">All Shirts</p>
                                </div>
                            </div>
                            <div className="discover-section__card-image-container">
                                <div className="discover-section__card-image-background"></div>
                                <img className="discover-section__card-image" src={youngMan} alt="man"/>
                            </div>
                        </article>

                        <article className="discover-section__card">
                            <div className="discover-section__card-text-container">
                                <h2 className="discover-section__card-title">Lorem ipsum Dolor</h2>
                                <p className="discover-section__card-paragraph">Lorem ipsum dolor amet lorem ipsum dolor amet aler</p>
                                <div onClick={handleClick} className="discover-section__card-button">
                                    <p className="discover-section__card-button-text">All Shirts</p>
                                </div>
                            </div>
                            <div className="discover-section__card-image-container">
                                <div className="discover-section__card-image-background"></div>
                                <img className="discover-section__card-image" src={adultMan} alt="man"/>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

            <div className="discover-section__brand-container">
                <div className="discover-section__brand-subcontainer">
                    <img className="discover-section__brand" src={adidas} alt="brand"/>
                    <img className="discover-section__brand" src={puma} alt="brand"/>
                    <img className="discover-section__brand" src={hm} alt="brand"/>
                </div>
            </div>

        </section>
    )
};

export default DiscoverSection;
