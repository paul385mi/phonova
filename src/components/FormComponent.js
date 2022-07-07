import React from "react";
import logo from "../assets/VDKC_Logo_100x23_RGB.jpg";


const FormComponent = () => {
  return (
    <div className="form-component" id="form-component">
      <div className="md:grid grid-cols-3 p-20 gap-4">
        <div className="">
          <h1 className="text-4xl font-light">Wir singen für Sie!</h1>
        </div>
        <div className="flex flex-col">
          <div>
            <label htmlFor="name" className="text-sm font-light">
              Name, Vorname
            </label>
            <input type="text" className="bg-slate-400 w-full p-1" />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-light">
              Firma/Institution
            </label>
            <input type="text" className="bg-slate-400 w-full p-1" />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-light">
              Telefonnummer
            </label>
            <input type="text" className="bg-slate-400 w-full p-1" />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-light">
              E-Mailadresse
            </label>
            <input type="text" className="bg-slate-400 w-full p-1" />
          </div>
          <div className="flex mt-4 space-x-4">
            <input type="checkbox" className="" />
            <p className="text-xs font-extralight">
              Hiermit bestätigen Sie, die Datenschutzbedingungen gelesen und
              akzeptiert zu haben.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <label htmlFor="anliegen" className="text-sm font-light">
              Anliegen
            </label>
            <textarea
              name=""
              id=""
              cols="25"
              rows="10"
              className="bg-slate-400 w-full"
            ></textarea>
          </div>
          <div>
            <button className="p-2 bg-black text-white w-full">Senden!</button>
          </div>
        </div>
      </div>
      <div className=" px-20 mb-10">
            <p className="text-sm font-light">Mitglied im</p>
            <div className="image-wrapper md:w-1/4">
                <img src={logo} alt="Logo" className="object-cover w-full"/>
            </div>
      </div>
    </div>
  );
};

export default FormComponent;
