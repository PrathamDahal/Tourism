import { useState, useEffect } from "react";
import Products from "./../../Data/Products";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Array.from(
    new Set(Products.map((product) => product.category.name))
  ).map((categoryName) => {
    const category = Products.find(
      (product) => product.category.name === categoryName
    ).category;
    return category;
  });

  const filteredProducts = selectedCategory
    ? Products.filter(
        (product) => product.category.name === selectedCategory.name
      )
    : Products;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Push state for product details (optional for navigation state tracking)
    window.history.pushState(
      { productId: product.id },
      "",
      `#product-${product.id}`
    );
  };

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProduct(null);
      setSelectedCategory(null);
    };

    // Listen for popstate to handle browser back navigation
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="p-4">
      {!selectedProduct && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
          <div className="grid grid-cols-5 gap-4 mb-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="border p-4 rounded-lg cursor-pointer hover:border hover:text-blue-400 hover:border-blue-400 hover:shadow-md"
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.categoryImage}
                  alt={category.name}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-medium font-poppins text-center">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg cursor-pointer hover:shadow-md"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold font-poppins">
                  {product.name}
                </h2>
                <p className="text-gray-700 font-poppins">
                  Nrs. {product.price}
                </p>

                {/* Product Rating (stars) */}
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => {
                    if (index < Math.floor(product.reviews)) {
                      // Full star
                      return <FaStar key={index} className="text-yellow-500" />;
                    } else if (
                      index < Math.ceil(product.reviews) &&
                      product.reviews % 1 !== 0
                    ) {
                      // Half star
                      return (
                        <FaStarHalfAlt
                          key={index}
                          className="text-yellow-500"
                        />
                      );
                    } else {
                      // Empty star
                      return (
                        <FaRegStar key={index} className="text-yellow-500" />
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedProduct && (
        <div>
          {/* Product details */}
          <div className="border p-4 rounded-lg">
            <img
              src={selectedProduct.productImage}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <p className="text-lg font-semibold mb-2">
              Price: {selectedProduct.price}
            </p>
            <p className="text-lg font-semibold mb-2">
              Stock: {selectedProduct.stocks}
            </p>

            {/* Product Rating (stars) */}
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.floor(selectedProduct.reviews)) {
                  // Full star
                  return <FaStar key={index} className="text-yellow-500" />;
                } else if (
                  index < Math.ceil(selectedProduct.reviews) &&
                  selectedProduct.reviews % 1 !== 0
                ) {
                  // Half star
                  return (
                    <FaStarHalfAlt key={index} className="text-yellow-500" />
                  );
                } else {
                  // Empty star
                  return <FaRegStar key={index} className="text-yellow-500" />;
                }
              })}
            </div>

            <p className="text-lg font-semibold mb-2">
              Availability: {selectedProduct.availability}
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
