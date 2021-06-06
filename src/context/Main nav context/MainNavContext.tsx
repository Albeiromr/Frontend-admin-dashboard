import React, { createContext, useState, FC } from "react";
import {productOptions} from '../../utils/Product options/productOptions';
import {contextValue, contextProps, optionSelectedType} from './types';

export const MainNavContext = createContext<contextValue>({
  productOptions: [],
  optionSelected: "",
  setOptionSelected: () => {},
});

const MainNavContextProvider:FC<contextProps> = (props) => {
  //this state is for highlighting the type of products selected on the main nav
  const [optionSelected, setOptionSelected] = useState<optionSelectedType>("Home");

  return (
    <MainNavContext.Provider
      value={{
        productOptions,
        optionSelected,
        setOptionSelected,
      }}
    >
      {props.children}
    </MainNavContext.Provider>
  );
};

export default MainNavContextProvider;
