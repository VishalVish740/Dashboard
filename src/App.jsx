import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Master from './components/Master/Master';
import Category from './components/Master/CategoryMaster/Category';
import CrudForm from './components/GlobalFunction/CrudForm';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [masterData, setMasterData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar setIsSidebarCollapsed={setIsSidebarCollapsed} />
        <main
          className={`flex-1 p-6 overflow-y-auto ${isSidebarCollapsed ? 'ml-16' : 'ml-60'}`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/master"
              element={<Master masterData={masterData} setMasterData={setMasterData} setLoading={setLoading} />}
            />
            <Route
              path="/master/category"
              element={<Category isVisible={true} masterData={masterData} setMasterData={setMasterData} setLoading={setLoading} />}
            />
            <Route
              path="/crud"
              element={<CrudForm />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;