import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {
  AOS.init();
  const services = [
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Mental Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Mobile Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Home Embambling",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6753471/pexels-photo-6753471.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Ambulance Services",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6753471/pexels-photo-6753471.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Geriatric Nursing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=2000",
      name: "Recruitment of registered nurses",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];
  return (
    <div
      id="services"
      data-aos="fade-up"
      data-aos-duration="2000"
      className="h-full"
    >
      <h1 className="text-5xl mt-36 font-serif">
        Our <i className="text-blue-500">Services</i>
      </h1>
      <div className="flex justify-center m-10 flex-wrap">
        {services.map((service) => (
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-96 m-5 bg-white hover:bg-blue-500 hover:text-white text-black shadow-2xl p-5 flex flex-wrap justify-center rounded-3xl"
          >
            <img
              src={service.image}
              alt={service.name + "image"}
              className="rounded-3xl h-52 w-full"
            />
            <h1 className="text-4xl font-serif w-full">{service.name}</h1>
            <p className="text-lg font-mono w-full">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
