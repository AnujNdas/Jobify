import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation library
import { FaBuilding, FaUserTie } from "react-icons/fa";

// Animation variants
const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputVariants = {
    focus: { scale: 1.05, borderColor: "#9333ea", transition: { duration: 0.3 } },
    blur: { scale: 1, borderColor: "#e5e7eb" }
};

// Company Login Page
export const CompanyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Company Login Successful');
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
            {/* Back Button */}
            <motion.button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-white text-purple-500 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-md"
                whileHover={{ scale: 1.1 }}
            >
                Back
            </motion.button>

            {/* Login Form */}
            <motion.form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-2xl shadow-2xl text-black w-96"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-purple-700">
                    <FaBuilding /> Company Login
                </h2>

                {/* Email Input */}
                <motion.input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    whileFocus={inputVariants.focus}
                    whileBlur={inputVariants.blur}
                />

                {/* Password Input */}
                <motion.input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    whileFocus={inputVariants.focus}
                    whileBlur={inputVariants.blur}
                />

                {/* Login Button */}
                <motion.button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Login
                </motion.button>

                {/* Signup Link */}
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <span
                        className="text-purple-400 cursor-pointer hover:underline"
                        onClick={() => navigate('/company-signup')}
                    >
                        Sign up
                    </span>
                </p>
            </motion.form>
        </div>
    );
};

// Individual Login Page
export const IndividualLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Individual Login Successful');
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
            {/* Back Button */}
            <motion.button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-white text-purple-500 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-md"
                whileHover={{ scale: 1.1 }}
            >
                Back
            </motion.button>

            {/* Login Form */}
            <motion.form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-2xl shadow-2xl text-black w-96"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-purple-700">
                    <FaUserTie /> Individual Login
                </h2>

                {/* Username Input */}
                <motion.input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    whileFocus={inputVariants.focus}
                    whileBlur={inputVariants.blur}
                />

                {/* Password Input */}
                <motion.input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    whileFocus={inputVariants.focus}
                    whileBlur={inputVariants.blur}
                />

                {/* Login Button */}
                <motion.button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Login
                </motion.button>

                {/* Signup Link */}
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <span
                        className="text-purple-400 cursor-pointer hover:underline"
                        onClick={() => navigate('/individual-signup')}
                    >
                        Sign up
                    </span>
                </p>
            </motion.form>
        </div>
    );
};
