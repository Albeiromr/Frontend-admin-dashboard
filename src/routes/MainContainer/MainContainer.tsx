import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Header from "../../components/Header/Header";
import SearchMobile from '../../components/Search mobile/SearchMobile';
import MainNav from "../../components/Main nav/MainNav";
import FixedMenu from "../../components/Fixed menu/FixedMenu";
import Footer from "../../components/Footer/Footer";
import {Switch, Route, useLocation} from "react-router-dom";
import Home from '../Home/Home';
import Products from '../Products/Products';
import Item from '../Item/item';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AdminDashboard from '../Admin dashboard/AdminDashboard';

const MainContainer = () => {

  const pathName = useLocation().pathname;
  return (
    
    <div className="main-container">
      
      {pathName !== "/admin-dashboard" ? <Header /> : null }
      {pathName !== "/admin-dashboard" ? <SearchMobile /> : null }
      {pathName !== "/admin-dashboard" ? <MainNav /> : null }
      
      
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/item" exact component={Item} />
          <Route path="/shopping-cart" exact component={ShoppingCart} />
          <Route path="/admin-dashboard" exact component={AdminDashboard} />

        </Switch>

      <Footer />
      {pathName !== "/admin-dashboard" ? <FixedMenu /> : null }
      
      
    </div>
  );
};

export default MainContainer;
