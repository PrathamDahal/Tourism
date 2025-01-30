import React, { useState } from "react";
import ProductCard from "./ProductDisplay";
import FilterComponent from "./FilterComponent";

const CategoryPage = ({ category, products, onProductClick }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    selectedSubCategories: [],
    minRating: 0,
    selectedTags: [],
  });

  // Get unique subcategories from products
  const subcategories = [
    ...new Set(products.map((product) => product.subcategory)),
  ];

  // Get unique tags from products
  const allTags = [
    ...new Set(products.flatMap((product) => product.tags || [])),
  ];

  const handleFilterApply = () => {
    let filtered = products;

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Filter by subcategories
    if (filters.selectedSubCategories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.selectedSubCategories.includes(product.subcategory)
      );
    }

    // Filter by rating
    filtered = filtered.filter(
      (product) => product.reviews >= filters.minRating
    );

    // Filter by tags
    if (filters.selectedTags.length > 0) {
      filtered = filtered.filter((product) =>
        product.tags?.some((tag) => filters.selectedTags.includes(tag))
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortType) => {
    let sortedProducts = [...filteredProducts];

    if (sortType === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    } else if (sortType === "oldest") {
      sortedProducts.sort(
        (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
      );
    }

    setFilteredProducts(sortedProducts); // Update state
  };

  return (
    <div className="flex gap-4 p-4">
      {/* Filters sidebar */}
      <FilterComponent
        filters={filters}
        setFilters={setFilters}
        handleFilterApply={handleFilterApply}
        subcategories={subcategories}
        allTags={allTags}
      />

      {/* Products grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center p-2">
          <div className="flex p-1 items-center">
            <p className="font-poppins text-[14px] text-gray-500 mr-2">Sort By:</p>
            <select
              className="text-[12px] font-medium font-poppins text-gray-500 p-1 border rounded-sm"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Select</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="Latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <span className="text-xl font-semibold font-poppins mb-2">
            {filteredProducts.length}{" "}
            <span className="text-sm font-light font-poppins">
              {filteredProducts.length === 1 ? "Result" : "Results"} found
            </span>
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleProductClick={onProductClick}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No products match your selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
