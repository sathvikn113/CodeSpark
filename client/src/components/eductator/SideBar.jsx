import React from 'react';
import { Home, Plus, BookOpen, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// ✅ Rename the single nav item component to avoid conflict
const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-r-full cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-blue-100 border-r-4 border-blue-500 text-black' : 'hover:bg-gray-100'
      }`
    }
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-white border-r flex flex-col pt-6 shadow-sm">
      <SidebarLink to="/educator" icon={Home} label="Dashboard" />
      <SidebarLink to="/educator/add-course" icon={Plus} label="Add Course" />
      <SidebarLink to="/educator/my-courses" icon={BookOpen} label="My Courses" />
      <SidebarLink to="/educator/students" icon={Users} label="Student Enrolled" />
    </div>
  );
};

export default Sidebar;
