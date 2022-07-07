import React from "react";
import KonzertImage from "../assets/marius-masalar-rPOmLGwai2w-unsplash.jpg";

const KonzertScreen = () => {
  return (
    <div className="konzert-screen" id="konzert-screen">
      <div className="md:grid grid-cols-3 gap-10 p-16 md:-mt-28 lg:-mt-10">
        <div className="col-span-2">
          <div className="space-y-4">
            <p className="text-sm font-bold">
              Konzertmitschnitt aus Dessau-Roßlau:
            </p>
            <p className="text-sm font-light">
              O Tannenbaum, du trägst ein grünen Zweig
            </p>
            <div className="image-wrapper w-full">
              <img src={KonzertImage} alt="Konzert" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonzertScreen;
