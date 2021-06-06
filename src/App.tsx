import React from 'react';
import './App.scss';
import { BrowserRouter as Router} from "react-router-dom";
import MainContainer from './routes/MainContainer/MainContainer';
import AdminDashboardContextProvider from './context/Admin dashboard context/AdminDashboardContext';


function App() {

  return (
    <Router >

    <div className="App">
      
      <AdminDashboardContextProvider>

      <MainContainer />

     
      </AdminDashboardContextProvider>
      
    </div>

    </Router>
  )
};

export default App;
