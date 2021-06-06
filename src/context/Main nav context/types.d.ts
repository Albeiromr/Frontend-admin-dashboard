import {optionType} from "../../utils/Product options/productOptionTypes";

export type contextValue = {
  productOptions: optionType[];
  optionSelected: string;
  setOptionSelected: (value: string) => void;
};

export type contextProps = {
  children: React.ReactNode;
};

export type optionSelectedType = string