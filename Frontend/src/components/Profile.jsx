import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaUser, FaCog, FaSignOutAlt, FaBuilding, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProfileIcon = () => {
    const {isDarkMode} = useTheme();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

    const handleToggle = () => setIsOpen(!isOpen);
    const handleLogin = (type) => alert(`${type} Login Clicked`); // Mock login handler
    const handleLogout = () => setIsLoggedIn(false); // Mock logout handler

    return (
        <div className="relative">
            {/* Profile Icon */}
            <div
                className="cursor-pointer text-4xl text-purple-500"
                onClick={handleToggle}
            >
                <FaUserCircle />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                className={`absolute right-0 mt-2 w-48 ${isDarkMode ? "bg-darkCard" : "bg-white"} shadow-lg rounded-lg p-3`}
                >
                    <ul className="space-y-2">
                        <li className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                            <FaUser /> View Profile
                        </li>
                        {!isLoggedIn && (
                            <>
                                <li className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}  onClick={() => navigate('/company-login')} >
                                    <FaBuilding /> Company Login
                                </li>
                                <li className={`flex items-center gap-2 p-2 cursor-pointer rounded-md ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`} onClick={() => navigate('/individual-login')}>
                                    <FaUserTie /> Individual Login
                                </li>
                            </>
                        )}
                        {isLoggedIn && (
                            <li className="flex items-center gap-2 p-2 cursor-pointer text-red-500 hover:bg-gray-100" onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </li>
                        )}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default ProfileIcon;
