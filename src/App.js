// import logo from './logo.svg';

import { AnimatePresence } from 'framer-motion';
import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Route, Switch,useLocation } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductDetail from './Pages/ProductDetails/ProductDetail';

function App() {
  const location=useLocation()
  return (
    <div className="App">
      <Header/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/productDetail' component={ProductDetail}/>
        </Switch>
      </AnimatePresence>
      

    </div>
  );
}

export default App;
