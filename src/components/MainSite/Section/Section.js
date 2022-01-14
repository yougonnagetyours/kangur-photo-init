import React from "react";
import { Link } from "react-router-dom";

const Section = ({ section }) => {
  return (
    <>
      <Link to={`/${section.slug}`}>
        <img
          className="block w-full h-full object-cover cursor-pointer"
          src={section.titleImg}
          alt={section.name}
        />
        <div className="absolute top-0 right-0 mx-3 my-4">
          <p className="text-2xl text-white font-light ">{section.name}</p>
        </div>
      </Link>
    </>
  );
};

export default Section;
