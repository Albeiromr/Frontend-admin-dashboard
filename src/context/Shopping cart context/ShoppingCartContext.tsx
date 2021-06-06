import React, {createContext, FC, useState} from 'react';
import {contextValue, contextProps} from './types';


export const ShoppingCartContext = createContext<contextValue>({
    showPayment: false,
    setShowPayment: () => {}
});

const ShoppingCartContextProvider:FC<contextProps> = (props) => {

    const [showPayment, setShowPayment] = useState(false);

    return (
        <ShoppingCartContext.Provider 
        value={{
            showPayment,
            setShowPayment
        }}
        >
            {props.children}
        </ShoppingCartContext.Provider>
    )
};

export default ShoppingCartContextProvider;