import React, { useCallback, useEffect, useState, useRef, FC, useContext } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {componentProps, cssVariables} from './types';
import { ProductGridContext } from "../../context/Product grid context/ProductGridContext";



const MultiRangeSlider:FC<componentProps> = ({ min, max }) => {

  const {setMinValue, setMaxValue} = useContext(ProductGridContext);
  //the bodyOverflow state tells the body to hide or not hide its scroll
  const [bodyOverflow, setBodyOverflow] = useState("scroll")

  const [minVal, setMinVal] = useState(min + 20);
  const [maxVal, setMaxVal] = useState(max - 20);
  const minValRef = useRef(min + 20);
  const maxValRef = useRef(max - 20);
  const range = useRef<HTMLInputElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    setMinValue(minVal);

  }, [minVal, getPercent, setMinValue]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    
    setMaxValue(maxVal);

  }, [maxVal, getPercent, setMaxValue]);

  //Disable page scroll when sliding the multi range input thumbs
  document.body.style.overflowY = bodyOverflow


  return (
    <div  className="multi-range-slider">

      <input
        className="multi-range-slider__thumb multi-range-slider__thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" } as cssVariables}
        type="range"
        min={min}
        max={max}
        value={minVal}

        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        onTouchStart={() => {
          setBodyOverflow("hidden")
        }}
        onTouchEnd={() => {
          setBodyOverflow("scroll")
        }}
        
      />

      <input

        className="multi-range-slider__thumb multi-range-slider__thumb--right"
        type="range"
        min={min}
        max={max}
        value={maxVal}

        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        onTouchStart={() => {
          setBodyOverflow("hidden")
        }}
        onTouchEnd={() => {
          setBodyOverflow("scroll")
        }}
        
      />

      <div className="multi-range-slider__slider">
        <div className="multi-range-slider__slider-track" />
        <div ref={range} className="multi-range-slider__slider-range" />
      </div>
    </div>
    
  );
};


export default MultiRangeSlider;