import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Yahan console log testing ke liye hai
    console.log("Login Attempt:", { email, password });
    
    // Direct UserHome par redirect
    navigate("/userhome");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 pt-20">
      <div className="max-w-md w-full bg-white p-10 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100">
        
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Login</h2>
          <p className="text-slate-500 mt-2 text-sm">Access your student portal to start exams.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
              Email Address
            </label>
            <input 
              type="email" 
              required
              className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
              placeholder="student@examly.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
              Password
            </label>
            <input 
              type="password" 
              required
              className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 active:scale-[0.98] transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Don't have an account? <a href="/register" className="text-blue-600 font-bold hover:underline">Register Now</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;