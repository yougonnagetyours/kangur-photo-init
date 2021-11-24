import React from 'react'
import Section from './Section/Section'
import about from '../../pics/about-cover.jpeg'
import { Link } from "react-router-dom"


const MainSite = ({ sections }) => {
  return ( 
        <div className="">
          <div className="relative h-96 max-h-80 overflow-hidden">
            <Link to="/about">
              <img 
                className="block w-full h-full object-cover" 
                src={about}
                alt="candles" 
              />
              <div className="absolute top-0 right-0 mx-3 my-4">
                <p className="text-2xl text-white tracking">O mnie</p>
              </div>
            </Link>
          </div>
          <div className="md:flex md:flex-wrap">
            {sections.map((section)=>(
              <div key={section.id} className="relative h-96 md:w-1/2 max-h-80 overflow-hidden">
                <Section section={section} />
              </div>
            ))}
          </div>  
        </div>      
  );
}

export default MainSite;
