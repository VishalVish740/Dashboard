import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from '../Master/NavigationBar';

const MasterHeader = () => {
  return (
    <header className="mb-6 bg-white/10 backdrop-blur-2xl rounded-xl p-4 shadow-xl border border-white/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-slow" />
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-text-glow">
          Retail App
        </h1>
        <div className="flex items-center space-x-4 mt-3 sm:mt-0">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-10 pr-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-white placeholder-gray-400 transition-all duration-500 shadow-md hover:shadow-lg hover:bg-white/10 text-sm"
            />
            <svg
              className="w-5 h-5 text-indigo-300 absolute left-3 top-1/2 transform -translate-y-1/2 animate-pulse-slow"
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
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 text-sm"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

const MasterCard = ({ id, title, value, onCardClick }) => {
  return (
    <div
      className="relative bg-gradient-to-br from-gray-900/90 to-indigo-950/90 backdrop-blur-xl rounded-lg shadow-xl p-4 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 border border-indigo-500/30 overflow-hidden group w-full max-w-[250px] cursor-pointer"
      onClick={() => onCardClick(title)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-slow" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-md font-semibold text-white tracking-wide group-hover:text-indigo-200 transition-colors duration-300 drop-shadow-md">
            {title}
          </h2>
          <button
            className="px-2 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium rounded-full shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View
          </button>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-gray-300 text-xs uppercase tracking-wider font-medium drop-shadow-sm">
              Value
            </p>
            <p className="text-xl font-extrabold text-indigo-300 group-hover:text-white transition-colors duration-300 animate-number-glow">
              {value}
            </p>
          </div>
          <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden shadow-inner group-hover:shadow-[0_0_8px_rgba(99,102,241,0.3)]">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 animate-progress-glow"
              style={{ width: `${Math.min(id * 10, 100)}%` }}
            />
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300 drop-shadow-sm">
            Updated: <span className="text-indigo-300 font-semibold">Mar 23, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionPage = ({ masterData, setMasterData, setLoading }) => {
  const navigate = useNavigate();

  const masterRecords = [
    { id: 1, title: "Sales Invoice", value: "1,245" },
    { id: 2, title: "Purchase Invoice", value: "543" },
    { id: 3, title: "Sales Return", value: "87" },
    { id: 4, title: "Purchase Return", value: "234" },
    { id: 5, title: "Credit Note", value: "3,890" },
    { id: 6, title: "Debit Note", value: "987" },
    { id: 7, title: "Receipt Voucher", value: "156" },
    { id: 8, title: "Payment Voucher", value: "2,345" },
    { id: 9, title: "Contra Entry", value: "78" },
    { id: 10, title: "Journal Entry", value: "45" },
  ];

  const handleCardClick = (title) => {
    if (title === "Sales Invoice") {
      navigate('/salesinvoice');
    } else if (title === "Category") {
      navigate('/master/category');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-indigo-400/10 rounded-full absolute -top-48 -left-48 animate-pulse-slow blur-3xl" />
        <div className="w-72 h-72 bg-purple-400/10 rounded-full absolute -bottom-36 -right-36 animate-pulse-slow blur-3xl" />
      </div>

      <main className="flex-grow z-10 relative py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1500px] mx-auto">
          <MasterHeader />
          <NavigationBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
            {masterRecords.map((record) => (
              <MasterCard
                key={record.id}
                id={record.id}
                title={record.title}
                value={record.value}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full text-center text-lg text-gray-500 dark:text-gray-400 py-4 z-10 relative"> 
        © {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
};

export default TransactionPage;