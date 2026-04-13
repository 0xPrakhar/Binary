import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "dashboard", icon: "📊" },
    { name: "Profile", path: "profile", icon: "👤" },
    { name: "Results", path: "result", icon: "🏆" },
    { name: "Setting", path: "setting", icon: "⚙️" },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-xl font-black text-blue-600">Examly</h2>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        <nav className="px-4 space-y-2">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(`/userhome/${item.path}`);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold ${
                location.pathname.includes(item.path)
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {open && (
        <div
          className="fixed inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;