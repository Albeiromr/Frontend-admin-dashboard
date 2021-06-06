import React from "react";

export interface contextValue {
  menuSelected: string;
  setMenuSelected: (value: menuSelected) => void;
  adminRoute: string;
  setAdminRoute: (value: adminRoute) => void;
  productFamily: string;
  setProductFamily: (value: productFamily) => void;
  pageNumberSelected: number;
  setPageNumberSelected: (value: pageNumberSelected) => void;
  productPost: productPostInterface;
  setProductPost: (value: productPost) => void;
  productGet: productGetInterface[];
  setProductGet: (value: productGetInterface[]) => void;
  productToEdit: productToEditInterface;
  setProductToEdit: (value:productToEditInterface) => void;
  productOffset: number;
  setProductOffset:(value:number) => void;
  productToShow: productToShowInterface;
  setProductToShow: (value: productToShowInterface) => void;
};

export interface contextProps {
  children: React.ReactNode;
};

export type menuSelectedType = "orders" | "products";

export type adminRouteType = "orders" | "order-details" | "products" | "product-details" | "product-form";

export type productFamilyType = "Sneakers & Shoes" | "Pants" | "Caps" | "Jackets" | "Shorts" | "Tshirts & Shirts";

export interface productPostInterface {
  sku: string;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice:string;
  productOldPrice: string;
  productStock:string;
  productRate: string;
  reviewQuantity: string;
  soldQuantity: string;
  productViews: string;
  sizeOne: string;
  sizeTwo: string;
  sizeThree: string;
  sizeFour: string;
  sizeFive: string;
  productImage: string;
  productThumbnail: string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  categoryFour: string;
  categoryFive: string;
  interestForYou: string;
  productProfit: string;
}

export interface productGetInterface {
  sku: string;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productOldPrice: number;
  productStock: number;
  productRate: number;
  reviewQuantity: number;
  soldQuantity: number;
  productViews: number;
  sizeOne: string;
  sizeTwo: string;
  sizeThree: string;
  sizeFour: string;
  sizeFive: string;
  productImage: string;
  productThumbnail: string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  categoryFour: string;
  categoryFive: string;
  interestForYou: string;
  productProfit: number;
}


export interface productToEditInterface {
  sku: string;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productOldPrice: number;
  productStock: number;
  productRate: number;
  reviewQuantity: number;
  soldQuantity: number;
  productViews: number;
  sizeOne: string;
  sizeTwo: string;
  sizeThree: string;
  sizeFour: string;
  sizeFive: string;
  productImage: string;
  productThumbnail: string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  categoryFour: string;
  categoryFive: string;
  interestForYou: string;
  productProfit: number;
}

export interface productToShowInterface {
  sku: string;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productOldPrice: number;
  productStock: number;
  productRate: number;
  reviewQuantity: number;
  soldQuantity: number;
  productViews: number;
  sizeOne: string;
  sizeTwo: string;
  sizeThree: string;
  sizeFour: string;
  sizeFive: string;
  productImage: string;
  productThumbnail: string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  categoryFour: string;
  categoryFive: string;
  interestForYou: string;
  productProfit: number;
}






