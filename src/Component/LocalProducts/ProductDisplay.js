import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductCard = ({ product, handleProductClick }) => {
  return (
    <div
      key={product.id}
      className="border p-2 rounded-md cursor-pointer hover:border hover:text-blue-400 hover:border-blue-400 hover:shadow-lg "
      onClick={() => handleProductClick(product)}
    >
      <img
        src={product.productImage}
        alt={product.name}
        className="w-full h-40 object-cover rounded-sm mb-2"
      />
      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col col-span-2 justify-center">
          <h2 className="text-gray-700 text-[12px] overflow-hidden font-semibold font-poppins">
            {product.name}
          </h2>
          <p className="text-black text-base font-bold font-poppins">
            Nrs. {product.price}
          </p>
          <div className="flex items-center space-x-1 mt-1">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(product.reviews)) {
                return (
                  <FaStar key={index} className="text-yellow-500 text-sm" />
                );
              } else if (
                index < Math.ceil(product.reviews) &&
                product.reviews % 1 !== 0
              ) {
                return (
                  <FaStarHalfAlt
                    key={index}
                    className="text-yellow-500 text-sm"
                  />
                );
              } else {
                return (
                  <FaRegStar key={index} className="text-yellow-500 text-sm" />
                );
              }
            })}
          </div>
        </div>
        <div className="flex items-center m-3 justify-center">
          <button className=" items-center bg-blue-500 text-white px-3 py-2 rounded-full shadow-sm hover:bg-blue-700 transition">
            <HiOutlineShoppingBag className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;