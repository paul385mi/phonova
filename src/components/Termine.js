import React from "react";
import MusicItem from "./MusicItem";

const Termine = () => {
  return (
    <div className="termine" id="termine">
      {/* Box */}
      <div className="md:grid grid-cols-3 gap-10 px-16">
        <div className="col-span-2 bg-slate-600 mt-32 md:-mt-44 px-4 py-4 text-white h-80">
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-light mb-4">Hörproben</p>
            <div className="flex justify-between">
              <div>Klassik</div>
              <MusicItem />
            </div>
            <div className="flex justify-between">
              <div>Jazz</div>
              <MusicItem />
            </div>
            <div className="flex justify-between">
              <div>Schlager</div>
              <MusicItem />
            </div>
            <div className="flex justify-between">
              <div>Pop</div>
              <MusicItem />
            </div>
            <div className="flex justify-between">
              <div>Rock</div>
              <MusicItem />
            </div>
            <div className="flex justify-between">
              <div>Hip-Hop</div>
              <MusicItem />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col mt-8 md:-mt-44 space-y-6 text-black p-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-light mb-4">Termine</h1>
            <p className="text-sm font-bold">15.Mai 2022</p>
            <p className="text-sm font-light">Tag der Vereine</p>
            <p className="text-sm font-light">Bürgerpark Wernigerode</p>
            <hr />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">02. Juli 2022 – 16:00</p>
            <p className="text-sm font-light">
              Konzertbeitrag im Rahmen des Chorfests in Chemnitz
            </p>
            <p className="text-sm font-light">
              Schloßbergmuseum, Schloßberg 12, 09113 Chemnitz
            </p>
            <hr />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">11. September 2022 - 16:00</p>
            <p className="text-sm font-light">
            Chorkonzert
            </p>
            <p className="text-sm font-light">
            Konzert in St. Gangolf, Gangolfstr. 1, 06333 Hettstedt
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termine;
