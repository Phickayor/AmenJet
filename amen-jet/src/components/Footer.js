import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const rightArrow = <FontAwesomeIcon icon={faCaretRight} />;
  return (
    <footer
      className="bg-gray-700 text-white rounded-t-3xl p-10"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="flex flex-wrap sm:flex-nowrap border-blue-200 p-2 rounded-3xl mb-2 border-b-2 justify-center">
        <div className="m-4 w-3/12 min-w-max">
          <h1 className="text-3xl font-serif mb-5">Sitemap</h1>
          <ul className="space-x-6 text-xl text-slate-200">
            <a href="#services">
              <li className="hover:border hover:p-4">{rightArrow} Services</li>
            </a>
            <a href="#gallery">
              <li className="hover:border hover:p-4">{rightArrow} Gallery</li>
            </a>
            <a href="#reviews">
              <li className="hover:border hover:p-4">{rightArrow} Reviews</li>
            </a>
            <a href="#contact">
              <li className="hover:border hover:p-4">{rightArrow} Contact</li>
            </a>
          </ul>
        </div>
        <div className="m-4 w-3/12 min-w-max">
          <h1 className="text-3xl font-serif mb-5">Our Services</h1>
          <ul className="flex flex-col justify-center text-xl text-slate-200">
            <li className="mb-6 hover:border hover:p-4">
              {rightArrow} Mental Nursing
            </li>
            <li className="mb-6 hover:border hover:p-4">
              {rightArrow} Mobile Nursing
            </li>
            <li className="mb-6 hover:border hover:p-4">
              {rightArrow} Geriatric Nursing
            </li>
            <li className="mb-6 hover:border hover:p-4">
              {rightArrow} Ambulance Services
            </li>
            <li className="mb-6 hover:border hover:p-4">
              {rightArrow} Home Embambling
            </li>
            <li className="mb-6 hover:border hover:p-4">
              Recruitment of registered nurses
            </li>
          </ul>
        </div>
        <div className="m-4 w-3/12 min-w-max">
          <h1 className="text-3xl font-serif">Quick Links</h1>
          <ul className="text-xl text-slate-200">
            <li className="hover:border hover:p-4">{rightArrow} Fikayo</li>
          </ul>
        </div>
        <div className="m-4 w-3/12 min-w-max">
          <h1 className="text-3xl font-serif">Quick Links</h1>
          <ul className="text-xl text-slate-200">
            <li className="hover:border hover:p-4">{rightArrow} fikayo</li>
          </ul>
        </div>
      </div>
      <p className="w-full text-center text-xl">&copy; Olufikayomi Jetawo</p>
    </footer>
  );
}

export default Footer;
