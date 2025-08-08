import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="course-detail">
      <div className="container">
        <div className="course-header">
          <h1>Complete React.js Development Course</h1>
          <p>Master React.js from basics to advanced concepts</p>
          <div className="course-meta">
            <span>⭐ 4.8 (1,234 reviews)</span>
            <span>👥 5,678 students</span>
            <span>⏱️ 40 hours</span>
            <span>📅 Last updated: Dec 2023</span>
          </div>
        </div>

        <div className="course-content">
          <div className="course-main">
            <div className="course-video">
              <div className="video-placeholder">
                <span>🎥 Course Preview Video</span>
              </div>
            </div>

            <div className="course-description">
              <h2>What you'll learn</h2>
              <ul>
                <li>Build modern React applications from scratch</li>
                <li>Understand React hooks and state management</li>
                <li>Work with React Router for navigation</li>
                <li>Integrate APIs and handle data</li>
                <li>Deploy React applications to production</li>
              </ul>

              <h2>Course Content</h2>
              <div className="course-curriculum">
                <div className="section">
                  <h3>Section 1: Getting Started</h3>
                  <ul>
                    <li>Introduction to React</li>
                    <li>Setting up the development environment</li>
                    <li>Your first React component</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Section 2: React Fundamentals</h3>
                  <ul>
                    <li>JSX and Components</li>
                    <li>Props and State</li>
                    <li>Event Handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="price-card">
              <div className="price">
                <span className="current-price">$99</span>
                <span className="original-price">$149</span>
              </div>
              <button className="btn btn-primary btn-lg">Enroll Now</button>
              <button className="btn btn-outline">Add to Wishlist</button>
            </div>

            <div className="instructor-card">
              <h3>Instructor</h3>
              <div className="instructor-info">
                <div className="instructor-avatar">👨‍🏫</div>
                <div>
                  <h4>John Doe</h4>
                  <p>Senior React Developer</p>
                  <p>⭐ 4.9 instructor rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
