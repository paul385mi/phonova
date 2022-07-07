import React from "react";

const Footer = () => {
  return (
    <div className="footer px-20 bg-slate-400 text-white py-6" id="footer">
      <div className="flex flex-col md:flex-row justify-between h-full">
        <div className="flex flex-col justify-between py-2">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-sm font-light">
              Impressum
            </a>
            <a href="#" className="text-sm font-light">
              Datenschutzerklärung
            </a>
          </div>
          <div>
            <a href="#" className="text-sm font-light">
              © Vocalensemble Phonova Wernigerode e.V.
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2 py-2">
          <p className="text-sm font-light">Folgen Sie uns auf:</p>
          <div className="flex space-x-2">
            <div>
              <a href="#">
                <svg
                  className="w-10 h-10 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
