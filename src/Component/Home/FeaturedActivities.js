import React from "react";

const FeaturedActivities = () => {
  return (
    <div className="flex flex-col mt-3 py-4">
      <h1 className="text-center font-Playfair font-semibold text-2xl mb-10">
        Featured Activities
      </h1>
      {/* Images Grid */}
      <div className="grid grid-cols-8 gap-0 w-full h-52">
        {/* Image 1 */}
        <div className="col-span-1 row-span-2">
          <img
            src="/assets/Images/Activities-Home/Frame 40.png"
            alt="Yoga in nature"
            className="h-full w-full object-contain rounded-l-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="col-span-1 row-span-2">
          <img
            src="/assets/Images/Activities-Home/Frame 39.png"
            alt="Pilgrimage"
            className="h-full w-full object-contain rounded-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="col-span-2">
          <img
            src="/assets/Images/Activities-Home/Frame 35.png"
            alt="Camping"
            className="h-full w-full object-contain"
          />
        </div>
        {/* Image 4 */}
        <div className="col-span-2">
          <img
            src="/assets/Images/Activities-Home/Frame 34.png"
            alt="Trekking"
            className="h-full w-full object-contain"
          />
        </div>
        {/* Image 5 */}
        <div className="col-span-1">
          <img
            src="/assets/Images/Activities-Home/Frame 36.png"
            alt="Wildlife Spotting"
            className="h-full w-full object-contain"
          />
        </div>
        {/* Image 7 */}
        <div className="col-span-1 row-span-2 p-0.25">
          <img
            src="/assets/Images/Activities-Home/Frame 38.png"
            alt="Cultural Immersion"
            className="h-full w-full object-cover rounded-r-lg"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <span className="text-orange-500 text-6xl font-medium font-allura">
            Welcome to{" "}
            <span className="text-red-600 italic text-6xl font-medium font-allura">
              Panchpokhari
            </span>
          </span>
        </div>

        <div className="col-span-1">
          <img
            src="/assets/Images/Activities-Home/Frame 37.png"
            alt="Photography"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedActivities;
