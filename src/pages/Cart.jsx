// Cart.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdTrash } from "react-icons/io";
import { removeFromCart, addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const increaseQty = (item) => {
    dispatch(addToCart({ ...item, qty: item.qty + 1 }));
  };

  const decreaseQty = (item) => {
    if (item.qty > 1) {
      dispatch(addToCart({ ...item, qty: item.qty - 1 }));
    }
  };

  const removeItem = (id, name) => {
    dispatch(removeFromCart({ id }));
    toast.error(`${name} removed from cart ❌`);
  };

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-white px-2 sm:px-10 py-10">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800 text-center mt-20">
        Your Cart{" "}
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {cartData.length === 0 ? (
            <p className="text-center text-3xl text-gray-500">
              Your cart is empty!
            </p>
          ) : (
            cartData.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-100 rounded-xl p-4 shadow-sm items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="font-semibold text-gray-700 text-sm mt-1">
                    ₹{item.price.toLocaleString("en-IN")}/-
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      className="px-2 border rounded-md text-lg"
                      onClick={() => decreaseQty(item)}
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg">{item.qty}</span>
                    <button
                      className="px-2 border rounded-md text-lg"
                      onClick={() => increaseQty(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-700 text-2xl ml-4"
                  onClick={() => removeItem(item.id, item.name)}
                >
                  <IoMdTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* ORDER SUMMARY */}
        {cartData.length > 0 && (
          <div className="bg-gray-100 shadow-md rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between my-4 text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">
                ₹{subtotal.toLocaleString("en-IN")}/-
              </span>
            </div>

            <div className="flex justify-between my-4 text-gray-700">
              <span>Delivery Charge</span>
              <span className="font-semibold">FREE</span>
            </div>

            <div className="flex justify-between border-t pt-4 mt-4 text-gray-900 font-semibold text-xl">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString("en-IN")}/-</span>
            </div>

            <button className="w-full bg-[#38604f] mt-6 text-white py-3 rounded-lg text-lg hover:bg-[#315646]">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
