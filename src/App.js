import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/checkout">
            <h1>Checkout</h1>
          </Router>
          <Router path="/login">
            <h1>Login page</h1>
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