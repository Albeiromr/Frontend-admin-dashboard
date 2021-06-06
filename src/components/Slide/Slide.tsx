import React, {useEffect, useState} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {backgroundImgType, counterType} from './types';
import leftColumn from '../../assets/images/leftColumn.png';
import rightColumn from '../../assets/images/rightColumn.png';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import {useHistory} from 'react-router-dom';


const Slide = () => {

    //This state set the background image for the slide__article element, is required for a smooth img transition
    const [backgroundImg, setBackgroundIMG] = useState<backgroundImgType>(slide1);
    //This state define what image must be shown in the slide__article element
    const [counter, setcounter] = useState<counterType>(1);


    useEffect(() => {
      setTimeout(() => {
        switch (backgroundImg) {
          case slide1:
            setBackgroundIMG(slide2);
            break;
          case slide2:
            setBackgroundIMG(slide3);
            break;
          case slide3:
            setBackgroundIMG(slide1);
            break;
          default:
        }
      }, 9000);
    }, [backgroundImg]);

    useEffect(() => {
      setTimeout(() => {
        switch (counter) {
          case 1:
            setcounter(2);
            break;
          case 2:
            setcounter(3);
            break;
          case 3:
            setcounter(1);
            break;
          default:
        }
      }, 8000);
    }, [counter]);


    const handleButtonClick = () => {
      history.push('/products');
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    const history = useHistory();

    const handleArticleClick = () => {
      history.push('/products')
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }


  return (
    <section className="slide">
      <div className="slide__column-left">
        <img className="slide__column-left-image" src={leftColumn} alt="points texture"/>
      </div>
      <div className="slide__subcontainer">
          <article onClick={handleArticleClick} className="slide__article" style={{backgroundImage: `url(${backgroundImg})`}}>

              <div className="slide__articul-images-preload">
                  <img className="slide__image-preloaded" src={slide1} alt="slide"/>
                  <img className="slide__image-preloaded" src={slide2} alt="slide"/>
                  <img className="slide__image-preloaded" src={slide3} alt="slide"/>
              </div>

              {counter === 1 ? <img className="slide__article-image1" src={slide1} alt="slide"/> :
               counter === 2 ? <img className="slide__article-image2" src={slide2} alt="slide"/> :
               counter === 3 ? <img className="slide__article-image3" src={slide3} alt="slide"/> : null }

               

              <div className="slide__article-text-container">
                  <p className="slide__article-title">HOT PRODUCTS</p>
                  <h2 className="slide__article-subtitle">Fill your desk full of technology</h2>
                  <div onClick={handleButtonClick} className="slide__article-button">
                      <p className="slide__article-button-text">View More</p>
                  </div>
              </div>

          </article>

          <div className="slide__circle-container">
              <div className={counter === 1 ? "slide__circle--selected" : "slide__circle"}></div>
              <div className={counter === 2 ? "slide__circle--selected" : "slide__circle"}></div>
              <div className={counter === 3 ? "slide__circle--selected" : "slide__circle"}></div>
          </div>
      </div>
      <div className="slide__column-right">
        <img className="slide__column-left-image" src={rightColumn} alt="points texture"/>
      </div>
    </section>
  );
};

export default Slide;
