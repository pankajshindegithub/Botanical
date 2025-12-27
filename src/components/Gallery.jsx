import React from "react";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";

export default function Gallery() {
  return (
    <section
      className="
        bg-[#dfe6df] py-10 px-6 rounded-2xl mx-auto
        w-full
        max-w-[1000px]
        overflow-hidden
        mb-12
        mt-12
      "
    >
      <div className="max-w-[900px] text-center mx-auto">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          Transform your home with the beauty of Indoor Plants
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Each plant is chosen for its beauty, resilience, and ability to
          enhance your living space. Discover the transformative power of plants
          with our carefully curated selection.
        </p>
        <button className="mt-6 bg-green-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          Shop Now
        </button>

        {/* Images Gallery */}
        <div
          className="
            flex gap-3 sm:gap-6 lg:gap-8 items-end justify-center mt-12
            overflow-x-auto
            sm:overflow-visible
            flex-nowrap
            pb-2
            scrollbar-hide
          "
        >
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={plant1}
              alt="Indoor plant 1"
              className="w-24 h-32 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-contain block drop-shadow-lg"
            />
          </div>
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={plant2}
              alt="Indoor plant 2"
              className="w-24 h-32 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-contain block drop-shadow-lg"
            />
          </div>
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={plant3}
              alt="Indoor plant 3"
              className="w-28 h-36 sm:w-36 sm:h-44 lg:w-40 lg:h-48 object-contain block drop-shadow-lg"
            />
          </div>
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={plant4}
              alt="Indoor plant 4"
              className="w-24 h-32 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-contain block drop-shadow-lg"
            />
          </div>
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={plant5}
              alt="Indoor plant 5"
              className="w-24 h-32 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-contain block drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
