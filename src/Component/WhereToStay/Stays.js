import React, { useState } from "react";
import { stays } from "../../Data/stayOptions";
import { stayOptions } from "./../../Data/stayOptions";
import ImageCarousel from "./ImageCarousel"; // Import the custom component

const Stays = () => {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState("recommended");

  const handleSort = (items) => {
    if (sort === "price-low-high") {
      return items.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high-low") {
      return items.sort((a, b) => b.price - a.price);
    }
    return items;
  };

  const filteredStays = filter
    ? stays.filter((stay) => stay.type === filter)
    : stays;

  const sortedStays = handleSort([...filteredStays]);

  const getStayTypeColor = (stayType) => {
    const option = stayOptions.find((opt) => opt.title === stayType);
    return option?.color || "#000";
  };

  return (
    <div className="py-2 px-4">
      <div className="flex justify-between items-center mb-10 p-2">
        <div className="items-center font-Playfair font-semibold text-[28px]">
          Explore Your Stay Options
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFilter(null)}
            className="text-gray-700 mx-4 font-Open font-bold"
          >
            Clear Filters
          </button>

          <div className="rounded-lg border border-gray-500 shadow-md items-center p-1">
            <p className="mb-2 pl-1 text-xs">Sort by</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-Open text-sm"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {sortedStays.map((stay) => (
          <div className="relative p-1 mb-5" key={stay.id}>
            <div className="border rounded-lg items-center mb-1 overflow-hidden">
              <ImageCarousel
                images={stay.image}
                stayType={stay.type}
                getStayTypeColor={getStayTypeColor}
              />
            </div>

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
  );
};

export default Stays;