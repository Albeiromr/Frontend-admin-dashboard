import React, { createContext, FC, useEffect, useState } from "react";
import {productPostInitial, productGetInitial, productToEditInitial, productToShowInitial} from './initialValues';
import {
  contextProps,
  contextValue,
  adminRouteType,
  productFamilyType,
  productPostInterface,
  productGetInterface,
  productToEditInterface,
  productToShowInterface
 } from "./types";
 import {useLocation} from 'react-router-dom';

export const AdminDashboardContext = createContext<contextValue>({
  adminRoute: "",
  setAdminRoute: () => {},
  productFamily: "",
  setProductFamily: () => {},
  pageNumberSelected: 1,
  setPageNumberSelected: () => {},
  productPost: productPostInitial,
  setProductPost: () => {},
  productGet: [productGetInitial],
  setProductGet: () => {},
  productToEdit: productToEditInitial,
  setProductToEdit:() => {},
  productOffset: 0,
  setProductOffset: () => {},
  productToShow:productToShowInitial,
  setProductToShow: () => {}
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
  

  //this state tells the admindashboard what child and buttons to show
  const [adminRoute, setAdminRoute] = useState<adminRouteType>("products");

  // this state is for selecting what product family is selected in the admin-panel products menu
  const [productFamily, setProductFamily] = useState<productFamilyType>("Sneakers & Shoes");

  //this state has the page number selected from the admin-pagination component
  const [pageNumberSelected, setPageNumberSelected] = useState<number>(1);

  //this useState reset the pageNumberSelected and the productOffset every time the productFamily state changes
  useEffect(() => {
    setPageNumberSelected(1);
    setProductOffset(0);
  }, [productFamily]);

  //this state collects all values from Admin-product-form component
  const [productPost, setProductPost] = useState<productPostInterface>(productPostInitial);

  //this state is the productoffset, is used for bringing products from the database depending of what page number is selected
  const [productOffset, setProductOffset] = useState<number>(0);

  //this state is the list of products we see in the admin dashboard
  const [productGet, setProductGet] = useState<productGetInterface[] | any>([productGetInitial]);

  //this useEffect updates the productGet state every time the productFamily state change;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/productFamily/${productFamily}/${productOffset}`)
    .then(response => response.json())
    .then(response => setProductGet(response))
    .catch(error => console.log(error)); 
  }, [productFamily,productOffset]);

  //this state stores the product estracted from the database for editing
  const [productToEdit, setProductToEdit] = useState<productToEditInterface>(productToEditInitial);

  //this useEffect reset the productToEdit state to its initial value if the router location is not equal to admin-dashboard
  const location = useLocation();
  useEffect(() => {
    if(location.pathname !== "admin-dashboard"){
      setProductToEdit(productToEditInitial);
    }
  }, [location]);

  //this state stores the product to show e¿when you make click over a product in the admin dashboard
  const [productToShow, setProductToShow] = useState<productToShowInterface>(productToShowInitial);



  return (
    <AdminDashboardContext.Provider
      value={{
        adminRoute,
        setAdminRoute,
        productFamily,
        setProductFamily,
        pageNumberSelected,
        setPageNumberSelected,
        productPost,
        setProductPost,
        productGet,
        setProductGet,
        productToEdit,
        setProductToEdit,
        productOffset,
        setProductOffset,
        productToShow,
        setProductToShow
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
