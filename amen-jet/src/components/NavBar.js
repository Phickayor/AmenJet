import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div className="absolute w-full h-32 top-0 flex flex-col bg-black justify-end">
      <img
        className=" w-full top-0 left-0 h-32 opacity-40"
        alt="#"
        src="https://www.freewebheaders.com/wp-content/gallery/healthcare_1/stethoscope-medical-check-up-website-header.jpg"
      ></img>
      <h2 className="absolute text-white text-4xl font-mono top-2 left-10">
        Amen Jet
      </h2>
      <h2 className="absolute text-white text-4xl top-2 right-10">&#9776;</h2>
      <ul
        id="Menu"
        className="absolute text-white flex md:text-2xl sm:lg font-serif space-x-6 p-5 text-xl z-index-1 w-full justify-cente"
      >
        <li>Overview</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Reviews</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li className="hidden">Menu</li>
      </ul>
    </div>
  );
}

export default NavBar;
