import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaClipboardList, FaComments, FaCog, FaMoon, FaSun, FaPlusCircle , FaBookmark } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Assuming you are using Context API

export default function Sidebar() {
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isCompanyAccount = true; // Replace this with actual account check logic
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Job Board", path: "/jobs", icon: <FaClipboardList /> },
    { name: "Messenger", path: "/messages", icon: <FaComments /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> }
  ];

  return (
    <div
      className={`min-h-screen p-4 transition-all duration-300 
        ${isCollapsed ? "w-20" : "w-64"} 
        ${isDarkMode ? "bg-darkCard text-darkText" : "bg-gray-100 text-black"}`}
    >
      <button
        className={`p-2 rounded-lg mb-4 w-full ${isDarkMode ? "bg-gray-700 text-white" : "bg-purple-500 text-white"}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "➔" : "←"}
      </button>

      <h2 className={`text-xl font-bold mb-6 ${isCollapsed && "hidden"} pl-20 font-sans`}>JoBify </h2>
      <span className={`${isCollapsed ? "opacity-1" : "opacity-0"} p-5 font-mono font-extrabold`}>J</span>
      <ul className="space-y-3 mt-5">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer ${
              isCollapsed ? "justify-center" : ""
            } ${
              location.pathname === item.path
                ? "bg-purple-500 text-white"
                : isDarkMode
                ? "hover:bg-gray-700"
                : "hover:bg-gray-200"
            }`}
          >
            <Link to={item.path} className="flex items-center gap-2">
              {item.icon}
              {!isCollapsed && item.name}
            </Link>
          </li>
        ))}
      </ul>
              {/* Quick Actions Panel */}
              <div className={`mt-10 ${isCollapsed ? "p-0" : "p-4"} rounded-lg ${isDarkMode ? "bg-darkBg" : "bg-gray-200"}`}>
          <h3 className={`text-lg font-bold mb-3 ${isCollapsed ? "hidden" : ""}`}>Quick Actions</h3>
          <ul className={`space-y-3 ${isCollapsed ? "text-center" : ""}`}>
            {isCompanyAccount && (
              <Link to="/post-job" className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer bg-green-500 text-white ${isCollapsed ? "justify-center" : ""}`}>
                <FaPlusCircle /> {!isCollapsed && "Post a Job"}
              </Link>
            )}
            <Link to="/save-listings" className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer bg-blue-500 text-white ${isCollapsed ? "justify-center" : ""}`}>
              <FaBookmark /> {!isCollapsed && "Save Listings"}
            </Link>
          </ul>
        </div>

      {/* Dark Mode Toggle */}
      <div className={`mt-10 p-4 rounded-lg ${isDarkMode ? "bg-darkBg" : "bg-gray-200"}`}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-full p-0 rounded-lg flex items-center gap-2"
        >
          {isCollapsed ? (isDarkMode ? <FaSun /> : <FaMoon />) : (isDarkMode ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>)}
        </button>
      </div>
    </div>
  );
}
