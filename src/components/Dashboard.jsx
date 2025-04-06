// Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Header Component
const DashboardHeader = ({ onSearch }) => {
    return (
        <header className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse">
                    Dashboard
                </h1>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full pl-8 sm:pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                        />
                        <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg hover:scale-105 transition-transform duration-300">
                        VV
                    </div>
                </div>
            </div>
        </header>
    );
};

// Card Component
const DashboardCard = ({ type, data }) => {
    const cardStyles = {
        master: 'from-gray-800/90 to-indigo-900/90 border-indigo-500/20',
        transaction: 'from-gray-800/90 to-purple-900/90 border-purple-500/20',
        report: 'from-gray-800/90 to-pink-900/90 border-pink-500/20'
    };

    const buttonStyles = {
        master: 'bg-indigo-700 hover:bg-indigo-800',
        transaction: 'bg-purple-700 hover:bg-purple-800',
        report: 'bg-pink-700 hover:bg-pink-800'
    };

    return (
        <div
            className={`relative bg-gradient-to-br ${cardStyles[type]} backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 transform hover:-translate-y-1 hover:shadow-3xl transition-all duration-500 border overflow-hidden cursor-pointer min-w-0`}
        >
            <div className="absolute inset-0 bg-indigo-600 opacity-10 rounded-2xl animate-pulse" />
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
                        {type.charAt(0).toUpperCase() + type.slice(1)}s
                    </h2>
                    <button
                        className={`px-3 sm:px-4 py-1 sm:py-1.5 ${buttonStyles[type]} text-white text-xs sm:text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                        {type === 'master' ? 'View' : type === 'transaction' ? 'Details' : 'Generate'}
                    </button>
                </div>
                {type === 'master' && (
                    <div className="space-y-4 sm:space-y-5">
                        <div>
                            <p className="text-gray-300 text-xs sm:text-sm">Total Records</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-indigo-300">
                                {data.loading ? 'Loading...' : data.masterData.length.toLocaleString()}
                            </p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full transition-all duration-700"
                                style={{ width: `${Math.min((data.masterData.length / 20) * 100, 100)}%` }}
                            />
                        </div>
                        <div className="text-xs text-gray-400">
                            Last Updated: <span className="text-indigo-300 font-medium">Mar 16, 2025</span>
                        </div>
                    </div>
                )}
                {type === 'transaction' && (
                    <div className="space-y-4 sm:space-y-5">
                        <div>
                            <p className="text-gray-300 text-xs sm:text-sm">Today’s Volume</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-purple-300">$45,890</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full transition-all duration-700"
                                style={{ width: '60%' }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Pending: <span className="text-purple-300 font-medium">12</span></span>
                            <span>Completed: <span className="text-purple-300 font-medium">89</span></span>
                        </div>
                    </div>
                )}
                {type === 'report' && (
                    <div className="space-y-4 sm:space-y-5">
                        <div>
                            <p className="text-gray-300 text-xs sm:text-sm">Active Reports</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-pink-300">7</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-pink-500 to-pink-300 rounded-full transition-all duration-700"
                                style={{ width: '45%' }}
                            />
                        </div>
                        <div className="text-xs text-gray-400">
                            Latest: <span className="text-pink-300 font-medium">Q1 Summary</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// ... (keep the rest of the file the same until the grid section)

const Dashboard = () => {
    const [masterData, setMasterData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          // Example API call
          // const response = await fetch('/api/master-data');
          // const data = await response.json();
          // setMasterData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <DashboardHeader onSearch={(query) => console.log(query)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Link to="/master"> {/* Updated link */}
              <DashboardCard type="master" data={{ masterData, loading }} />
            </Link>
            <Link to="/category">
              <DashboardCard type="transaction" data={{}} />
            </Link>
            <Link to="/category">
              <DashboardCard type="report" data={{}} />
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;
