import React, { useContext } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { MainNavContext } from "../../context/Main nav context/MainNavContext";
import MainNavButton from "../Main nav button/MainNavButton";

const MainNav = () => {
  const { productOptions } = useContext(MainNavContext);

  return (
    <nav className="main-nav">
      <ul className=" main-nav__subcontainer">

        <MainNavButton name="Home" path="/"/>

        {productOptions.map((option) => (
          <MainNavButton name={option.name} path="/products" />
        ))}
        
      </ul>
    </nav>
  );
};

export default MainNav;
