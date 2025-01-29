import React, { useState } from "react";
import DestinationCarousel from "./Carousel/DestinationCarousel";
import { destinations } from "../../Data/DestinationCarousel";

const PopularDestinations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const goToPrevSlide = () => {
    if (!isSliding && startIndex > 0) {
      setIsSliding(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
        setIsSliding(false);
      }, 300); // Match this with the CSS transition duration
    }
  };

  const goToNextSlide = () => {
    if (!isSliding && startIndex + 4 < destinations.length) {
      setIsSliding(true);
      setTimeout(() => {
        setStartIndex((prevIndex) =>
          Math.min(prevIndex + 4, destinations.length - 4)
        );
        setIsSliding(false);
      }, 300); // Match this with the CSS transition duration
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4 items-center gap-32 justify-center mx-auto">
          <button
            onClick={goToPrevSlide}
            className="bg-yellow-500 px-3 py-1 font-semibold rounded-full text-[22px] text-white shadow-md hover:bg-yellow-600"
          >
            &lt;
          </button>
          <h2 className="text-center font-Playfair font-semibold text-2xl">
            Popular Destinations
          </h2>
          <button
            onClick={goToNextSlide}
            className="bg-yellow-500 px-3 py-1 font-semibold rounded-full text-[22px] text-white shadow-md hover:bg-yellow-600"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * 100}%)`,
          }}
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flexBasis: "25%" }} // Divide into 4 columns
            >
              <DestinationCarousel
                key={index}
                title={destination.title}
                images={destination.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
