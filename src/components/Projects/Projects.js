import React from 'react'
import Section from '../MainSite/Section/Section'

const Projects = ({ sections }) => {
  return ( 
        <div className="mb-6 flex flex-wrap">
          {sections.map((section)=>(
            <div key={section.id} className="relative h-48 max-h-80 w-1/2 md:w-1/3 overflow-hidden">
              <Section section={section} />
            </div>
          ))}
        </div>      
  );
}

export default Projects;
