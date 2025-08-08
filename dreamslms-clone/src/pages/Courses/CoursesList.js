import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesList = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'Complete React.js Development Course',
      instructor: 'John Doe',
      price: 99,
      originalPrice: 149,
      rating: 4.8,
      students: 1234,
      duration: '40 hours',
      level: 'Beginner',
      category: 'Web Development',
      image: '⚛️'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Jane Smith',
      price: 79,
      originalPrice: 120,
      rating: 4.9,
      students: 856,
      duration: '35 hours',
      level: 'Intermediate',
      category: 'Data Science',
      image: '🐍'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Mike Johnson',
      price: 0,
      originalPrice: null,
      rating: 4.7,
      students: 2341,
      duration: '25 hours',
      level: 'Beginner',
      category: 'Design',
      image: '🎨'
    }
  ]);

  return (
    <div className="courses-list">
      <div className="container">
        <div className="courses-header">
          <h1>All Courses</h1>
          <p>Discover thousands of courses from expert instructors</p>
        </div>

        <div className="courses-filters">
          <div className="filter-group">
            <label>Category:</label>
            <select>
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Design</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Level:</label>
            <select>
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Price:</label>
            <select>
              <option>All Prices</option>
              <option>Free</option>
              <option>Paid</option>
            </select>
          </div>
        </div>

        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <span className="course-icon">{course.image}</span>
                <div className="course-price">
                  {course.price === 0 ? (
                    <span className="price-free">FREE</span>
                  ) : (
                    <div className="price-paid">
                      <span className="current-price">${course.price}</span>
                      {course.originalPrice && (
                        <span className="original-price">${course.originalPrice}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="course-content">
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </h3>
                <p className="course-instructor">by {course.instructor}</p>
                <div className="course-meta">
                  <div className="course-rating">
                    <span className="rating-stars">⭐ {course.rating}</span>
                    <span className="rating-count">({course.students})</span>
                  </div>
                  <div className="course-details">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                </div>
                <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
