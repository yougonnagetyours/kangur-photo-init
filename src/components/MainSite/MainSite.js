import React from 'react'
import Section from './Section/Section'

import about from '../../pics/about-cover.jpeg'
import zakopane from '../../pics/Zakopane.jpeg'
import main2 from '../../pics/main2.jpg'
import main3 from '../../pics/main3.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const sections = [
  {id:"1", name:"O mnie",img:"about",slug:"/o-mnie"},
  {id:"2", name:"Zakopane",img:"zakopane",slug:"/zakopane"},
]

const MainSite = () => {
  return ( 
        <div className="h-full">
          {sections.map((section)=>{
            <div key={section.key}>
              <Section section={section}/>
            </div>
          })}
        </div>      
  );
}

export default MainSite;
