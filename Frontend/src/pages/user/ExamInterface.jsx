import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamInterface = () => {
  const navigate = useNavigate();

  // --- STATES ---
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 Minutes
  const [loading, setLoading] = useState(true);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  // --- 1. FETCH QUESTIONS (API Connection) ---
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

  // --- 2. SUBMIT EXAM LOGIC (Fixed Error) ---
  const submitExam = useCallback(() => {
    // Agar pehle hi submit ho chuka hai ya questions nahi hain toh rukh jao
    if (isExamSubmitted || questions.length === 0) return;
    
    setIsExamSubmitted(true);

    // Score calculate karein
    let finalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) {
        finalScore += 1;
      }
    });

    // Fullscreen exit logic
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    // Navigating to Result with State Data
    navigate('/result', { 
      state: { 
        score: finalScore, 
        total: questions.length,
        attempted: Object.keys(answers).length 
      } 
    });
  }, [isExamSubmitted, questions, answers, navigate]);

  // --- 3. TIMER LOGIC ---
  useEffect(() => {
    if (timeLeft <= 0) {
      submitExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitExam]);

  // --- 4. ANTI-CHEAT SECURITY ---
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && !isExamSubmitted) {
        alert("SECURITY ALERT: Tab Switch Detected! Exam is submitting now.");
        submitExam();
      }
    };

    window.addEventListener("visibilitychange", handleVisibility);
    return () => window.removeEventListener("visibilitychange", handleVisibility);
  }, [submitExam, isExamSubmitted]);

  // Loading Screen
  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white font-bold text-blue-600">
      Loading Secure Environment...
    </div>
  );

  const currentQ = questions[currentIdx];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col select-none">
      
      {/* HEADER */}
      <header className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h2 className="text-xl font-black text-slate-800 tracking-tighter italic">Examly</h2>
        <div className="bg-slate-900 text-white px-6 py-2 rounded-xl font-mono text-xl">
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
        <button 
          onClick={() => { if(window.confirm("Finish Exam?")) submitExam(); }}
          className="bg-red-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-700"
        >
          Submit
        </button>
      </header>

      {/* QUESTION AREA */}
      <main className="grow flex flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-[40px] shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="mb-8">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Question {currentIdx + 1}</span>
            <h3 className="text-2xl font-bold text-slate-800 mt-4 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: currentQ?.question }} />
          </div>

          <div className="space-y-4">
            {currentQ?.options.map((option, i) => (
              <label 
                key={i} 
                className={`flex items-center gap-4 p-5 rounded-3xl border-2 cursor-pointer transition-all ${
                  answers[currentIdx] === option ? "border-blue-600 bg-blue-50/50" : "border-slate-50 bg-slate-50/50 hover:border-slate-100"
                }`}
              >
                <input 
                  type="radio" 
                  className="hidden" 
                  checked={answers[currentIdx] === option}
                  onChange={() => setAnswers({...answers, [currentIdx]: option})}
                />
                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border ${answers[currentIdx] === option ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="font-bold text-slate-700" dangerouslySetInnerHTML={{ __html: option }} />
              </label>
            ))}
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between mt-12 pt-8 border-t border-slate-50">
            <button 
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => prev - 1)}
              className="px-8 py-3 font-bold text-slate-400 disabled:opacity-20"
            >
              ← Previous
            </button>
            <button 
              onClick={() => currentIdx === questions.length - 1 ? submitExam() : setCurrentIdx(prev => prev + 1)}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-100 transition-all active:scale-95"
            >
              {currentIdx === questions.length - 1 ? "Finish Exam" : "Save & Next"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamInterface;