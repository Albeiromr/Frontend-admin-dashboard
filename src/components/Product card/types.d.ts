import React from 'react';



export interface cssVariables extends React.CSSProperties{
    "--big": string;
    "--medium": string;
    "--small": string;
    "--bigImage":string;
    "--mediumImage":string;
    "--smallImage":string;

};

export interface ProductCardProps {
    // scrollSmooth prop let use decide if the page must scroll to top smooth or inmediately when
    //the product card buton is clecked
    scrollSmooth?: boolean;
}

