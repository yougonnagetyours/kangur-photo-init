import React from 'react'


export default function Section({ section }) {
  
  return (
      <div>
        <div className="relative h-96 lg:mr-3 max-h-80 overflow-hidden">
            <img 
              className="block w-full h-full object-cover" 
              src={section.img} 
              alt="candles" 
            />
            <div className="absolute top-0 right-0 mx-3 my-4">
              <p className="text-2xl text-white tracking">{section.name}</p>
            </div>
          </div>
      </div>    
  );
}