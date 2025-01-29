import React, { useState } from "react";

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute z-10 top-1/2 -translate-y-1/2 ${
      direction === "prev" ? "left-2" : "right-2"
    } bg-white px-2.5 py-1 font-bold rounded-full shadow-lg hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
    aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
  >
    {direction === "prev" ? "<" : ">"}
  </button>
);

const DestinationCarousel = ({ title, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="items-center">
        <div className="relative group overflow-hidden rounded-lg mr-3">
          {/* Image Container with Hover Effect */}
          <div className="transition-transform duration-300 transform group-hover:scale-105">
            {images.length > 0 ? (
              <img
                src={images[currentIndex].url}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[300px] object-cover"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center text-gray-500">
                No images available
              </div>
            )}
          </div>

          {/* Custom Arrow Buttons */}
          <ArrowButton direction="prev" onClick={goToPrevSlide} />
          <ArrowButton direction="next" onClick={goToNextSlide} />

          {/* Pagination Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
        </div>

        {/* Destination Title and Description */}
        <div className="text-black mt-2">
          <h2 className="text-xl font-semibold font-Open">
            {title || "Untitled Destination"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DestinationCarousel;
