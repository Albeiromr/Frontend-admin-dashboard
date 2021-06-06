import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {cssVariables} from "./types";
import useScrollbarSize from "react-scrollbar-size";
/* import test from '../../assets/images/test.jpg'; */

const ProductBigPicture = () => {

    //this useScrollBarSize is a custom hook to get the browswer scroll bar width
    const {width} = useScrollbarSize();

    const bigProportion:number = 41.757 * width / 100
    const mediumProportion:number = 72.786 * width / 100
    const smallProportion:number = 88.647 * width / 100

    return (
        <div
         className="product-big-picture"
         style={{
            "--big": `${bigProportion.toString()}px`, 
            "--medium" : `${mediumProportion.toString()}px`,
            "--small" : `${smallProportion.toString()}px`,
           } as cssVariables} 
        >
            <div className="product-big-picture__discount-container">
                <p className="product-big-picture__discount">-36%</p>
            </div>

            {/* <img className="product-big-picture__picture" src={test} alt="product" /> */}
        </div>
    )
};

export default ProductBigPicture;

