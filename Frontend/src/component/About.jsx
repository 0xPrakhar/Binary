import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Visual Element */}
        <div className="flex-1 relative">
          <div className="w-full h-96 bg-linear-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center p-12 border border-blue-100">
            {/* Minimalist AI Static Placeholder */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-dashed border-blue-400 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-600 rounded-2xl shadow-2xl shadow-blue-400 rotate-12 flex items-center justify-center text-white font-bold text-2xl">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Our Mission
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Redefining Integrity in <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Digital Assessments
            </span>
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            We believe that online exams should be as secure and credible as physical ones. 
            Our platform leverages state-of-the-art AI Security to create a cheat-proof 
            environment for institutions worldwide.
          </p>
          
          <ul className="space-y-4">
            {['Zero-bias AI monitoring', 'End-to-end encrypted data', '99.9% uptime for massive scales'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          
          <button className="mt-10 px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;