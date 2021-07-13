import React, { Fragment } from 'react'
import Nav from './components/Nav.js'
import MainSite from './components/MainSite.js'
import Shop from './components/Shop.js'
import Product from './components/Product.js'
import Footer from './components/Footer.js'
import ScrollToTop from './components/scrollToTop.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ShopPrewiew from './components/ShopPreview.js'


export default function App() {
  return (
    <Router>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        {/*<MainSite />  */}
        {/*<Shop />      */}
        {/*<Product />   */}
        {/* <About />    */}
        {/* <Contact />  */}
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={MainSite} />
            <Route path="/shop" component={Shop} />
            <Route path="/product" component={Product} />
          </Switch>
        </Fragment>
      </main>
      <Footer />
    </Router>
  )
}
