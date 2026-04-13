import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ setOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">

      {/* Hamburger (works on ALL screens now) */}
      <button onClick={() => setOpen(true)} className="text-2xl">
        ☰
      </button>

      <h1 className="font-bold">Dashboard</h1>

      <div className="relative">
        <div
          onClick={() => setDropdown(!dropdown)}
          className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer"
        >
          AK
        </div>

        {dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border p-2">
            <button
              onClick={() => navigate("/userhome/profile")}
              className="w-full text-left px-3 py-2 hover:bg-slate-100"
            >
              Profile
            </button>

            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;