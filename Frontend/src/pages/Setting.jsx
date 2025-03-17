import { useState } from "react";
import { FaUser, FaLock, FaBell, FaCogs, FaPalette } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Ensure dark mode applies correctly

export default function Settings() {
  const {isDarkMode} = useTheme()
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { name: "Profile", icon: <FaUser />, key: "profile" },
    { name: "Security", icon: <FaLock />, key: "security" },
    { name: "Notifications", icon: <FaBell />, key: "notifications" },
    { name: "Preferences", icon: <FaPalette />, key: "preferences" },
    { name: "System", icon: <FaCogs />, key: "system" },
  ];

  return (
    <div className={`p-6 ${isDarkMode ? "bg-darkBg text-darkText" : "bg-white text-black"} shadow-lg rounded-2xl mx-auto mt-10`}>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search settings..."
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === tab.key
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          > 
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "profile" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Your Name"
            />
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Security Settings</h2>
            <label className="block mb-2">Change Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="New Password"
            />
            <label className="block mb-2">Enable 2-Step Verification:</label>
            <input type="checkbox" className="mr-2" /> Enable
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
            <label className="flex items-center gap-2 mb-4">
              <input type="checkbox" className="mr-2" /> Email Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="mr-2" /> Push Notifications
            </label>
          </div>
        )}

        {activeTab === "preferences" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Preferences</h2>
            <label className="block mb-2">Theme:</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </div>
        )}

        {activeTab === "system" && (
          <div>
            <h2 className="text-xl font-bold mb-4">System Settings</h2>
            <p className="text-sm text-gray-700">Manage system preferences, updates, and more.</p>
          </div>
        )}
      </div>
    </div>
  );
}
