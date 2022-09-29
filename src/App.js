import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import LandingPage from './Pages/LandingPage/LandingPage'
import ProductDetail from './Pages/ProductDetails/ProductDetail'
import Menu from './Components/Menu/Menu'
import contact from './Pages/Contact/contact'
function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/productDetail' component={ProductDetail} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/contact' component={contact} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
