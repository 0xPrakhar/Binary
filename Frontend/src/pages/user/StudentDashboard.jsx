import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Exams", value: "12", color: "bg-blue-500", icon: "📊" },
    { label: "Completed", value: "08", color: "bg-green-500", icon: "✅" },
    { label: "Pending", value: "04", color: "bg-yellow-500", icon: "⏳" },
    { label: "Avg. Score", value: "85%", color: "bg-purple-500", icon: "🏆" },
  ];

  const upcomingExams = [
    { id: 1, name: "Advanced Java Programming", date: "Oct 25, 2026", duration: "60 mins", questions: 50 },
    { id: 2, name: "UI/UX Design Principles", date: "Oct 28, 2026", duration: "45 mins", questions: 30 },
    { id: 3, name: "Database Management", date: "Nov 02, 2026", duration: "90 mins", questions: 60 },
  ];

  const recentActivity = [
    { id: 1, action: "Completed Java Basics Test", time: "2 hours ago" },
    { id: 2, action: "Scored 92% in UI/UX Quiz", time: "Yesterday" },
    { id: 3, action: "Registered for DBMS Exam", time: "2 days ago" },
  ];

  return (
    <div className="bg-slate-50 px-4 md:px-10 py-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">
            Welcome Back 👋
          </h1>
          <p className="text-slate-500 text-sm">
            Track your exams, results and progress here.
          </p>
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search exams..."
            className="w-full p-3 pl-10 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <span className="absolute left-3 top-3 opacity-40">🔍</span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold text-slate-400 uppercase">
                {stat.label}
              </p>
              <span>{stat.icon}</span>
            </div>
            <h2 className="text-2xl font-black mt-2">{stat.value}</h2>
            <div className={`h-1.5 w-10 mt-3 rounded-full ${stat.color}`} />
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => navigate('/exam')}
          className="px-5 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
        >
          🚀 Start New Exam
        </button>

        <button
          onClick={() => navigate('/userhome/result')}
          className="px-5 py-3 bg-white border rounded-xl font-bold hover:bg-slate-100"
        >
          📄 View Results
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* EXAMS */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black">Upcoming Exams</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between mb-4 text-xs text-slate-400">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                    Academic
                  </span>
                  <span>{exam.date}</span>
                </div>

                <h3 className="font-bold text-lg mb-3">{exam.name}</h3>

                <p className="text-sm text-slate-500 mb-1">
                  ⏱ {exam.duration}
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  📝 {exam.questions} Questions
                </p>

                <button
                  onClick={() => navigate('/exam')}
                  className="w-full py-2 bg-slate-900 text-white rounded-xl hover:bg-blue-600"
                >
                  Start Exam
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white p-6 rounded-2xl border shadow">
          <h2 className="font-bold mb-4">Recent Activity</h2>

          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="text-sm">
                <p className="font-medium text-slate-700">{item.action}</p>
                <p className="text-xs text-slate-400">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;