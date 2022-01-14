import React from "react";
import jumpingKangaroo from "../pics/kangaroo.png";

const Loader = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 gap-4 place-content-center">
      <div className='mb-6>
        <div className="flex justify-center animate-bounce">
          <img
            className="block h-20 w-auto"
            src={jumpingKangaroo}
            alt="jumpingKangaroo"
          />
        </div>
        <div className="text-center font-bold text-lg mx-auto mt-6">Wczytywanie</div>
      </div>
    </div>
  );
};

export default Loader;
