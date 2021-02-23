import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout">
            <Header />
            <Checkout />
          </Router>
          <Router path="/login">
            <Header />
            <h1>Login page</h1>
          </Router>

          <Router path="/">
            <Header />
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
 
     /* we need react-router */


     /* localhost.com/ */ 
     
    
    
    
     /* localhost.com/checkout */ 
    
    
    
     /* localhost.com/login */ 