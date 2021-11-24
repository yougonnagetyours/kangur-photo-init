import React from 'react'
import Section from './Section/Section'

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



const items = [1,2,3]

const MainSite = ({ sections }) => {
  return ( 
        <div className="">
          <div className="relative h-96 lg:mr-3 max-h-80 overflow-hidden">
            <img 
              className="block w-full h-full object-cover" 
              src={about}
              alt="candles" 
            />
            <div className="absolute top-0 right-0 mx-3 my-4">
              <p className="text-2xl text-white tracking">O mnie</p>
            </div>
          </div>
          {sections.map((section)=>(
            <div key={section.id} className="relative h-96 lg:mr-3 max-h-80 overflow-hidden">
              <Section section={section} />
            </div>
          ))}
        </div>      
  );
}

export default MainSite;
