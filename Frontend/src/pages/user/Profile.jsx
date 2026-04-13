import React from 'react';

function Profile() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* PROFILE HEADER CARD */}
      <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50" />
        
        <div className="relative">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-5xl text-white font-black shadow-2xl shadow-blue-200 border-4 border-white">
            AK
          </div>
          <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md border border-slate-100 hover:bg-slate-50 transition-colors">
            📸
          </button>
        </div>

        <div className="text-center md:text-left grow space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Aryan Kumar</h2>
          <p className="text-slate-500 font-bold flex items-center justify-center md:justify-start gap-2">
            <span>🎓</span> B.Tech Computer Science (Final Year)
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <span className="px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-xl border border-green-100">
              Verified Student
            </span>
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-xl border border-blue-100">
              Premium Member
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-auto">
          <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: PERSONAL INFO */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
              <span>📋</span> Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</p>
                <p className="font-bold text-slate-700">aryan.kumar@examly.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</p>
                <p className="font-bold text-slate-700">+91 98765 43210</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Student ID</p>
                <p className="font-bold text-slate-700">EX-2026-BTECH-041</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date of Birth</p>
                <p className="font-bold text-slate-700">15 August 2004</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-50 space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">College / University</p>
              <p className="font-bold text-slate-700">Indian Institute of Technology (IIT), Kanpur</p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
              <span>🎯</span> Exam Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {['SSC CGL', 'UPSC CSE', 'Railway NTPC', 'JEE Advanced', 'Banking PO'].map((interest) => (
                <span key={interest} className="px-5 py-2 bg-slate-50 text-slate-600 font-bold rounded-2xl text-sm border border-slate-100">
                  {interest}
                </span>
              ))}
              <button className="px-5 py-2 bg-blue-50 text-blue-600 font-bold rounded-2xl text-sm border border-blue-100 hover:bg-blue-600 hover:text-white transition-all">
                + Add Interest
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: QUICK STATS & ACTIVITY */}
        <div className="space-y-8">
          <section className="bg-slate-900 p-8 rounded-4xl text-white shadow-xl shadow-slate-200">
            <h3 className="text-sm font-bold opacity-60 uppercase tracking-widest mb-6">Learning Streak</h3>
            <div className="flex items-center gap-4">
              <span className="text-5xl">🔥</span>
              <div>
                <h4 className="text-4xl font-black">12 Days</h4>
                <p className="text-xs opacity-70 mt-1">Don't break your progress!</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-6">Recent Activity</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Attempted SSC Mock Test</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Updated Profile Photo</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Changed Password</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">3 days ago</p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

export default Profile;