import React from 'react';

export interface contextValue {
    showPayment: boolean;
    setShowPayment: (value: boolean) => void;
}

export interface contextProps {
    children: React.ReactNode;
}