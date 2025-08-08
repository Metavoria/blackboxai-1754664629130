import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h3 className="logo-text">Dreams</h3>
                <p className="footer-description">
                  The Leader in Online Learning. Engaging & Accessible Online Courses For All.
                  Trusted by over 15K Users worldwide since 2022.
                </p>
                <div className="footer-stats">
                  <div className="stat-item">
                    <span className="stat-number">253,085</span>
                    <span className="stat-label">Students Enrolled</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">252</span>
                    <span className="stat-label">Total Courses</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">127</span>
                    <span className="stat-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">For Students</h4>
              <ul className="footer-links">
                <li><Link to="/courses">Browse Courses</Link></li>
                <li><Link to="/jobs">Find Jobs</Link></li>
                <li><Link to="/resume">Resume Builder</Link></li>
                <li><Link to="/ai-interview">AI Interview</Link></li>
                <li><Link to="/student">Student Dashboard</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">For Businesses</h4>
              <ul className="footer-links">
                <li><Link to="/company">Company Dashboard</Link></li>
                <li><Link to="/training-center">Training Centers</Link></li>
                <li><Link to="/trainer">Become a Trainer</Link></li>
                <li><Link to="/jobs">Post Jobs</Link></li>
                <li><Link to="/courses">Corporate Training</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Connect With Us</h4>
              <p className="contact-info">
                <Mail size={16} /> <strong>Email:</strong> dreamslms@example.com<br />
                <Phone size={16} /> <strong>Phone:</strong> +19 123-456-7890<br />
                <MapPin size={16} /> <strong>Address:</strong> 3556 Beech Street, San Francisco, CA 94108
              </p>
              <div className="newsletter">
                <h5>Subscribe to our Newsletter</h5>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="newsletter-input"
                  />
                  <button className="btn btn-primary btn-sm">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Dreams Learning Management System. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
