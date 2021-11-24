import React from 'react'
import { useParams } from 'react-router'

const ProjectDetails = ({ sections }) => {

  let { id } = useParams();
  
  return (
        <>
          {sections.map((section) => id === section.slug ? (
            <div className="mt-14 mx-4 mb-8">
              <div className="mb-10">
                <p className="text-4xl font-medium">{section.name}</p>
              </div>
              <div className="mb-10">
                <p className="text-base">{section.desc}</p>
              </div>
              {/*Add map in the future*/}
              <div className="mb-10">
                <img 
                  className="block w-full h-full object-cover" 
                  src={section.img.title} 
                  alt="candles" 
                />
              </div>
              <div>
                <img 
                  className="block w-full h-full object-cover" 
                  src={section.img.another} 
                  alt="candles" 
                />
              </div>   
            </div>
          ) :
          <div></div>
          )}
            
        </>
  );
}

export default ProjectDetails