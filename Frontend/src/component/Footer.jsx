import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Changed to a deep slate-950 for a professional "dark mode" footer
    <footer className="bg-slate-950 text-gray-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white">
              Exam<span className="text-blue-500">ly</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Next-generation AI proctoring and examination infrastructure built for the future of education.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Support</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📧</span> support@examly.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📞</span> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📍</span> Lucknow, India
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                Github
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-500 text-xs">
              © {currentYear} Examly. All rights reserved.
            </p>
            <div className="flex gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;