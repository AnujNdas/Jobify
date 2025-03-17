import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaUserTie } from "react-icons/fa";

// Company Signup Page
export const CompanySignup = () => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        alert('Company Signup Successful');
        navigate('/company-login');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-white text-purple-500 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-md"
            >
                Back
            </button>
            <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-2xl text-black w-96">
                <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaBuilding /> Company Signup
                </h2>
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-bold"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

// Individual Signup Page
export const IndividualSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        alert('Individual Signup Successful');
        navigate('/individual-login');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-white text-purple-500 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-md"
            >
                Back
            </button>
            <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-2xl text-black w-96">
                <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                    <FaUserTie /> Individual Signup
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border mb-4 rounded-lg focus:ring-2 focus:ring-purple-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-bold"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};
