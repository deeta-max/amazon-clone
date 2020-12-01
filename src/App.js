import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import LogIn from "./LogIn";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51HtEHjCeIXxbEXGE8boHOfDmmrek8ZGFKhvzZDPurqDgG3mkUAE33udySqLPZcvzko1thjXAG6lBMi8H5jzMiNYS002pM7OPF5");

function App() {
  const [{}, dispatch] = useStateValue();
 
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        console.log(authUser);
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, []);


  return (
    <Router >

    <Switch>
    <Route path="/orders">
      <div className="App">
      <Header />
      <Orders />
    </div>
      </Route>
    <Route path="/login">
      <div className="App">
      <LogIn />
    </div>
      </Route>
    <Route path="/checkout">
      <div className="App">
      <Header />
      <Checkout />
    </div>
      </Route>
      <Route path="/payment">
      <div className="App">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      
    </div>
      </Route>
      <Route path="/">
      <div className="App">
      <Header />
      <Home />
    </div>
      </Route>
    </Switch>

    </Router>
    
  );
}

export default App;
