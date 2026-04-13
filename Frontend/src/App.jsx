import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import About from "./component/About";
import Features from "./component/Features";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Exam from "./pages/user/Exam";
import Admin from "./pages/Admin";

// User Layout + Pages
import UserLayout from "./pages/user/layout/UserLayout";
import StudentDashboard from "./pages/user/StudentDashboard";
import Result from "./pages/user/Result";
import Setting from "./pages/user/Setting";
import Profile from "./pages/user/Profile";

// Scroll fix
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout Manager
const LayoutManager = ({ children }) => {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/userhome") ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/exam";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => console.log("Backend Connected:", data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <LayoutManager>
        <Routes>

          {/* Landing */}
          <Route path="/" element={<><Hero /><Features /><About /></>} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Exam */}
          <Route path="/exam" element={<Exam />} />

          {/* ✅ USER ROUTES (FINAL CLEAN WAY) */}
          <Route path="/userhome" element={<UserLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="result" element={<Result />} />
            <Route path="setting" element={<Setting />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<Hero />} />
        </Routes>
      </LayoutManager>
    </BrowserRouter>
  );
}

export default App;