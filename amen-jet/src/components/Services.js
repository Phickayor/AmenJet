import React from "react";

function Services() {
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
    <div id="services">
      <h1 className="text-5xl mt-10 font-serif">
        Our <i className="">Services</i>
      </h1>
      <div className="flex justify-center m-10 flex-wrap">
        {services.map((service) => (
          <div className="w-96 m-5 h-96 p-5 flex flex-wrap justify-center border rounded-3xl">
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
