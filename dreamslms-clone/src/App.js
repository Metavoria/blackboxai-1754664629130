import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import CompanyDashboard from './pages/Dashboard/CompanyDashboard';
import TrainingCenterDashboard from './pages/Dashboard/TrainingCenterDashboard';
import TrainerDashboard from './pages/Dashboard/TrainerDashboard';
import CoursesList from './pages/Courses/CoursesList';
import CourseDetail from './pages/Courses/CourseDetail';
import JobList from './pages/Jobs/JobList';
import JobDetail from './pages/Jobs/JobDetail';
import UserProfile from './pages/Profile/UserProfile';
import ResumeUpload from './pages/Profile/ResumeUpload';
import AIInterview from './pages/AIInterview';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/student/*" element={<StudentDashboard />} />
            <Route path="/company/*" element={<CompanyDashboard />} />
            <Route path="/training-center/*" element={<TrainingCenterDashboard />} />
            <Route path="/trainer/*" element={<TrainerDashboard />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/resume" element={<ResumeUpload />} />
            <Route path="/ai-interview" element={<AIInterview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
