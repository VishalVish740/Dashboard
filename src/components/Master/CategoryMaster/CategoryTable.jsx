import React, { useState } from 'react';

const CategoryTable = ({ data, onClose, onRowSelect, selectedRow, onAdd, onEdit, onDelete }) => {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    abvr: '',
    status: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
  };

  const filteredData = data.filter((record) => {
    return (
      (filters.id === '' || String(record.id).includes(filters.id)) &&
      (filters.name === '' || record.name.toLowerCase().includes(filters.name)) &&
      (filters.abvr === '' || record.abvr.toLowerCase().includes(filters.abvr)) &&
      (filters.status === '' || record.status.toLowerCase().includes(filters.status))
    );
  });

  return (
    <div className="bg-gradient-to-br from-gray-900/95 to-indigo-950/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-indigo-600/30 transform transition-all duration-500 hover:shadow-indigo-500/20">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3 sm:mb-0">
          Master Data Details
        </h3>
        <div className="flex space-x-2 sm:space-x-3">
          <div
            className="p-2 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-full shadow-lg hover:shadow-indigo-500/50 hover:from-indigo-700 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={onAdd}
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div
            className={`p-2 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full shadow-lg hover:shadow-purple-500/50 hover:from-purple-700 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 cursor-pointer ${!selectedRow ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={selectedRow ? onEdit : null}
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div
            className={`p-2 bg-gradient-to-br from-red-600 to-red-400 rounded-full shadow-lg hover:shadow-red-500/50 hover:from-red-700 hover:to-red-500 transform hover:scale-105 transition-all duration-300 cursor-pointer ${!selectedRow ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={selectedRow ? onDelete : null}
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div
            className="p-2 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full shadow-lg hover:shadow-gray-500/50 hover:from-gray-700 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={onClose}
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-inner bg-gray-800/50">
        <table className="w-full text-left text-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-900/70 to-purple-900/70">
              <th className="p-2 sm:p-3 md:p-4">
                <div className="text-xs sm:text-sm font-semibold text-indigo-100">ID</div>
                <div className="relative mt-1 sm:mt-2">
                  <input
                    type="text"
                    name="id"
                    value={filters.id}
                    onChange={handleFilterChange}
                    placeholder="Search ID"
                    className="w-full py-1 sm:py-1.5 pl-6 sm:pl-8 pr-2 sm:pr-3 text-xs text-gray-100 bg-gradient-to-br from-indigo-600/30 to-gray-700/30 border border-indigo-500/30 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-indigo-700/40 transition-all duration-300 placeholder-indigo-200/70"
                  />
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-300 absolute left-2 sm:left-2.5 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </th>
              <th className="p-2 sm:p-3 md:p-4">
                <div className="text-xs sm:text-sm font-semibold text-indigo-100">Name</div>
                <div className="relative mt-1 sm:mt-2">
                  <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    placeholder="Search Name"
                    className="w-full py-1 sm:py-1.5 pl-6 sm:pl-8 pr-2 sm:pr-3 text-xs text-gray-100 bg-gradient-to-br from-indigo-600/30 to-gray-700/30 border border-indigo-500/30 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-indigo-700/40 transition-all duration-300 placeholder-indigo-200/70"
                  />
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-300 absolute left-2 sm:left-2.5 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </th>
              <th className="p-2 sm:p-3 md:p-4">
                <div className="text-xs sm:text-sm font-semibold text-indigo-100">Abvr</div>
                <div className="relative mt-1 sm:mt-2">
                  <input
                    type="text"
                    name="abvr"
                    value={filters.abvr}
                    onChange={handleFilterChange}
                    placeholder="Search Abvr"
                    className="w-full py-1 sm:py-1.5 pl-6 sm:pl-8 pr-2 sm:pr-3 text-xs text-gray-100 bg-gradient-to-br from-indigo-600/30 to-gray-700/30 border border-indigo-500/30 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-indigo-700/40 transition-all duration-300 placeholder-indigo-200/70"
                  />
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-300 absolute left-2 sm:left-2.5 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </th>
              <th className="p-2 sm:p-3 md:p-4">
                <div className="text-xs sm:text-sm font-semibold text-indigo-100">Status</div>
                <div className="relative mt-1 sm:mt-2">
                  <input
                    type="text"
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    placeholder="Search Status"
                    className="w-full py-1 sm:py-1.5 pl-6 sm:pl-8 pr-2 sm:pr-3 text-xs text-gray-100 bg-gradient-to-br from-indigo-600/30 to-gray-700/30 border border-indigo-500/30 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-indigo-700/40 transition-all duration-300 placeholder-indigo-200/70"
                  />
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-300 absolute left-2 sm:left-2.5 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record) => (
                <tr
                  key={record.id}
                  className={`border-b border-indigo-600/20 hover:bg-indigo-800/40 transition-all duration-300 cursor-pointer ${selectedRow && selectedRow.id === record.id ? 'bg-indigo-700/60' : ''}`}
                  onClick={() => onRowSelect(record)}
                >
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm font-medium text-gray-100">{record.id}</td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm font-medium text-gray-100">{record.name}</td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm font-medium text-gray-100">{record.abvr}</td>
                  <td className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${record.status === 'Active'
                        ? 'bg-green-600/30 text-green-300'
                        : record.status === 'Inactive'
                          ? 'bg-red-600/30 text-red-300'
                          : 'bg-yellow-600/30 text-yellow-300'
                        }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-indigo-300/70 text-xs sm:text-sm">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default CategoryTable;