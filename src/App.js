import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Compotents/Navbar/Navbar';
import Header from './Compotents/Header/Header';
import FoodCategory from './Compotents/FoodCategory/FoodCategory';
import FoodDetail from './Compotents/FoodDetail/FoodDetail';
import Footer from './Compotents/Footer/Footer';
import AboutUs from './Compotents/AboutUs/AboutUs';
import Home from './Compotents/Home/Home';
import Login from './Compotents/Login/Login';
import PlaceOrder from './Compotents/PlaceOrder/PlaceOrder';
import OrderUpdate from './Compotents/OrderUpdate/OrderUpdate';
import PrivetRoute from './Compotents/PrivetRoute/PrivetRoute';
import Nomatch from './Compotents/Nomatch/Nomatch';

export const StateContext = createContext();

function App() {

  const [state, setState] = useState({
    category: 'lunch',
    showFood: false,
    cart: [],
    email: "",
    userName: ''
  })

  return (
    <StateContext.Provider value={[state, setState]}>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/foodDetail/:foodId">
            <FoodDetail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <PlaceOrder/>
          </Route>
          <PrivetRoute path="/orderUpdate">
            <OrderUpdate/>
          </PrivetRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
