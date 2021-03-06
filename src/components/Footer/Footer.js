import React from 'react'
import insta from '../../pics/instagram.png'

export default function Footer() {
  
  return (
      <div className="flex justify-center items-center h-16">
        <div className="mx-2 text-center">
          <p className="text-sm font-light tracking-widest">@2021, Kinga</p>
        </div>
        <div className="mx-2 h-4 flex justify-center">
          <a href="https://www.instagram.com" className="block">
            <img 
                className="block h-full" 
                src={insta} 
                alt="candles" 
              />
          </a>
        </div>
      </div>    
  );
}
