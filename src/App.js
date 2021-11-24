import React, { Fragment } from 'react'
import Nav1 from './components/Navbar/Nav1.js'
import MainSite from './components/MainSite/MainSite.js'
import Projects from './components/Projects/Projects.js'

import Footer from './components/Footer/Footer.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import ScrollToTop from './components/scrollToTop.js'
//import sections
//Zakopane
import zakopaneTitle from './pics/zakopane/Zakopane.jpeg'
//Pieniny
import pieninyTitle from './pics/pieniny/p2.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const sections = [
  {id:1, name:"Zakopane",img : {title:zakopaneTitle,},slug:"/zakopane"},
  {id:2, name:"Pieniny",img : {title:pieninyTitle,},slug:"/pieniny"},
]

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
              <MainSite sections={sections}/>
            </Route>  
            <Route path="/projekty">
              <Projects sections={sections}/>
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
