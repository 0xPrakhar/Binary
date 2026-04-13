import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Exam = () => {
  const navigate = useNavigate();

  // --- STATES ---
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 Minutes
  const [loading, setLoading] = useState(true);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  // --- 1. FETCH QUESTIONS ---
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        const data = await response.json();
        if (data.results) {
          const formatted = data.results.map((q) => ({
            ...q,
            options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
          }));
          setQuestions(formatted);
        }
        setLoading(false);
      } catch (error) {
        console.error("API Error:", error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // --- 2. SUBMIT LOGIC ---
  const submitExam = useCallback(() => {
    if (isExamSubmitted) return;
    setIsExamSubmitted(true);

    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) score += 1;
    });

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    navigate('/result', { 
      state: { score, total: questions.length, attempted: Object.keys(answers).length } 
    });
  }, [isExamSubmitted, questions, answers, navigate]);

  // --- 3. TIMER LOGIC ---
  useEffect(() => {
    if (!isExamStarted || isExamSubmitted || timeLeft <= 0) {
      if (timeLeft <= 0 && isExamStarted) submitExam();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isExamStarted, isExamSubmitted, submitExam]);

  // --- 4. SECURITY (ANTI-CHEAT) ---
  useEffect(() => {
    if (!isExamStarted) return;

    const handleSecurityBreach = () => {
      if (document.hidden && !isExamSubmitted) {
        alert("SECURITY BREACH: Tab switch detected! Exam auto-submitting...");
        submitExam();
      }
    };

    const disableInteractions = (e) => e.preventDefault();
    const disableShortcuts = (e) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'r')) {
        e.preventDefault();
      }
    };

    window.addEventListener("visibilitychange", handleSecurityBreach);
    window.addEventListener("contextmenu", disableInteractions);
    window.addEventListener("keydown", disableShortcuts);

    return () => {
      window.removeEventListener("visibilitychange", handleSecurityBreach);
      window.removeEventListener("contextmenu", disableInteractions);
      window.removeEventListener("keydown", disableShortcuts);
    };
  }, [isExamStarted, isExamSubmitted, submitExam]);

  const handleStartExam = () => {
    setIsExamStarted(true);
    document.documentElement.requestFullscreen().catch(() => {});
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white font-bold text-blue-600 animate-pulse">
      Loading Secure Environment...
    </div>
  );

  // --- START MODAL (ABOUT EXAM) ---
  if (!isExamStarted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Exam Instructions</h2>
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-8">Please read carefully before starting</p>
          
          <div className="space-y-4 mb-10">
            <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-2xl">⏱️</span>
              <div>
                <p className="font-bold text-slate-800">10 Minutes Duration</p>
                <p className="text-xs text-slate-500">The exam will auto-submit when the timer hits zero.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-2xl">🚫</span>
              <div>
                <p className="font-bold text-slate-800">Strict Proctoring</p>
                <p className="text-xs text-slate-500">Tab switching, minimizing, or copying text is strictly prohibited.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-2xl">🖥️</span>
              <div>
                <p className="font-bold text-slate-800">Full Screen Mode</p>
                <p className="text-xs text-slate-500">Exam will run in full-screen. Do not try to exit until finished.</p>
              </div>
            </div>
          </div>

          <button onClick={handleStartExam} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
            AGREE & START EXAM
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col select-none">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">E</div>
          <h2 className="text-lg font-black text-slate-800 hidden md:block">Examly Terminal</h2>
        </div>
        
        <div className={`px-8 py-2 rounded-2xl font-mono font-black text-2xl ${timeLeft < 60 ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-900 text-white'}`}>
          {formatTime(timeLeft)}
        </div>

        <button onClick={() => window.confirm("Submit Exam?") && submitExam()} className="bg-red-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-700 transition-all">
          Finish
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="grow flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto w-full">
        <div className="grow bg-white rounded-[40px] shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col">
          <div className="mb-8">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Question {currentIdx + 1} / 10</span>
            <h3 className="text-2xl font-bold text-slate-800 mt-3 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: currentQ?.question }} />
          </div>

          <div className="grid grid-cols-1 gap-4 grow">
            {currentQ?.options.map((option, i) => (
              <label key={i} className={`flex items-center gap-4 p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                answers[currentIdx] === option ? "border-blue-600 bg-blue-50/50" : "border-slate-50 bg-slate-50/40 hover:border-slate-200"
              }`}>
                <input type="radio" className="hidden" checked={answers[currentIdx] === option} onChange={() => setAnswers({...answers, [currentIdx]: option})} />
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black border ${answers[currentIdx] === option ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="font-bold text-slate-700" dangerouslySetInnerHTML={{ __html: option }} />
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t border-slate-50">
            <button disabled={currentIdx === 0} onClick={() => setCurrentIdx(currentIdx - 1)} className="font-bold text-slate-400 disabled:opacity-0 uppercase tracking-widest text-xs">← Back</button>
            <button onClick={() => currentIdx === questions.length - 1 ? submitExam() : setCurrentIdx(currentIdx + 1)} className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all">
              {currentIdx === questions.length - 1 ? "FINISH EXAM" : "SAVE & NEXT →"}
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">Question Palette</h4>
            <div className="grid grid-cols-5 gap-3">
              {questions.map((_, i) => (
                <button key={i} onClick={() => setCurrentIdx(i)} className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${
                  currentIdx === i ? 'ring-2 ring-blue-600 ring-offset-2 scale-110' : ''
                } ${answers[i] ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-8 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">AI Monitor Active</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              System is tracking eye movements and browser activity. Stay focused on the screen.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Exam;