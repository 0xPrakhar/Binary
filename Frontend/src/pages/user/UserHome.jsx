import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import StudentDashboard from './StudentDashboard';
import Setting from './Setting';
import Result from './Result';
import Profile from './Profile';

const UserHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* SIDEBAR */}
      <aside className={`
        fixed md:static top-0 left-0 h-full w-64 bg-white z-50 
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300
      `}>
        <div className="p-6 flex justify-between items-center">
          <h2
            className="text-xl font-black text-blue-600 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Exam<span className="text-slate-900">ly</span>
          </h2>

          {/* Close button (mobile) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
        </div>

        <nav className="px-4 space-y-2">
          
          <button
            onClick={() => {
              navigate('/userhome/dashboard');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold ${
              currentPath.includes("dashboard")
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => {
              navigate('/userhome/profile');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold ${
              currentPath.includes("profile")
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            👤 Profile
          </button>

          <button
            onClick={() => {
              navigate('/userhome/result');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold ${
              currentPath.includes("result")
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            🏆 Results
          </button>

          <button
            onClick={() => {
              navigate('/userhome/setting');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold ${
              currentPath.includes("setting")
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            ⚙️ Setting
          </button>
        </nav>
      </aside>

      {/* OVERLAY (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* RIGHT SIDE */}
      <div className="grow flex flex-col min-h-screen">

        {/* TOP BAR */}
        <header className="bg-white border-b p-4 flex justify-between items-center">

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg font-bold">Dashboard</h1>

          {/* PROFILE DROPDOWN */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer font-bold"
            >
              AK
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border p-2">
                
                <button
                  onClick={() => {
                    navigate('/userhome/profile');
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
                >
                  👤 Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 text-sm"
                >
                  🚪 Logout
                </button>

              </div>
            )}
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          {currentPath.includes("dashboard") && <StudentDashboard />}
          {currentPath.includes("profile") && <Profile />}
          {currentPath.includes("result") && <Result />}
          {currentPath.includes("setting") && <Setting />}

          {currentPath === "/userhome" && <StudentDashboard />}
        </main>

      </div>
    </div>
  );
};

export default UserHome;