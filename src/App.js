import React, { Fragment } from 'react'
import Nav1 from './components/Navbar/Nav1.js'
import MainSite from './components/MainSite/MainSite.js'
import Projects from './components/Projects/Projects.js'
import ProjectDetails from './components/ProjectDetails/ProjectDetails.js'

import Footer from './components/Footer/Footer.js'
import About from './components/About/About.js'

import ScrollToTop from './components/scrollToTop.js'
//import sections
//Zakopane
import zakopaneTitle from './pics/zakopane/Zakopane.jpeg'
import zakopaneAnother from './pics/zakopane/Zakopane2.jpeg'
//Pieniny
import pieninyTitle from './pics/pieniny/p2.jpg'
import pieninyAnother from './pics/pieniny/p1.jpg'
//Nature
import n1 from './pics/nature/n1.jpeg'
import n2 from './pics/nature/n2.jpeg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const sections = [
  {id:1, name: "Zakopane", img: {title: zakopaneTitle, another: zakopaneAnother}, desc: "Spontaniczny wyjazd do Zakopanego :)", slug: "zakopane"},
  {id:2, name: "Pieniny", img: {title: pieninyTitle, another: pieninyAnother}, desc: "Kilka ujęć z pięknych Pienin", slug: "pieniny"},
  {id:3, name: "Natura", img: {title: n1, another: n2}, desc: "", slug: "natura"},
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
            <Route path="/about">
              <About />
            </Route> 
            <Route path="/projekty">
              <Projects sections={sections}/>
            </Route>
            <Route exact path="/:id" children={<ProjectDetails sections={sections} />}></Route> 
          </Switch>
        </Fragment>
      </main>
      <Footer />
    </div>          
    </Router>
  )
}

export default App;
