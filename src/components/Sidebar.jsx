import React, { useState } from 'react';
import {
  HiMenu,
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineSwitchHorizontal,
  HiOutlineChartBar,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = ({ setIsSidebarCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start collapsed

  const menuItems = [
    { name: 'Dashboard', icon: HiOutlineHome, color: 'from-violet-600 to-purple-600', path: '/dashboard' },
    { name: 'Master', icon: HiOutlineCog, color: 'from-blue-600 to-cyan-600' },
    { name: 'Transaction', icon: HiOutlineSwitchHorizontal, color: 'from-emerald-600 to-teal-600' },
    { name: 'Report', icon: HiOutlineChartBar, color: 'from-rose-600 to-pink-600' },
  ];

  // Handle sidebar collapse
  const handleCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-gray-900/95 text-white transition-all duration-300 ease-in-out shadow-lg border-r border-gray-800/20
          backdrop-blur-2xl ${isCollapsed ? 'w-16' : 'w-60'} 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:min-h-screen z-50 fixed top-0 left-0 h-full`}
        onMouseEnter={() => handleCollapse(false)}
        onMouseLeave={() => handleCollapse(true)}
      >
        {/* Logo Section */}
        <div className="relative flex items-center justify-between p-3 border-b border-gray-800/40">
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'space-x-2'}`}>
            <div className="relative w-8 h-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-indigo-700 rounded-md 
                transform group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] 
                transition-all duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white 
                drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">M</span>
            </div>
            {!isCollapsed && (
              <span className="text-lg font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 
                bg-clip-text text-transparent animate-gradient-x tracking-tight">
                MyApp
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-md hover:bg-gray-800/80 focus:outline-none 
              focus:ring-1 focus:ring-violet-500/40 transition-all duration-200"
          >
            <HiMenu size={20} className="text-gray-300 hover:text-white" />
          </button>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-600/60 to-transparent 
            animate-pulse" />
        </div>

        {/* Menu Items */}
        <nav className="mt-5 px-1.5 space-y-1.5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path || '/dashboard'}
              className="relative flex items-center py-2.5 px-2 rounded-md text-gray-200 
                hover:bg-gray-800/90 group transition-all duration-300 overflow-hidden shadow-sm"
            >
              <div className="relative z-10 flex items-center w-full">
                <item.icon className="w-5 h-5 min-w-[20px] group-hover:scale-105 transition-transform duration-300 
                  text-gray-300 group-hover:text-white" />
                {!isCollapsed && (
                  <span className="ml-2.5 text-xs font-medium tracking-wide flex-1 truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                    {item.name}
                  </span>
                )}
              </div>
              {!isCollapsed && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 
                  group-hover:opacity-15 transition-opacity duration-300 -z-10 rounded-md`} />
              )}
              <div className={`absolute left-0 inset-y-0 w-0.5 bg-gradient-to-b ${item.color} 
                transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300`} />
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-3 border-t border-gray-800/40">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'}`}>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 
              flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              U
            </div>
            {!isCollapsed && (
              <div className="text-[10px] text-gray-400 leading-tight">
                <p className="font-medium text-gray-300 truncate max-w-[160px]">User Name</p>
                <p>v1.0.0 • 2023</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-950/85 z-40 md:hidden backdrop-blur-sm 
            transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700 
            animate-gradient-x" />
        </div>
      )}
    </>
  );
};

export default Sidebar;
