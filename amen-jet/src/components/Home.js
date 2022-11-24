import React from "react";

function Home() {
  return (
    <div
      id="overview"
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="flex flex-wrap mt-12 p-5 justify-center w-full"
    >
      <img
        className="rounded-3xl "
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
  );
}

export default Home;
