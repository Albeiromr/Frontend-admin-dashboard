import React, {createContext, FC, useState} from 'react';
import {contextValue, contextProps} from './types';

export const ProductGridContext = createContext<contextValue>({
    showFilters: false,
    setShowFilters: () => {},
    priceRange: {min: 0, max: 0},
    setPriceRange: () => {},
    minValue: 0,
    setMinValue: () => {},
    maxValue: 0,
    setMaxValue: () => {},
});


const ProductGridContextProvider:FC<contextProps> = (props) => {

    //This state is for showing or hidding the filters in the product grid
    const [showFilters, setShowFilters] = useState(false)

    //The priceRange state consults the database and bring us the prices from the cheapest product and the most expensive one 
    const [priceRange, setPriceRange] = useState({min: 0, max: 100});

    //minValue and MaxValue State show the min and max price selected to the user interface
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    return(
        <ProductGridContext.Provider
        value={{
            showFilters,
            setShowFilters,
            priceRange,
            setPriceRange,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
        }}
        >
            {props.children}
        </ProductGridContext.Provider>
    )
};


export default ProductGridContextProvider
