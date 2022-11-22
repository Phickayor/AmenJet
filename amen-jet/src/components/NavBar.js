import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./style.css";
function NavBar() {
  const bars = <FontAwesomeIcon icon={faBars} />;
  const light = <FontAwesomeIcon icon={faSun} />;
  const dark = <FontAwesomeIcon icon={faMoon} />;
  const [theme, setTheme] = useState(light);
  const [themeValue, setThemeValue] = useState("light");
  const [darkThemeColor, setDarkThemeColor] = useState(false);
  const [darkThemeBackground, setDarkThemeBackground] = useState(false);

  function changeTheme(e) {
    if (themeValue === "dark") {
      setTheme(light);
      setThemeValue("light");
      setDarkThemeBackground(false);
      setDarkThemeColor(false);
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "#000";
    } else {
      setTheme(dark);
      setThemeValue("dark");
      setDarkThemeBackground(true);
      setDarkThemeColor(true);
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    }
  }

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
        {bars}
      </h2>
      <h2
        onClick={() => changeTheme()}
        //
        style={{
          color: darkThemeColor ? "white" : "black",
          backgroundColor: darkThemeBackground ? "black" : "white"
        }}
        className="absolute hidden text-white rounded-3xl bg-black p-5 text-4xl md:block cursor-pointer top-2 right-5"
      >
        {theme}
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
