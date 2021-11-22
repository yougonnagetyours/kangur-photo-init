import React, { Fragment } from 'react'
import Nav1 from './components/Navbar/Nav1.js'
import MainSite from './components/MainSite/MainSite.js'
import Shop from './components/Shop/Shop.js'

import Footer from './components/Footer/Footer.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import ScrollToTop from './components/scrollToTop.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="max-w-screen-lg mx-auto">
      <div className="w-full h-16 sm:hidden" />
      <Nav1/>
      <main>
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <MainSite/>
            </Route>  
            <Route path="/shop">
              <Shop/>
            </Route>
          </Switch>
        </Fragment>
      </main>
      <Footer />
    </div>          
    </Router>
  )
}

export default App;
