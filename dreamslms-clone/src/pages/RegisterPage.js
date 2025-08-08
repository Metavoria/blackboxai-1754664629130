import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Globe, BarChart2, Rocket, Lightbulb, Star, GraduationCap } from 'lucide-react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    phone: '',
    organization: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store user data in localStorage (in real app, use proper authentication)
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('userToken', 'demo-token');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`);
      
      // Redirect based on role
      navigate(formData.role);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleSpecificFields = () => {
    switch (formData.role) {
      case 'company':
        return (
          <div className="form-group">
            <label htmlFor="organization" className="form-label">Company Name</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your company name"
              required
            />
          </div>
        );
      case 'training-center':
        return (
          <div className="form-group">
            <label htmlFor="organization" className="form-label">Training Center Name</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your training center name"
              required
            />
          </div>
        );
      case 'trainer':
        return (
          <div className="form-group">
            <label htmlFor="organization" className="form-label">Specialization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., Web Development, Data Science"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          <div className="register-form-section">
            <div className="register-header">
              <h1>Create Your Account</h1>
              <p>Join thousands of learners and start your journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

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
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">I want to register as</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="student">Student - Learn new skills</option>
                  <option value="trainer">Trainer - Teach and mentor</option>
                  <option value="training-center">Training Center - Manage courses</option>
                  <option value="company">Company - Hire talent</option>
                </select>
              </div>

              {getRoleSpecificFields()}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Create a password"
                    required
                    minLength="6"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Confirm your password"
                    required
                    minLength="6"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the <Link to="/terms" className="link">Terms of Service</Link> and <Link to="/privacy" className="link">Privacy Policy</Link>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg register-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner"></div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="register-footer">
              <p>
                Already have an account? 
                <Link to="/login" className="login-link"> Sign in here</Link>
              </p>
            </div>
          </div>

          <div className="register-image-section">
            <div className="register-illustration">
              <div className="illustration-content">
                <h2>Start Your Learning Journey</h2>
                <p>Join our community of learners, instructors, and organizations working together to build the future of education.</p>
                
                <div className="benefits-list">
                  <div className="benefit-item">
-                    <span className="benefit-icon">🎯</span>
+                    <Target size={24} />
                    <div className="benefit-text">
                      <h4>Personalized Learning</h4>
                      <p>Courses tailored to your goals and skill level</p>
                    </div>
                  </div>
                  <div className="benefit-item">
-                    <span className="benefit-icon">🌐</span>
+                    <Globe size={24} />
                    <div className="benefit-text">
                      <h4>Global Community</h4>
                      <p>Connect with learners and experts worldwide</p>
                    </div>
                  </div>
                  <div className="benefit-item">
-                    <span className="benefit-icon">📈</span>
+                    <BarChart2 size={24} />
                    <div className="benefit-text">
                      <h4>Career Growth</h4>
                      <p>Skills and certifications that advance your career</p>
                    </div>
                  </div>
                </div>

                <div className="stats-showcase">
                  <div className="stat-showcase">
                    <span className="stat-number">15K+</span>
                    <span className="stat-label">Active Users</span>
                  </div>
                  <div className="stat-showcase">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Courses</span>
                  </div>
                  <div className="stat-showcase">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
-                <div className="element element-1">🚀</div>
-                <div className="element element-2">💡</div>
-                <div className="element element-3">🎓</div>
-                <div className="element element-4">⭐</div>
+                <Rocket size={24} className="element element-1" />
+                <Lightbulb size={24} className="element element-2" />
+                <GraduationCap size={24} className="element element-3" />
+                <Star size={24} className="element element-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
