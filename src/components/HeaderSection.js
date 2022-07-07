import React, { useState } from "react";
import logo from "../assets/logo.png";

const HeaderSection = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleButtonHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <section className="header-section" id="header-section">
      {/* Navbar */}
      <nav className="border-gray-200">
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <button
            onClick={toggleButtonHandler}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              !showNav ? "hidden" : ""
            } w-full md:block md:w-auto" id="mobile-menu`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium justify-end">
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-white "
                  aria-current="page"
                >
                  Chor
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a
                  href="#termine"
                  className="block py-2 pr-4 pl-3 hover:text-white "
                >
                  Termine
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a href="#" className="block py-2 pr-4 pl-3 hover:text-white">
                  Verein
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a href="#" className="block p-2 hover:text-white  ">
                  Archiv
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a href="#" className="block py-2 pr-4 pl-3 hover:text-white ">
                  Kontakt
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a href="#" className="block py-2 pr-4 pl-3 hover:text-white ">
                  Buchung
                </a>
              </li>
              <li className="p-2 hover:bg-black text-black hover:text-white">
                <a href="#" className="block py-2 pr-4 pl-3 hover:text-white ">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Show Logo */}
      <div className="logo-section flex flex-col items-center h-80 justify-center">
        <div className="w-80 md:h-96 flex items-center">
          <img src={logo} alt="Name" className="object-contain" />
        </div>
      </div>
      {/* Show 3 Cards  */}
      <div className="flex flex-col md:flex-row flex-wrap justify-around md:mx-28 md:space-x-2 p-8 space-y-6 md:space-y-0">
        <div className="chor bg-green-600 text-center px-10 h-32 hover:bg-green-400 cursor-pointer">
          <p className="text-lg">Chorklänge</p>
        </div>
        <div className="chor bg-lime-100 text-center px-10 h-32 hover:bg-lime-400 cursor-pointer">
          <p className="text-lg">Über Uns</p>
        </div>
        <div className="chor bg-orange-200 text-center px-10 h-32 hover:bg-orange-400 cursor-pointer">
          <p className="text-lg">Termine</p>
        </div>
        <div className="w-full h-20 flex items-center justify-center">
          <a href="#phonova">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
