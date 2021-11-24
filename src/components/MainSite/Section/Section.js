import React from 'react'

const Section = ({ section }) => {
  
  return (
        <>
            <img 
              className="block w-full h-full object-cover" 
              src={section.img.title} 
              alt="candles" 
            />
            <div className="absolute top-0 right-0 mx-3 my-4">
              <p className="text-2xl text-white tracking">{section.name}</p>
            </div>
        </>
  );
}

export default Section