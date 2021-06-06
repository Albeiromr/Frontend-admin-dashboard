import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {useLocation, useHistory} from 'react-router-dom';


const ActualPAth = () => {

  const location = useLocation();
  const path:string = location.pathname;

  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
    window.scroll({
      top: 0,
      left:0,
      behavior: 'smooth'
    });
  };

  const handleCategoryClick = () => {
    if (path !== "/products") {
      history.push("/products");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      return;
    };
  };

  

  return (
    <div className="actual-path">
      <div className="actual-path__subcontainer">

        <p onClick={handleHomeClick} className="actual-path__text">Home</p>
        <p className="actual-path__bar">/</p>

        {path !== '/shopping-cart' ?
        <p onClick={handleCategoryClick} className={path !== '/products/item' ? "actual-path__text--strong" : "actual-path__text"}>
        Sneakers and Shoes
        </p>
        :
        null
        }

        {path !== '/shopping-cart' ? 
        <p className={path !== '/products/item' ? "actual-path__bar--hidden" : "actual-path__bar"}>
         /
        </p>
        :
        null
        }

        {path === '/shopping-cart' ?
        <p className="actual-path__text--strong">
        Checkout
        </p>
        :
        null
        }

        {path === '/shopping-cart' ? 
        <p className="actual-path__bar--hidden">
         /
        </p>
        :
        null
        }

        {path === '/products/item' ? 
        <p className="actual-path__text--strong">Product Name</p>
        : null
        }

</div>
    </div>
  );
};

export default ActualPAth;
