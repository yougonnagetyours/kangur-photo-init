import React from "react";
import jumpingKangaroo from "../pics/kangaroo.png";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <img
            className="block h-20 w-auto"
            src={jumpingKangaroo}
            alt="jumpingKangaroo"
          />
        </div>
        <div className="text-center text-lg mx-auto mt-10">Wczytywanie</div>
      </div>
    </div>
  );
};

export default Loader;
