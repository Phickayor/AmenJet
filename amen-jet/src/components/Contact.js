import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-duration="2000"
      className="flex h-full flex-wrap justify-center"
    >
      <h1 className="text-5xl mt-36 font-serif w-full">
        <i className="text-blue-500">Contact </i>Us
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex w-full m-10 flex-wrap sm:flex-nowrap justify-center"
      >
        <form className=" bg-white w-9/12 m-5 text-black shadow-2xl p-5 rounded-3xl hover:bg-blue-500 hover:text-white">
          <label className="p-5 font-mono text-3xl">E-mail</label>
          <br />
          <input
            type="email"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Your Mail..."
            required
          />
          <br />
          <label className="p-5 font-mono text-3xl">Message</label>
          <br />
          <textarea
            type="text"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Drop your message here..."
            required
          />
          <button className="lg:w-2/4 m-5 w-9/12 bg-white text-black text-center focus:outline-none text-2xl shadow-2xl p-5 font-mono rounded-3xl border-4 border-black hover:bg-blue-700 hover:text-white hover:lg:w-9/12">
            Submit
          </button>
        </form>

        <ul className="  bg-white m-5 text-black rounded-2xl flex justify-center sm:flex-col ">
          <a href="https://wa.me/+2348056505476">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500">
              {whatsapp}
            </li>
          </a>
          <a href=".">
            <li className="text-5xl sm:text-6xl m-5 hover:text-blue-500">
              {instagram}
            </li>
          </a>
          <a href="tel:+2349025303318">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500">
              {phone}
            </li>
          </a>
          <a href="mailto:jetawotemitope@gmail@gmail.com">
            <li className="text-4xl sm:text-5xl m-5 hover:text-blue-500">
              {mail}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
