import React from "react";
import { Link } from "react-router-dom";

import HeroImg2 from "../assets/HeroImg2.png";

const Hero = () => {
  return (
    <section className="bg-white pb-8 text-black mt-20 md:mt-30">
      <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium md:mx-0">
            Bring the beauty of the outdoors into your home.
          </h1>

          <p className="mt-4 text-sm sm:text-base font-light max-w-xl mx-auto md:mx-0 leading-relaxed">
            Explore our wide selection of indoor botanical plants, thoughtfully
            curated to suit every space and lifestyle. Whether you’re looking
            for a vibrant centerpiece to elevate your décor or a natural,
            air-purifying companion for a healthier home, our collection has
            something for everyone.
          </p>

          <div className="mt-6 flex md:justify-start">
            <Link to={"/Shop"}>
              <button className="px-8 py-3 bg-[#38604f] text-white font-medium active:scale-95 transition cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HeroImg2}
            alt="Indoor Plants"
            className="w-[380px] sm:w-[340px] md:w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
