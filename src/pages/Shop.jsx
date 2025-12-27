// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import products from "../Data/Data";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [rangeValue, setRangeValue] = useState(2000);
  const [applyRange, setApplyRange] = useState(2000);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
    window.scrollTo(0, 0);
  }, [rangeValue, search, currentPage]);

  const filteredProducts = products
    .filter((p) => p.price <= applyRange)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const resetFilters = () => {
    setRangeValue(2000);
    setApplyRange(2000);
    setSearch("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-10 mt-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* FILTER LEFT */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>
          <div className="mb-8">
            <p className="font-medium text-gray-700 mb-1">Search</p>
            <input
              placeholder="Search plants..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border rounded-lg outline-none"
            />
          </div>
          <div className="mb-8">
            <p className="font-medium text-gray-700">
              Price Range: 0 – {rangeValue}
            </p>
            <input
              type="range"
              min="0"
              max="2000"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className="w-full slider bg-[#38604f]"
            />
          </div>
          <button
            onClick={resetFilters}
            className="w-full text-white font-medium py-2 rounded-lg bg-[#38604f]"
          >
            Reset
          </button>
        </div>

        {/* PRODUCT LIST */}
        <div className="md:col-span-3">
          <p className="text-gray-600 mb-6">
            Showing {currentProducts.length} / {filteredProducts.length} plants
          </p>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-emerald-700 rounded-full animate-spin"></div>
            </div>
          ) : currentProducts.length === 0 ? (
            <p className="text-center text-xl mt-14 text-gray-500">
              No plants found 🌿
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    currentPage === i + 1
                      ? "bg-[#38604f] text-white border-b-emerald-700"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
