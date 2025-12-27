import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React, { useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // redux cart state
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.length;

  // clerk user
  const { user, isSignedIn } = useUser();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)}>
          <h1 className="text-black font-bold text-lg sm:text-xl">Botanical</h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          {/* CART */}
          <Link to="/cart" className="relative">
            <IoBagHandleSharp className="w-6 h-6 sm:w-7 sm:h-7" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#38604f] w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-white text-xs font-semibold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* AUTH DESKTOP */}
          <div className="hidden md:flex items-center gap-2">
            <SignedOut>
              <SignInButton className="px-3 py-1 bg-black text-white rounded-2xl">
                Sign In
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU COMPONENT */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
