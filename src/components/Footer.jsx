import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#36614d] text-gray-200">
      <div
        className="max-w-7xl mx-auto px-6 py-12 grid gap-10 
        sm:grid-cols-2 md:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold">Botanical</h2>
          <p className="mt-2 text-sm text-gray-300">
            Where nature meets elegance.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            © 2025 Botanical. All Rights Reserved.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-lg font-medium mb-4">Menu</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white cursor-pointer">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-medium mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-medium mb-4">Social</h4>
          <div className="flex gap-4 text-xl">
            <a className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="hover:text-white transition">
              <FaXTwitter />
            </a>
            <a className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
