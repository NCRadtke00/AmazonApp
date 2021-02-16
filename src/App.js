import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout/:someRandomId/page">
            <h1>Checkout</h1>
          </Router>
          <Router path="/login">
            <h1>Login page</h1>
          </Router>
          <Router path="/">
            <Header />
            <h1>HomePAGE!!!!</h1>
      
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