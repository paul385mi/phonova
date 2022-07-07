import React from "react";
import logo from '../assets/phone_black.PNG'

const Phonova = () => {
  return (
    <div className="termine-section p-20 bg-gray-200 h-150" id="phonova">
      <div className="md:grid grid-cols-2">
        <div className="flex flex-col space-y-4 w-full">
          <h1 className="text-4xl font-light">
            Schön, dass Sie uns virtuell besuchen!
          </h1>
          <p className="text-md font-light">
            Als Frauenkammercor „Vocalensemble Phonova Wernigerode“
            repräsentieren wir ein buntes Portfolio an Stilistiken, welche mit
            Leidenschaft und einem hohen Maß an Professionaliät wiedergegeben
            werden.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="image-wrapper w-52 md:w-80">
            <img src={logo} alt="logo" className="w-10/12 mx-auto md:-mt-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonova;
