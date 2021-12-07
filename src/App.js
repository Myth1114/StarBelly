// import logo from './logo.svg';

import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDetail from './Pages/ProductDetails/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/productDetail' component={ProductDetail}/>
        </Switch>

    </div>
  );
}

export default App;
