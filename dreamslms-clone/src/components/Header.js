import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, LogIn, UserPlus, LogOut, Mail, Phone, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userToken');
    setUserRole(null);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <Mail size={16} />
              <span>dreamslms@example.com</span>
              <Phone size={16} />
              <span>+19 123-456-7890</span>
            </div>
            <div className="header-top-right">
              <MapPin size={16} />
              <span>3556 Beech Street, San Francisco, California, CA 94108</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/" className="logo-link">
                <div className="logo-icon">
                  <span className="logo-text">Dreams</span>
                </div>
              </Link>
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <Home size={16} /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/jobs" className="nav-link">Jobs</Link>
                </li>
                {userRole && (
                  <>
                    <li className="nav-item">
                      <Link to={`/${userRole}`} className="nav-link">
                        <User size={16} /> Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">
                        <User size={16} /> Profile
                      </Link>
                    </li>
                    {userRole === 'student' && (
                      <>
                        <li className="nav-item">
                          <Link to="/resume" className="nav-link">Resume</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/ai-interview" className="nav-link">AI Interview</Link>
                        </li>
                      </>
                    )}
                  </>
                )}
              </ul>
            </nav>

            <div className="header-actions">
              {!userRole ? (
                <>
                  <Link to="/login" className="btn btn-outline btn-sm" role="link" tabIndex={0}>
                    <LogIn size={16} /> Login
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-sm" role="link" tabIndex={0}>
                    <UserPlus size={16} /> Register
                  </Link>
                </>
              ) : (
                <div className="user-menu">
                  <span className="user-role">{userRole}</span>
                  <button onClick={handleLogout} className="btn btn-outline btn-sm">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
              
              <button 
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
