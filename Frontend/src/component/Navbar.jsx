import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO (CLICKABLE → HOME) */}
        <Link to="/" className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-900">
            Exam<span className="text-blue-600">ly</span>
          </h2>
          <span className="text-xs text-gray-500">
            Smart Exam System
          </span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
        
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/features" className="hover:text-black">Features</Link>
        </div>

        {/* BUTTON */}
        <Link to="/login">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;