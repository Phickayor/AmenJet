import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-duration="2000"
      className="flex flex-wrap justify-center"
    >
      <h1 className="text-5xl mt-10 font-serif w-full">
        <i className="text-blue-500">Contact </i>Us
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-9/12 m-5 bg-white text-black shadow-2xl  p-5 rounded-3xl hover:bg-blue-500 hover:text-white"
      >
        <form>
          <label className="p-5 font-mono text-3xl">E-mail</label>
          <br />
          <input
            type="email"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Your Mail..."
          />
          <br />
          <label className="p-5 font-mono text-3xl">Message</label>
          <br />
          <textarea
            type="text"
            className="w-9/12 m-5 bg-white font-serif text-black text-center focus:outline-none text-2xl shadow-2xl p-5 rounded-3xl border-4 border-black"
            placeholder="Drop your message here..."
          />
          <button className="lg:w-2/4 m-5 w-9/12 bg-white text-black text-center focus:outline-none text-2xl shadow-2xl p-5 font-mono rounded-3xl border-4 border-black hover:bg-blue-700 hover:text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
