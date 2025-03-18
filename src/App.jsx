import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 ml-0 md:ml-64">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<div><h1 className="text-3xl font-bold">Welcome to MyApp</h1><p className="mt-4">Your content goes here...</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
