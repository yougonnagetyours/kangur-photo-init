import React from 'react'
import { useParams } from 'react-router'

const ProjectDetails = ({ sections }) => {

  let { id } = useParams();
  
  return (
        <>
          {sections.map((section) => id === section.slug ? (
            <>
              <img 
                className="block w-full h-full object-cover" 
                src={section.img.title} 
                alt="candles" 
              />
              <div className="absolute top-0 right-0 mx-3 my-4">
                <p className="text-2xl text-white tracking"></p>
              </div>
            </>
          ) :
          <div></div>
          )}
            
        </>
  );
}

export default ProjectDetails