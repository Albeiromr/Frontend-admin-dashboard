import React from "react";

export interface componentProps {
    min: number;
    max: number;
}

export interface cssVariables extends React.CSSProperties {
    zIndex: ZIndex | undefined;
}