import { Card, CardContent } from "@/components/ui/card";
import {
  FaBriefcase,
  FaUser,
  FaEnvelope,
  FaChartLine,
  FaUserCircle,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext"; // Ensure dark mode applies correctly

export default function Landing() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "bg-darkBg text-darkText" : "bg-white text-black"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <div className="flex items-center space-x-4">
          <div
            className={`flex items-center ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } p-2 rounded-lg`}
          >
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full"
            />
          </div>
          <FaBell className="text-3xl text-purple-500 cursor-pointer" />
          <FaUserCircle className="text-4xl text-purple-500" />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {/* Job Statistics */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="p-4 shadow-xl rounded-2x1 bg-gradient-to-r from-purple-500 to-purple-700 text-white"
          >
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Job Statistics</h2>
              <div className="text-center">
                <FaBriefcase className="text-white text-5xl mx-auto mb-2" />
                <p className="text-xl font-bold">120</p>
                <p className="text-sm">Total Jobs</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Applications */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="p-4 shadow-lg rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 text-white"
          >
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Active Applications</h2>
              <div className="text-center">
                <FaUser className="text-white text-5xl mx-auto mb-2" />
                <p className="text-xl font-bold">45</p>
                <p className="text-sm">Active Applications</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pending Messages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-4 shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Pending Messages</h2>
              <div className="text-center">
                <FaEnvelope className="text-white text-5xl mx-auto mb-2" />
                <p className="text-xl font-bold">12</p>
                <p className="text-sm">Pending Messages</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-4 shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>
              <div className="text-center">
                <FaChartLine className="text-white text-5xl mx-auto mb-2" />
                <p className="text-xl font-bold">Excellent</p>
                <p className="text-sm">Monthly Growth Rate</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
