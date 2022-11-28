import React from "react";

function Home() {
  return (
    <div
      style={{ zIndex: "-1" }}
      // data-aos="zoom-in"
      // data-aos-duration="2000"
      className="absolute top-32 text-black p-5 rounded-3xl"
    >
      <div className="flex-wrap flex justify-center w-full bg-white">
        <img
          className="rounded-3xl"
          src="https://stella-hospital.netlify.app/img/Medicine.gif"
          alt="pic"
        />
        <div className="p-5 flex flex-col lg:w-2/4 lg:pl-36">
          <h1 className="text-6xl p-5 font-serif">AMEN JET MEDICAL SERVICES</h1>
          <p className="text-3xl p-5 font-mono">
            Bringing quality health care to your door step.
          </p>
          <button className="rounded-3xl bg-blue-600 font-serif text-center hover:bg-white hover:text-black p-10 text-2xl text-white">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
