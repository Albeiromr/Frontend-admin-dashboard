import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {Switch, Route} from "react-router-dom";
import AdminDashboard from '../Admin dashboard/AdminDashboard';

const MainContainer = () => {
  return (
    
    <div className="main-container">
      
      
      
      
        <Switch>

          <Route path="/" exact component={AdminDashboard} />

        </Switch>

      
      
      
      
    </div>
  );
};

export default MainContainer;
