import React, { useState } from "react";
import { destinations } from "../../Data/DestinationCarousel";
import { stayOptions, stays } from "../../Data/stayOptions";
import FeaturedCarousel from "./Carousel/FeaturedCarousel";

const FeaturedAccomodations = () => {
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

  const getStayTypeColor = (stayType) => {
    const option = stayOptions.find((opt) => opt.title === stayType);
    return option?.color || "#000";
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
            Featured Accomodations
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
          {stays.map((stay, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flexBasis: "25%" }} // Divide into 4 columns
            >
              <FeaturedCarousel
                images={stay.image}
                stayType={stay.type}
                getStayTypeColor={getStayTypeColor}
              />
              
              <div className="py-1">
                <h2 className="font-medium text-[14px] font-Open">
                  {stay.title}
                </h2>
                <div className="flex">
                  <p className="text-gray-700 text-xs font-Open">
                    {stay.location}
                  </p>
                  <p className="text-gray-700 text-xs font-Open pl-2">
                    Mobile: {stay.contact}
                  </p>
                </div>
                <p className="font-bold mt-2 font-Open text-[15px]">
                  NRS {stay.price}{" "}
                  <span className="text-[14px] font-medium font-Open">
                    / night
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAccomodations;
