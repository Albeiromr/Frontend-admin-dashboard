import React, {FC, useState, createContext} from 'react';
import {contextValue, contextProps, size} from './types';

export const ProductDetailsContext = createContext<contextValue>({
    sizeSelected: "",
    setSizeSelected: () => {},
    sizes: []
});

const ProductDetailsContextProvider:FC<contextProps> = (props) => {

    //this state let us know wich size the customer has chosen for its product in the product-details component
    const [sizeSelected, setSizeSelected] = useState("M");

    //this sizes array shows the available sizes for the chosen product
    const sizes:size[] = [
        {name: "XS"},
        {name: "S"},
        {name: "M"},
        {name: "L"},
        {name: "XL"}
    ];

    return (
        <ProductDetailsContext.Provider
        value={{
            sizeSelected,
            setSizeSelected,
            sizes
        }}
        >
            {props.children}
        </ProductDetailsContext.Provider>
    )
};

export default ProductDetailsContextProvider;