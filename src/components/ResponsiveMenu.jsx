import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const ResponsiveMenu = ({ open, setOpen }) => {
  const { user, isSignedIn } = useUser();

  if (!open) return null;

  return (
    <div className="md:hidden fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-50 flex flex-col">
      {/* USER PROFILE HEADER */}
      <div className="flex items-center gap-3 px-6 py-6 border-b">
        {/* SIGNED OUT AVATAR */}
        <SignedOut>
          <div className="w-10 h-10 rounded-full bg-[#8b6b5c] flex items-center justify-center text-white font-semibold uppercase">
            G
          </div>
        </SignedOut>

        {/* SIGNED IN AVATAR (CLERK) */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <div className="flex-1">
          {!isSignedIn ? (
            <>
              <p className="text-sm text-gray-600">Hello Guest</p>
              <p className="text-xs text-gray-500">Please sign in</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600">Hello {user?.firstName}</p>
              <p className="text-xs text-blue-600 font-medium">Premium User</p>
            </>
          )}
        </div>
      </div>

      {/* MENU ITEMS */}
      <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setOpen(false)}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>

        {/* SIGN IN BUTTON */}
        <SignedOut>
          <li>
            <SignInButton mode="modal" asChild>
              <button
                onClick={() => setOpen(false)}
                className=" px-4 py-2 bg-black text-white rounded-lg"
              >
                Sign In
              </button>
            </SignInButton>
          </li>
        </SignedOut>
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
