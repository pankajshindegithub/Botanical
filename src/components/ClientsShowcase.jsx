import React from "react";
import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";
import plant4 from "../assets/plant4.jpg";
import plant5 from "../assets/plant5.jpg";

const ClientsShowcase = () => {
  return (
    <section className="bg-[#e0e6e3] w-full mt-12 mb-12 py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Text */}
        <div className="md:w-1/3 flex items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Some of our <br /> fantastic clients
          </h2>
        </div>

        {/* Right Images */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1 row-span-2">
            <img
              src={plant1}
              alt="client"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <img
            src={plant2}
            alt="client"
            className="w-full h-44 object-cover rounded-lg"
          />

          <img
            src={plant3}
            alt="client"
            className="w-full h-44 object-cover rounded-lg"
          />

          <img
            src={plant4}
            alt="client"
            className="w-full h-44 object-cover rounded-lg"
          />

          <img
            src={[plant5]}
            alt="client"
            className="w-full h-44 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
