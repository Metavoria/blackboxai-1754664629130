import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();

  return (
    <div className="job-detail">
      <div className="container">
        <div className="job-header">
          <div className="job-title-section">
            <h1>Senior Frontend Developer</h1>
            <div className="company-info">
              <h2>🏢 TechCorp Inc.</h2>
              <div className="job-meta">
                <span>📍 San Francisco, CA</span>
                <span>💰 $120,000 - $150,000</span>
                <span>📅 Posted 2 days ago</span>
                <span className="job-type">Full-time</span>
              </div>
            </div>
          </div>
          <div className="job-actions">
            <button className="btn btn-primary btn-lg">Apply Now</button>
            <button className="btn btn-outline">Save Job</button>
          </div>
        </div>

        <div className="job-content">
          <div className="job-main">
            <section className="job-description">
              <h3>Job Description</h3>
              <p>
                We are looking for a talented Senior Frontend Developer to join our growing team. 
                You will be responsible for building the next generation of our web applications 
                using modern technologies like React.js, TypeScript, and Node.js.
              </p>
              <p>
                As a senior member of the team, you will mentor junior developers, participate in 
                architectural decisions, and help drive technical excellence across our products.
              </p>
            </section>

            <section className="job-responsibilities">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Develop and maintain high-quality React.js applications</li>
                <li>Collaborate with designers and backend developers</li>
                <li>Write clean, maintainable, and well-tested code</li>
                <li>Mentor junior developers and conduct code reviews</li>
                <li>Participate in agile development processes</li>
                <li>Stay up-to-date with latest frontend technologies</li>
              </ul>
            </section>

            <section className="job-requirements">
              <h3>Requirements</h3>
              <ul>
                <li>5+ years of experience in frontend development</li>
                <li>Expert knowledge of React.js and its ecosystem</li>
                <li>Strong proficiency in TypeScript and JavaScript</li>
                <li>Experience with modern build tools (Webpack, Vite, etc.)</li>
                <li>Knowledge of testing frameworks (Jest, React Testing Library)</li>
                <li>Understanding of responsive design and cross-browser compatibility</li>
                <li>Experience with version control systems (Git)</li>
                <li>Strong problem-solving and communication skills</li>
              </ul>
            </section>

            <section className="job-benefits">
              <h3>Benefits</h3>
              <ul>
                <li>Competitive salary and equity package</li>
                <li>Comprehensive health, dental, and vision insurance</li>
                <li>Flexible working hours and remote work options</li>
                <li>Professional development budget</li>
                <li>Modern office with free meals and snacks</li>
                <li>Generous vacation policy</li>
              </ul>
            </section>
          </div>

          <div className="job-sidebar">
            <div className="company-card">
              <h3>About TechCorp Inc.</h3>
              <div className="company-logo">🏢</div>
              <p>
                TechCorp is a leading technology company focused on building 
                innovative solutions for the modern world. We're passionate 
                about creating products that make a difference.
              </p>
              <div className="company-stats">
                <div className="stat">
                  <strong>Founded:</strong> 2015
                </div>
                <div className="stat">
                  <strong>Size:</strong> 500-1000 employees
                </div>
                <div className="stat">
                  <strong>Industry:</strong> Technology
                </div>
              </div>
            </div>

            <div className="skills-match">
              <h3>Skills Match</h3>
              <p>Based on your profile, you match 85% of the requirements</p>
              <div className="skills-list">
                <span className="skill-tag match">React.js</span>
                <span className="skill-tag match">TypeScript</span>
                <span className="skill-tag match">JavaScript</span>
                <span className="skill-tag no-match">Node.js</span>
                <span className="skill-tag match">Git</span>
              </div>
              <p className="skills-suggestion">
                Consider learning Node.js to improve your match score!
              </p>
            </div>

            <div className="similar-jobs">
              <h3>Similar Jobs</h3>
              <div className="similar-job-item">
                <h4>React Developer</h4>
                <p>StartupXYZ • Remote • $90k-$120k</p>
              </div>
              <div className="similar-job-item">
                <h4>Frontend Engineer</h4>
                <p>BigTech Co. • San Francisco • $130k-$160k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
