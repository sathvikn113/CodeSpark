import React from 'react';
import { assets, dummyEducatorData } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md border-b border-gray-300">
      {/* Left: Brand Text Only */}
      <div className="text-2xl font-bold text-green-700 border-2 border-black px-3 py-1 rounded-full">
        CodeSpark
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-6 text-gray-700 text-md font-medium">
        <Link to="/courses" className="hover:text-green-600 transition">Courses</Link>
        <Link to="/about" className="hover:text-green-600 transition">About</Link>
      </div>

      {/* Right: Profile + Educator Button */}
      <div className="flex items-center gap-4">
        <Link to="/educator">
          <button className="hidden sm:block text-sm font-medium text-green-700 hover:text-green-900 transition">
            Become Educator |
          </button>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;

