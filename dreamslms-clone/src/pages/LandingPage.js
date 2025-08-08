import React from 'react';
import { Link } from 'react-router-dom';
import { Book, GraduationCap, Lightbulb, Rocket, Target, UserCheck, Award, Users, MessageCircle, User, Smile, Star, Clock, Cloud, BarChart2, Monitor, ToolCase } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const categories = [
    { name: 'Angular', courses: 4, icon: <Target size={32} /> },
    { name: 'Bootstrap', courses: 3, icon: <UserCheck size={32} /> },
    { name: 'CSS3', courses: 3, icon: <Smile size={32} /> },
    { name: 'Docker Development', courses: 2, icon: <Rocket size={32} /> },
    { name: 'GatsBy', courses: 2, icon: <Lightbulb size={32} /> },
    { name: 'GraphQL', courses: 2, icon: <Book size={32} /> }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete HTML CSS and JavaScript Course',
      instructor: 'David Powell',
      price: 'Free',
      originalPrice: null,
      lessons: 0,
      duration: '30 mins',
      rating: 0,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Fullstack WordPress Developer Online Course',
      instructor: 'David Powell',
      price: '$260',
      originalPrice: '$300',
      lessons: 0,
      duration: '78 hrs 30 mins',
      rating: 4,
      reviews: 1,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Advanced Android 12 & Kotlin Development Course',
      instructor: 'Michael Morgan',
      price: '$15',
      originalPrice: '$18',
      lessons: 9,
      duration: '78 hrs 30 mins',
      rating: 5,
      reviews: 1,
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'iOS & Swift Complete iOS Application Development Course',
      instructor: 'Michael Morgan',
      price: 'Free',
      originalPrice: null,
      lessons: 4,
      duration: '60 hrs 30 mins',
      rating: 4,
      reviews: 1,
      image: '/api/placeholder/300/200'
    }
  ];

  const instructors = [
    { name: 'Alice Lane', courses: 0, image: '/api/placeholder/100/100' },
    { name: 'David Powell', courses: 11, image: '/api/placeholder/100/100' },
    { name: 'Michael Morgan', courses: 10, image: '/api/placeholder/100/100' },
    { name: 'John Michael', courses: 0, image: '/api/placeholder/100/100' }
  ];

  const testimonials = [
    {
      name: 'Daziy Millar',
      role: 'Managing Director',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'John Smith',
      role: 'Managing Director',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">The Leader in Online Learning</span>
              <h1 className="hero-title">
                Engaging & Accessible Online Courses For All
              </h1>
              <div className="hero-search">
                <input 
                  type="text" 
                  placeholder="Search School, Online educational centers, etc"
                  className="search-input"
                />
                <button className="search-btn btn btn-primary">
                  Search
                </button>
              </div>
              <div className="hero-stats">
                <p>Trusted by over 15K Users worldwide since 2022</p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <Target size={32} />
                    <span className="stat-number">290+</span>
                    <span className="stat-label">Courses</span>
                  </div>
                  <div className="stat-item">
                    <UserCheck size={32} />
                    <span className="stat-number">186+</span>
                    <span className="stat-label">Expert Tutors</span>
                  </div>
                  <div className="stat-item">
                    <Award size={32} />
                    <span className="stat-number">5K+</span>
                    <span className="stat-label">Certified Courses</span>
                  </div>
                  <div className="stat-item">
                    <Users size={32} />
                    <span className="stat-number">55K+</span>
                    <span className="stat-label">Online Students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-illustration">
                <div className="floating-elements">
                  <Book size={32} className="element element-1" />
                  <GraduationCap size={32} className="element element-2" />
                  <Lightbulb size={32} className="element element-3" />
                  <Rocket size={32} className="element element-4" />
                </div>
                <div className="main-character">
                  <div className="character-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-main">
            <div className="stat-card">
              <Target size={32} className="stat-icon" />
              <h3>10K</h3>
              <p>Online Courses</p>
            </div>
            <div className="stat-card">
              <UserCheck size={32} className="stat-icon" />
              <h3>186+</h3>
              <p>Expert Tutors</p>
            </div>
            <div className="stat-card">
              <Award size={32} className="stat-icon" />
              <h3>5K+</h3>
              <p>Certified Courses</p>
            </div>
            <div className="stat-card">
              <Users size={32} className="stat-icon" />
              <h3>55K+</h3>
              <p>Online Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Favourite Course</span>
            <h2 className="section-title">Top Category</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
            </p>
            <Link to="/courses" className="btn btn-outline">All Categories</Link>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h4 className="category-name">{category.name}</h4>
                <p className="category-courses">{category.courses} Courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What's New</span>
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
            </p>
            <Link to="/courses" className="btn btn-outline">All Courses</Link>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <div className="course-placeholder">
                    <Book size={32} />
                  </div>
                  <div className="course-price">
                    {course.price === 'Free' ? (
                      <span className="price-free">FREE</span>
                    ) : (
                      <div className="price-paid">
                        <span className="current-price">{course.price}</span>
                        {course.originalPrice && (
                          <span className="original-price">{course.originalPrice}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="course-content">
                  <div className="course-instructor">
                    <User size={24} />
                    <span className="instructor-name">{course.instructor}</span>
                  </div>
                  <h3 className="course-title">
                    <Link to={`/courses/${course.id}`}>{course.title}</Link>
                  </h3>
                  <div className="course-meta">
                    <span className="course-lessons"><Book size={16} /> {course.lessons} Lessons</span>
                    <span className="course-duration"><Clock size={16} /> {course.duration}</span>
                  </div>
                  {course.rating > 0 && (
                    <div className="course-rating">
                      <Star size={16} />
                      <span className="rating-text">{course.rating} ({course.reviews})</span>
                    </div>
                  )}
                  <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm course-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="skills-content">
            <div className="skills-text">
              <span className="section-badge">What's New</span>
              <h2 className="section-title">Master the skills to drive your career</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
              </p>
              <div className="skills-features">
                <div className="feature-item">
                  <Book size={32} />
                  <div className="feature-text">
                    <h4>Stay motivated with engaging instructors</h4>
                  </div>
                </div>
                <div className="feature-item">
                  <Cloud size={32} />
                  <div className="feature-text">
                    <h4>Keep up with in the latest in cloud</h4>
                  </div>
                </div>
                <div className="feature-item">
                  <Award size={32} />
                  <div className="feature-text">
                    <h4>Get certified with 100+ certification courses</h4>
                  </div>
                </div>
                <div className="feature-item">
                  <ToolCase size={32} />
                  <div className="feature-text">
                    <h4>Build skills your way, from labs to courses</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-image">
              <div className="skills-illustration">
                <User size={64} />
                <div className="floating-icons">
                  <BarChart2 size={32} />
                  <Monitor size={32} />
                  <Target size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Instructor</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <div key={index} className="instructor-card">
                <User size={48} />
                <h4 className="instructor-name">{instructor.name}</h4>
                <p className="instructor-role">Instructor</p>
                <p className="instructor-courses">Courses {instructor.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Check out these real reviews</h2>
            <h3 className="testimonials-subtitle">Users-love-us Don't take it from us.</h3>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <MessageCircle size={32} />
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <User size={32} />
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-item">
              <User size={48} />
              <h3>Become An Instructor</h3>
              <p>Top instructors from around the world teach millions of students on Mentoring.</p>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
            <div className="cta-item">
              <GraduationCap size={48} />
              <h3>Transform Access To Education</h3>
              <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
              <Link to="/register" className="btn btn-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
