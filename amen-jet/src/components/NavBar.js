import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const bars = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faClose} />;
  const light = <FontAwesomeIcon icon={faSun} />;
  const dark = <FontAwesomeIcon icon={faMoon} />;
  const [sideMenuBtn, setSideMenuBtn] = useState(bars);
  const [sideBarWidth, setWidth] = useState("0px");
  const [sideBarPadding, setSideBarPadding] = useState("0px");
  const [sideMenuBtnValue, setSideMenuBtnValue] = useState(true);
  const [theme, setTheme] = useState(dark);
  const [themeValue, setThemeValue] = useState("light");
  const [darkThemeColor, setDarkThemeColor] = useState(false);
  const [darkThemeBackground, setDarkThemeBackground] = useState(false);

  function changeTheme(e) {
    if (themeValue === "dark") {
      setTheme(dark);
      setThemeValue("light");
      setDarkThemeBackground(false);
      setDarkThemeColor(false);
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "#000";
    } else {
      setTheme(light);
      setThemeValue("dark");
      setDarkThemeBackground(true);
      setDarkThemeColor(true);
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    }
  }

  function ToggleSideMenu() {
    if (sideMenuBtnValue === true) {
      setSideMenuBtn(close);
      setSideBarPadding("1.25rem");
      setWidth("20rem");
      setSideMenuBtnValue(false);
    } else {
      setSideMenuBtn(bars);
      setSideBarPadding("0");
      setWidth("0");
      setSideMenuBtnValue(true);
    }
  }

  return (
    <div className="border">
      <div className="fixed rounded-b-3xl w-full h-32 top-0 flex flex-col bg-black justify-end">
        <ul
          style={{
            width: sideBarWidth,
            padding: sideBarPadding,
            transition: "0.5s",
            color: darkThemeBackground ? "white" : "black",
            backgroundColor: darkThemeBackground ? "black" : "whitesmoke"
          }}
          className="absolute top-0 right-0 h-screen overflow-y-scroll overflow-x-hidden text-white md:hidden bg-black md:text-2xl text-2xl font-serif p-10 w-80"
        >
          <Link to="/" onClick={ToggleSideMenu}>
            <li className="hover:border-4 p-4 mb-20 border-blue-100 mt-20">
              Overview
            </li>
          </Link>
          <Link to="services" onClick={ToggleSideMenu}>
            <li className="hover:border-4 p-4 mb-20 border-blue-100">
              Services
            </li>
          </Link>
          <Link to="contact" onClick={ToggleSideMenu}>
            <li className="hover:border-4 p-4 mb-20 border-blue-100">
              Contact
            </li>
          </Link>
          <Link to="reviews" onClick={ToggleSideMenu}>
            <li className="hover:border-4 p-4 mb-20 border-blue-100">
              Reviews
            </li>
          </Link>
          <Link to="gallery" onClick={ToggleSideMenu}>
            <li className="hover:border-4 p-4 mb-20 border-blue-100">
              Gallery
            </li>
          </Link>
          <Link onClick={ToggleSideMenu}>
            <li
              onClick={changeTheme}
              className="hover:border-4 p-4 mb-20 border-blue-100"
            >
              Switch Mode
            </li>
          </Link>
        </ul>
      </div>
      <div className="fixed top-0 h-32 w-full">
        <img
          className=" w-full top-0  left-0 h-32 opacity-40"
          alt="#"
          src="https://www.freewebheaders.com/wp-content/gallery/healthcare_1/stethoscope-medical-check-up-website-header.jpg"
        ></img>
        <h2 className="absolute bottom-2 text-white md:text-4xl text-5xl font-mono md:top-3 left-10">
          Amen Jet
        </h2>
        <ul className="absolute bottom-0 w-full md:text-2xl text-white text-xl hidden md:flex font-serif space-x-6 justify-center">
          <Link
            to="/"
            className="hover:border-b-4 active:border-b-4 active:border-b-blue-500 p-4"
          >
            <li>Overview</li>
          </Link>
          <Link
            to="services"
            className="hover:border-b-4 active:border-b-4 active:border-b-blue-500 p-4"
          >
            <li>Services</li>
          </Link>
          <Link
            to="contact"
            className="hover:border-b-4 active:border-b-4 active:border-b-blue-500 p-4"
          >
            <li>Contact</li>
          </Link>
          <Link
            to="reviews"
            className="hover:border-b-4 active:border-b-4 active:border-b-blue-500 p-4"
          >
            <li>Reviews</li>
          </Link>
          <Link
            to="gallery"
            className="hover:border-b-4 active:border-b-4 active:border-b-blue-500 p-4"
          >
            <li>Gallery</li>
          </Link>
        </ul>
        <button
          onClick={() => ToggleSideMenu()}
          className="absolute text-black rounded-3xl bg-white p-5 text-4xl md:hidden cursor-pointer top-2 right-5 z-index-50"
        >
          {sideMenuBtn}
        </button>
        <h2
          onClick={() => changeTheme()}
          //
          style={{
            color: darkThemeColor ? "black" : "white",
            backgroundColor: darkThemeBackground ? "white" : "black"
          }}
          className="absolute hidden text-white rounded-3xl bg-black p-5 text-4xl md:block cursor-pointer top-2 right-5"
        >
          {theme}
        </h2>
      </div>

      <Outlet />
    </div>
  );
}

export default NavBar;
