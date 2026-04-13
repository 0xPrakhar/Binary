import React from "react";
import { Shield, Lock, Shuffle, Zap } from "lucide-react";
import examImg from "../assets/hero.png";

const features = [
  { title: "AI Monitoring", desc: "Real-time tracking", icon: <Shield className="text-blue-600" size={20}/> },
  { title: "Anti-Cheating", desc: "Detect suspicion", icon: <Lock className="text-red-500" size={20}/> },
  { title: "Randomization", desc: "Fair assessment", icon: <Shuffle className="text-purple-600" size={20}/> },
  { title: "Instant Results", desc: "Fast evaluation", icon: <Zap className="text-yellow-500" size={20}/> },
];

function Hero() {
  return (
    <section className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
              Smart Online <br /> 
              <span className="text-blue-600">Examination</span> System
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the future of academic integrity. Conduct secure and fair exams with our AI-powered monitoring ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all inline-block"
              >
                Get Started
              </a>
              <a
                href="/register"
                className="border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all inline-block"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
            <img 
              src={examImg} 
              alt="exam illustration" 
              className="w-full max-w-125 drop-shadow-2xl" 
            />
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-3 group"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;