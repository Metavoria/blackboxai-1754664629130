import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Book, User, Award, Briefcase } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage (in real app, use proper authentication)
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('userToken', 'demo-token');
      localStorage.setItem('userEmail', formData.email);
      
      // Redirect based on role
      navigate(`/${formData.role}`);
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <div className="login-form-section">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to your account to continue learning</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">Login As</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="student">Student</option>
                  <option value="trainer">Trainer</option>
                  <option value="training-center">Training Center</option>
                  <option value="company">Company</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg login-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner"></div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="login-footer">
              <p>
                Don't have an account? 
                <Link to="/register" className="register-link"> Sign up here</Link>
              </p>
            </div>

            <div className="demo-credentials">
              <h4>Demo Credentials:</h4>
              <div className="demo-grid">
                <div className="demo-item">
                  <strong>Student:</strong> student@demo.com / password
                </div>
                <div className="demo-item">
                  <strong>Trainer:</strong> trainer@demo.com / password
                </div>
                <div className="demo-item">
                  <strong>Company:</strong> company@demo.com / password
                </div>
                <div className="demo-item">
                  <strong>Training Center:</strong> center@demo.com / password
                </div>
                <div className="demo-item">
                  <strong>Admin:</strong> admin@demo.com / password
                </div>
              </div>
            </div>
          </div>

          <div className="login-image-section">
            <div className="login-illustration">
              <div className="illustration-content">
                <h2>Join Our Learning Community</h2>
                <p>Access thousands of courses, connect with expert instructors, and advance your career with our comprehensive learning platform.</p>
                <div className="features-list">
                  <div className="feature-item">
-                    <span className="feature-icon">📚</span>
+                    <Book size={24} />
                    <span>10,000+ Online Courses</span>
                  </div>
                  <div className="feature-item">
-                    <span className="feature-icon">👨‍🏫</span>
+                    <User size={24} />
                    <span>Expert Instructors</span>
                  </div>
                  <div className="feature-item">
-                    <span className="feature-icon">🏆</span>
+                    <Award size={24} />
                    <span>Certified Learning</span>
                  </div>
                  <div className="feature-item">
-                    <span className="feature-icon">💼</span>
+                    <Briefcase size={24} />
                    <span>Career Opportunities</span>
                  </div>
                </div>
              </div>
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
