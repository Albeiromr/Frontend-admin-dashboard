import React, { FC, useContext } from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {componentProps} from './types';
import {ProductDetailsContext} from '../../context/Product details context/ProductDetailsContext';



const SizeSquare:FC<componentProps> = (props) => {

    const {sizeSelected, setSizeSelected} = useContext(ProductDetailsContext);

    const handleClick = () => {
        if(sizeSelected !== props.name) setSizeSelected(props.name);
        else return;
    }

    return(
        <div className={sizeSelected === props.name ? "size-square--selected" : "size-square"} 
        onClick={handleClick}
        >

            <p className={sizeSelected === props.name ? "size-square--selected__name--selected" : "size-square__name"}
            >
                {props.name}
            </p>

        </div>
    )
}

export default SizeSquare;