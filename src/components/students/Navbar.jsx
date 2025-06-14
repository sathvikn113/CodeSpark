import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Menu } from 'lucide-react';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
 <div
  className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-green-500 py-4 ${
    isCourseListPage ? 'bg-white' : 'bg-green-100/70'
  }`}
>
  {/* Left: Logo */}
  <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

  {/* Right Section */}
  <div className="flex items-center gap-4 text-gray-500">
    <button className="hidden sm:block">Become Educator  |</button>
    <Link to="/my-enrollments" className="hidden sm:block">
      My Enrollments
    </Link>

    {/* Auth buttons */}
    {isSignedIn ? (
      <UserButton afterSignOutUrl="/" />
    ) : (
      <>
        <button
          onClick={() => openSignIn()}
          className="hidden sm:inline bg-gray-600 text-white px-5 py-2 rounded-full"
        >
          Create Account
        </button>
        {/* Phone screen icon */}
        <button
          onClick={() => openSignIn()}
          className="sm:hidden bg-gray-600 text-white p-2 rounded-full"
          title="Sign In"
        >
          <Menu size={20} />
        </button>
      </>
    )}
  </div>
</div>

  );
};

export default Navbar;
