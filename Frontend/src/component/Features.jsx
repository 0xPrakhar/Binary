import React from 'react';
import { ShieldCheck, Cpu, Eye, Lock, Zap, BarChart } from 'lucide-react';

const features = [
  {
    title: "AI Live Proctoring",
    desc: "Real-time behavior analysis using AI to detect suspicious movements and eye-tracking.",
    icon: <Eye className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Facial Recognition",
    desc: "Biometric authentication to ensure the right candidate is taking the exam.",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Safe Exam Browser",
    desc: "Prevents tab switching, screen recording, and unauthorized external applications.",
    icon: <Lock className="w-8 h-8 text-red-600" />,
  },
  {
    title: "Smart Auto-Grading",
    desc: "Instant and unbiased results powered by advanced NLP and machine learning.",
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Dynamic Question Banks",
    desc: "AI-generated unique question sets to prevent mass cheating patterns.",
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
  },
  {
    title: "Advanced Analytics",
    desc: "Deep insights into student performance and difficulty level mapping.",
    icon: <BarChart className="w-8 h-8 text-indigo-600" />,
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Cutting-Edge Features</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Experience the next generation of academic integrity with our AI-driven security ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 ease-in-out cursor-default hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;