import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // --- RANDOM DATA LOGIC (Testing ke liye) ---
  // Agar state nahi hai, toh ye random data use karega
  const displayData = state || {
    score: Math.floor(Math.random() * 8) + 2, // 2 se 10 ke beech random score
    total: 10,
    attempted: 10
  };

  // Percentage aur Accuracy calculation (displayData use karke)
  const percentage = Math.round((displayData.score / displayData.total) * 100);
  const accuracy = displayData.attempted > 0 
    ? ((displayData.score / displayData.attempted) * 100).toFixed(1) 
    : 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* HEADER WITH EXIT TO USERHOME */}
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
        <h2 className="text-xl font-black text-slate-800 tracking-tight">
          Examly <span className="text-blue-600">Results</span>
        </h2>
        <button 
          onClick={() => navigate('/userhome')} 
          className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95"
        >
          Exit to Dashboard
        </button>
      </header>

      <main className="grow flex flex-col lg:flex-row p-6 gap-8 max-w-7xl mx-auto w-full">
        
        {/* MAIN SCORE SECTION */}
        <div className="grow bg-white rounded-[48px] shadow-xl shadow-slate-200/50 border border-slate-100 p-12 flex flex-col items-center justify-center text-center">
          
          {/* Progress Circle Visual */}
          <div className="relative w-44 h-44 mb-8">
             <div className="w-44 h-44 rounded-full border-14 border-slate-50 flex items-center justify-center">
                <span className="text-5xl font-black text-slate-900">{percentage}%</span>
             </div>
             {/* Ye border visual dikhayega kitna percent hua */}
             <div className="absolute top-0 left-0 w-44 h-44 rounded-full border-14 border-blue-600 border-t-transparent border-r-transparent -rotate-45"></div>
          </div>

          <h1 className="text-4xl font-black text-slate-900 mb-2">
            {percentage >= 40 ? "Great Effort! 🎉" : "Keep Practicing! 💪"}
          </h1>
          <p className="text-slate-400 font-bold">You scored {displayData.score} marks out of {displayData.total}</p>
          
          {!state && (
            <div className="mt-4 px-4 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
              Showing Preview Data
            </div>
          )}

          <button 
            onClick={() => navigate('/userhome')}
            className="mt-12 bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
          >
            Return to UserHome
          </button>
        </div>

        {/* SIDEBAR SUMMARY */}
        <div className="w-full lg:w-96 flex flex-col gap-6">
          <div className="bg-white rounded-[40px] shadow-lg border border-slate-100 p-8">
            <h4 className="text-xs font-black text-slate-400 mb-6 uppercase tracking-widest">Analytics</h4>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center p-4 bg-green-50 rounded-2xl border border-green-100">
                  <span className="text-sm font-black text-green-700 tracking-wider">CORRECT</span>
                  <span className="text-xl font-black text-green-700">{displayData.score}</span>
               </div>

               <div className="flex justify-between items-center p-4 bg-red-50 rounded-2xl border border-red-100">
                  <span className="text-sm font-black text-red-700 tracking-wider">INCORRECT</span>
                  <span className="text-xl font-black text-red-700">{displayData.total - displayData.score}</span>
               </div>

               <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-sm font-black text-slate-500 tracking-wider">ACCURACY</span>
                  <span className="text-xl font-black text-slate-800">{accuracy}%</span>
               </div>
            </div>

            <button 
              onClick={() => navigate('/userhome')}
              className="w-full mt-10 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-all active:scale-95"
            >
              Dashboard Home
            </button>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">Verified Result</p>
               <h5 className="text-lg font-bold mt-2 leading-tight">Your performance has been recorded.</h5>
             </div>
             {/* Background Decoration */}
             <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Result;