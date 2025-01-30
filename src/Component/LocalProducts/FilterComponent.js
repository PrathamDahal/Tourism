import React, { useState } from "react";
import { BiFilterAlt, BiChevronDown } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import products from "../../Data/Products";

const FilterComponent = ({
  subcategories,
  allTags,
  filters,
  setFilters,
  handleFilterApply,
}) => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    priceRange: true,
    rating: true,
    tags: true,
  });

  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-64 px-4 py-2">
      {/* Filter Button */}
      <button className="flex items-center font-poppins justify-center px-4 py-2 bg-red-600 text-white text-base font-medium rounded-full mb-4">
        Filter <BiFilterAlt size={18} className="ml-2" />
      </button>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-medium font-poppins text-gray-900">All Categories</h3>
          <BiChevronDown
            className={`transform transition-transform duration-200 ${
              openSections.categories ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        <div
          className={`overflow-hidden font-poppins transition-all duration-300 ease-in-out ${
            openSections.categories ? "max-h-96" : "max-h-0"
          }`}
        >
          {subcategories.map((subcat) => (
            <label
              key={subcat}
              className="flex items-center space-x-2 mb-2 text-gray-600"
            >
              <input
                type="radio"
                name="selectedSubcategory"
                value={subcat}
                checked={filters.selectedSubCategories.includes(subcat)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    selectedSubCategories: prev.selectedSubCategories.includes(
                      subcat
                    )
                      ? []
                      : [subcat],
                  }))
                }
                className="text-red-600 focus:ring-red-500"
              />
              <span className="text-sm">{subcat}</span>
              <span className="text-gray-400 text-xs ml-auto">(154)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 font-poppins">
        <button
          onClick={() => toggleSection("priceRange")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-medium text-gray-900">Price</h3>
          <BiChevronDown
            className={`transform transition-transform duration-200 ${
              openSections.priceRange ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.priceRange ? "max-h-24" : "max-h-0"
          }`}
        >
          <style>
            {`
              input[type="range"] {
                appearance: none;
                width: 100%;
                height: 6px;
                background: #1e90ff;
                border-radius: 4px;
                outline: none;
              }

              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 14px;
                height: 14px;
                background: white;
                border: 2px solid #007bff;
                border-radius: 50%;
                cursor: pointer;
                position: center;
                margin-top: -5px;
              }

              input[type="range"]::-moz-range-thumb {
                width: 14px;
                height: 14px;
                background: white;
                border: 2px solid #007bff;
                border-radius: 50%;
                cursor: pointer;
              }

              input[type="range"]::-webkit-slider-runnable-track {
                background: #1e90ff;
                height: 4px;
                border-radius: 4px;
              }

              input[type="range"]::-moz-range-track {
                background: #1e90ff;
                height: 2px;
                border-radius: 4px;
              }
            `}
          </style>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [minPrice, Number(e.target.value)],
              }))
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2 text-gray-600">
            <span>Price: ${minPrice}</span>
            <span>To</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6 font-poppins">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-medium text-gray-900">Rating</h3>
          <BiChevronDown
            className={`transform transition-transform duration-200 ${
              openSections.rating ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.rating ? "max-h-48" : "max-h-0"
          }`}
        >
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center mb-2">
              <input
                type="checkbox"
                name="minRating"
                checked={filters.minRating === rating}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    minRating: prev.minRating === rating ? null : rating,
                  }))
                }
                className="text-red-600 focus:ring-red-500"
              />
              <div className="flex items-center ml-2">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    size={16}
                    className={i < rating ? "text-yellow-400" : "text-gray-200"}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  {rating}.0 & up
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6 font-poppins">
        <button
          onClick={() => toggleSection("tags")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-medium text-gray-900">Popular Tag</h3>
          <BiChevronDown
            className={`transform transition-transform duration-200 ${
              openSections.tags ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openSections.tags ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-xs ${
                  filters.selectedTags.includes(tag)
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setFilters((prev) => ({
                    ...prev,
                    selectedTags: prev.selectedTags.includes(tag)
                      ? prev.selectedTags.filter((t) => t !== tag)
                      : [...prev.selectedTags, tag],
                  }));
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleFilterApply}
        className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
