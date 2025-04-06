import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="bg-gradient-to-r from-indigo-200/90 via-purple-200/90 to-pink-200/90 backdrop-blur-xl border border-indigo-500/40 rounded-2xl shadow-xl hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] transition-all duration-300 my-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-slow" />
            <div className="max-w-[1500px] mx-auto px-4 py-3 flex items-center justify-start space-x-6 relative z-10">
                <Link
                    to="/master/category"
                    className="relative text-gray-900 px-4 py-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-400/50 to-purple-400/50 hover:from-indigo-500/70 hover:to-purple-500/70 hover:text-white transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-[0_0_12px_rgba(99,102,241,0.6)] transform hover:-translate-y-0.5"
                >
                    <span className="relative z-10">Product</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-opacity duration-300" />
                    <div className="absolute inset-0 w-full h-full bg-white/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
                {/* Add other navigation links as needed */}
                <Link
                    to="/master/category"
                    className="relative text-gray-900 px-4 py-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-400/50 to-purple-400/50 hover:from-indigo-500/70 hover:to-purple-500/70 hover:text-white transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-[0_0_12px_rgba(99,102,241,0.6)] transform hover:-translate-y-0.5"
                >
                    <span className="relative z-10">Ledger</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-opacity duration-300" />
                    <div className="absolute inset-0 w-full h-full bg-white/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
            </div>
        </nav>
    );
};

export default NavigationBar;