import React from 'react';
import { assets } from '../../assets/assets'; // adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 px-6 md:px-20 lg:px-36">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={assets.logo_dark} alt="CodeSpark Logo" className="h-10" />
          <span className="text-xl font-semibold">CodeSpark</span>
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm mb-4 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} CodeSpark. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
