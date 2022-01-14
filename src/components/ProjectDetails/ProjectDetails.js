import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader";

const ProjectDetails = ({ sections }) => {
  let { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000);
  }, []);

  return (
    <>
      {isLoaded ? <Loader /> : null}
      {sections.map((section) =>
          id === section.slug ? (
            <div className="mt-14 mx-4 mb-8">
              <div className="mb-10">
                <p className="text-4xl">{section.name}</p>
              </div>
              <div className="mb-10">
                <p className="text-base font-light text-justify">
                  {section.desc}
                </p>
              </div>
              {section.imgs.map((img) => (
                <div className="mb-10">
                  <img
                    className="block w-full h-full object-cover"
                    src={img}
                    alt="candles"
                  />
                </div>
              ))}
            </div>
          ) : null
        )}
    </>
  );
};

export default ProjectDetails;
