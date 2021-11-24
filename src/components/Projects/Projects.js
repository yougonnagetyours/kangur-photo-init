import React from 'react'
import Section from '../MainSite/Section/Section'

import about from '../../pics/about-cover.jpeg'
import zakopane from '../../pics/zakopane/Zakopane.jpeg'
import main2 from '../../pics/main2.jpg'
import main3 from '../../pics/main3.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const Projects = ({ sections }) => {
  return ( 
        <div className="mb-6">
          {sections.map((section)=>(
            <div key={section.id} className="relative h-48 max-h-80 overflow-hidden">
              <Section section={section} />
            </div>
          ))}
        </div>      
  );
}

export default Projects;
