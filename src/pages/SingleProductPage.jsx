// src/pages/SingleProductPage.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../Data/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = products.find((item) => String(item.id) === String(id));

  // product not found page
  if (!product) {
    return (
      <div className="min-h-scflex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Product Not Found
        </h1>
        <p className="text-gray-500 mb-5 max-w-md text-sm">
          The product you're looking for may be unavailable.
        </p>

        <Link
          to="/shop"
          className="bg-[#38604f] hover:bg-[#2f5244] text-white px-5 py-2 rounded-md text-sm"
        >
          Back To Shop
        </Link>
      </div>
    );
  }

  const { name, price, description, image } = product;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name,
        price,
        image,
        description,
        qty: 1,
      })
    );
    toast.success(`${name} added to cart`);
  };

  return (
    <section className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto mt-20">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-white font-medium rounded-md  px-4 py-1 bg-[#38604f] flex items-center gap-1 mb-6 text-sm cursor-pointer"
        >
          Back
        </button>

        {/* PRODUCT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md">
          {/* IMAGE SECTION */}
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={name}
              className="w-full max-h-[350px] object-contain rounded-lg"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              {name}
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
              {description}
            </p>

            <p className="text-2xl font-bold text-gray-900 mb-4">
              ₹{Number(price).toLocaleString("en-IN")}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-[#38604f] hover:bg-[#2f5244] 
             text-white px-4 py-2 text-sm 
             rounded-md font-medium transition 
             w-fit cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
