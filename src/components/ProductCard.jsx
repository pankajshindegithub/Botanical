import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image, description }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // 🔥 prevents navigation when clicking Add
    e.preventDefault();

    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      dispatch(addToCart({ ...existingItem, qty: existingItem.qty + 1 }));
    } else {
      dispatch(addToCart({ id, name, price, image, description, qty: 1 }));
    }

    toast.success(`${name} added to cart`);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white border rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain mb-4 rounded-md hover:scale-105 transition"
      />

      <div className="flex-1">
        <h1 className="font-semibold text-gray-800 mb-1 hover:text-[#38604f] transition">
          {name}
        </h1>

        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-500 font-semibold">
          ₹{price.toLocaleString("en-IN")}
        </p>

        <button
          onClick={handleAddToCart}
          className="bg-[#38604f] text-white px-3 py-1 text-sm font-medium rounded-md"
        >
          Add
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
