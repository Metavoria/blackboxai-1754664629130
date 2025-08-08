import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'John Student',
    email: localStorage.getItem('userEmail') || 'student@demo.com',
    avatar: '👨‍🎓'
  });

  const [stats, setStats] = useState({
    enrolledCourses: 12,
    completedCourses: 8,
    certificates: 5,
    studyHours: 156
  });

  const [recentCourses, setRecentCourses] = useState([
    {
      id: 1,
      title: 'React.js Complete Course',
      instructor: 'John Doe',
      progress: 75,
      lastAccessed: '2 hours ago',
      thumbnail: '⚛️'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Jane Smith',
      progress: 45,
      lastAccessed: '1 day ago',
      thumbnail: '🐍'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Johnson',
      progress: 90,
      lastAccessed: '3 days ago',
      thumbnail: '🎨'
    }
  ]);

  const [upcomingMeetings, setUpcomingMeetings] = useState([
    {
      id: 1,
      title: 'React Advanced Concepts',
      instructor: 'John Doe',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Live Session'
    },
    {
      id: 2,
      title: 'Career Guidance Session',
      instructor: 'Career Counselor',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'One-on-One'
    }
  ]);

  const [jobRecommendations, setJobRecommendations] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      salary: '$80,000 - $120,000',
      match: 95,
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      salary: '$70,000 - $100,000',
      match: 88,
      type: 'Remote'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      salary: '$65,000 - $90,000',
      match: 82,
      type: 'Full-time'
    }
  ]);

  const navigate = useNavigate();

  const DashboardOverview = () => (
    <div className="dashboard-overview">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
          <p>Ready to continue your learning journey?</p>
        </div>
        <div className="quick-actions">
          <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
          <Link to="/ai-interview" className="btn btn-outline">Practice Interview</Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.enrolledCourses}</h3>
            <p>Enrolled Courses</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.completedCourses}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>{stats.certificates}</h3>
            <p>Certificates</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>{stats.studyHours}h</h3>
            <p>Study Hours</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Continue Learning</h2>
            <Link to="/student/courses" className="view-all-link">View All</Link>
          </div>
          <div className="courses-list">
            {recentCourses.map(course => (
              <div key={course.id} className="course-item">
                <div className="course-thumbnail">{course.thumbnail}</div>
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p>by {course.instructor}</p>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% complete</span>
                </div>
                <div className="course-actions">
                  <button className="btn btn-primary btn-sm">Continue</button>
                  <span className="last-accessed">{course.lastAccessed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-header">
            <h2>Upcoming Sessions</h2>
            <Link to="/student/calendar" className="view-all-link">View Calendar</Link>
          </div>
          <div className="meetings-list">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="meeting-item">
                <div className="meeting-date">
                  <span className="date">{new Date(meeting.date).getDate()}</span>
                  <span className="month">{new Date(meeting.date).toLocaleDateString('en', { month: 'short' })}</span>
                </div>
                <div className="meeting-info">
                  <h4>{meeting.title}</h4>
                  <p>with {meeting.instructor}</p>
                  <div className="meeting-meta">
                    <span className="time">🕐 {meeting.time}</span>
                    <span className="type">{meeting.type}</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm">Join</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Job Recommendations</h2>
          <Link to="/jobs" className="view-all-link">View All Jobs</Link>
        </div>
        <div className="jobs-grid">
          {jobRecommendations.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h4>{job.title}</h4>
                <div className="match-score">
                  <span className="match-percentage">{job.match}%</span>
                  <span className="match-label">Match</span>
                </div>
              </div>
              <div className="job-details">
                <p className="company">🏢 {job.company}</p>
                <p className="location">📍 {job.location}</p>
                <p className="salary">💰 {job.salary}</p>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-actions">
                <button className="btn btn-primary btn-sm">Apply Now</button>
                <button className="btn btn-outline btn-sm">Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-tools">
        <h2>Quick Tools</h2>
        <div className="tools-grid">
          <Link to="/resume" className="tool-card">
            <div className="tool-icon">📄</div>
            <h4>Resume Builder</h4>
            <p>Create and optimize your resume with AI assistance</p>
          </Link>
          <Link to="/ai-interview" className="tool-card">
            <div className="tool-icon">🎤</div>
            <h4>AI Interview</h4>
            <p>Practice interviews with our AI-powered system</p>
          </Link>
          <Link to="/student/skills" className="tool-card">
            <div className="tool-icon">🎯</div>
            <h4>Skills Assessment</h4>
            <p>Evaluate your skills and get personalized recommendations</p>
          </Link>
          <Link to="/student/chat" className="tool-card">
            <div className="tool-icon">💬</div>
            <h4>Chat with Trainers</h4>
            <p>Get help from instructors and mentors</p>
          </Link>
        </div>
      </div>
    </div>
  );

  const MyCourses = () => (
    <div className="my-courses">
      <div className="courses-header">
        <h1>My Courses</h1>
        <div className="courses-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">In Progress</button>
          <button className="filter-btn">Completed</button>
          <button className="filter-btn">Saved</button>
        </div>
      </div>
      <div className="courses-grid">
        {recentCourses.map(course => (
          <div key={course.id} className="course-card-detailed">
            <div className="course-thumbnail-large">{course.thumbnail}</div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <div className="progress-section">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span>{course.progress}% Complete</span>
              </div>
              <div className="course-actions">
                <button className="btn btn-primary">Continue Learning</button>
                <button className="btn btn-outline">View Certificate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Calendar = () => (
    <div className="calendar-view">
      <h1>My Calendar</h1>
      <div className="calendar-content">
        <div className="calendar-placeholder">
          <h3>📅 Calendar View</h3>
          <p>Your upcoming sessions and deadlines will appear here</p>
          <div className="upcoming-events">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="event-item">
                <div className="event-time">{meeting.date} at {meeting.time}</div>
                <div className="event-title">{meeting.title}</div>
                <div className="event-instructor">with {meeting.instructor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Chat = () => (
    <div className="chat-view">
      <h1>Messages</h1>
      <div className="chat-container">
        <div className="chat-sidebar">
          <h3>Conversations</h3>
          <div className="chat-list">
            <div className="chat-item active">
              <div className="chat-avatar">👨‍🏫</div>
              <div className="chat-info">
                <h4>John Doe</h4>
                <p>React Instructor</p>
              </div>
            </div>
            <div className="chat-item">
              <div className="chat-avatar">👩‍🏫</div>
              <div className="chat-info">
                <h4>Jane Smith</h4>
                <p>Python Instructor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-main">
          <div className="chat-header">
            <h3>John Doe - React Instructor</h3>
          </div>
          <div className="chat-messages">
            <div className="message received">
              <p>Hi! How are you progressing with the React hooks lesson?</p>
              <span className="message-time">2:30 PM</span>
            </div>
            <div className="message sent">
              <p>Going well! I have a question about useEffect cleanup functions.</p>
              <span className="message-time">2:35 PM</span>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="student-dashboard">
      <div className="dashboard-sidebar">
        <div className="user-profile">
          <div className="user-avatar">{user.avatar}</div>
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className="user-role">Student</span>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <Link to="/student" className="nav-item">
            <span className="nav-icon">🏠</span>
            Dashboard
          </Link>
          <Link to="/student/courses" className="nav-item">
            <span className="nav-icon">📚</span>
            My Courses
          </Link>
          <Link to="/student/calendar" className="nav-item">
            <span className="nav-icon">📅</span>
            Calendar
          </Link>
          <Link to="/student/chat" className="nav-item">
            <span className="nav-icon">💬</span>
            Messages
          </Link>
          <Link to="/jobs" className="nav-item">
            <span className="nav-icon">💼</span>
            Job Board
          </Link>
          <Link to="/resume" className="nav-item">
            <span className="nav-icon">📄</span>
            Resume
          </Link>
          <Link to="/ai-interview" className="nav-item">
            <span className="nav-icon">🎤</span>
            AI Interview
          </Link>
          <Link to="/profile" className="nav-item">
            <span className="nav-icon">⚙️</span>
            Settings
          </Link>
        </nav>
      </div>

      <div className="dashboard-main">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
};

export default StudentDashboard;
