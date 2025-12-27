import React from "react";
import wc1 from "../assets/wc1.png";
import wc2 from "../assets/wc2.jpg";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-[#f6f5f2] mt-12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Welcome to Botanical,
            <br />
            where nature meets{" "}
            <span className="italic font-normal">ELEGANCE.</span>
          </h2>

          <p className="mt-6 text-gray-500 text-base max-w-md">
            Your premier destination for high-quality plants and exceptional
            customer service. Rooted with a passion for nature and a commitment
            to sustainability, we bring the beauty and tranquility of greenery
            into every home and garden.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* LEFT CARD WITH PLAY */}
          <div className="relative bg-[#fee3d0] rounded-2xl p-6 flex items-center justify-center">
            <img
              src={wc1}
              alt="Plants"
              className="w-full h-48 object-contain"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={wc2}
              alt="Plant Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
