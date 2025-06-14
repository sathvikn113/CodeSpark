import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Menu } from 'lucide-react';

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
      {/* Left: Brand Name */}
      <div className="text-2xl font-bold text-green-700 border-2 border-black px-4 py-1 rounded-full cursor-pointer">
        CodeSpark
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 text-gray-600">
        <Link to="/educator">
          <button className="hidden sm:block text-sm font-medium text-green-700 hover:text-green-900 transition">
            Become Educator |
          </button>
        </Link>

        <Link to="/my-enrollments" className="hidden sm:block hover:text-green-700 transition">
          My Enrollments
        </Link>

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <button
              onClick={() => openSignIn()}
              className="hidden sm:inline bg-black text-white px-5 py-2 rounded-full"
            >
              Create Account
            </button>
            <button
              onClick={() => openSignIn()}
              className="sm:hidden bg-black text-white p-2 rounded-full"
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

