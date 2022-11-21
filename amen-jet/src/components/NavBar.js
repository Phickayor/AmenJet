import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div className="fixed w-full h-32 top-0 flex flex-col z-10 bg-black justify-end">
      <img
        className=" w-full top-0 left-0 h-32 opacity-40"
        alt="#"
        src="https://www.freewebheaders.com/wp-content/gallery/healthcare_1/stethoscope-medical-check-up-website-header.jpg"
      ></img>
      <h2 className="absolute bottom-2 text-white md:text-4xl text-5xl font-mono md:top-3 left-10">
        Amen Jet
      </h2>
      <h2 className="absolute text-black rounded-3xl bg-white p-5 text-4xl md:hidden cursor-pointer top-2 right-5">
        &#9776;
      </h2>
      <ul
        id="Menu"
        className="absolute text-white md:text-2xl text-xl hidden md:flex font-serif space-x-6 p-5 z-index-1 w-full justify-center"
      >
        <li>Overview</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Reviews</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
