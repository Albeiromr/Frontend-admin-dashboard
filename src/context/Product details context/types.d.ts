import React from "react";

type size = {
    name: string
};

export interface contextValue {
    sizeSelected: string;
    setSizeSelected: (value: sizeSelected) => void;
    sizes: size[];
}

export interface contextProps {
    children: React.ReactNode;
}



