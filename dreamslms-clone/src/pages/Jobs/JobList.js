import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      description: 'We are looking for a senior frontend developer with React.js experience...',
      requirements: ['React.js', 'TypeScript', 'Node.js', '5+ years experience'],
      remote: false
    },
    {
      id: 2,
      title: 'Python Data Scientist',
      company: 'DataFlow Solutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      posted: '1 week ago',
      description: 'Join our data science team to build ML models and analytics...',
      requirements: ['Python', 'Machine Learning', 'SQL', '3+ years experience'],
      remote: true
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      posted: '3 days ago',
      description: 'Design beautiful and intuitive user interfaces...',
      requirements: ['Figma', 'Adobe Creative Suite', 'User Research', '2+ years experience'],
      remote: false
    }
  ]);

  return (
    <div className="job-list">
      <div className="container">
        <div className="jobs-header">
          <h1>Job Opportunities</h1>
          <p>Find your dream job from thousands of opportunities</p>
        </div>

        <div className="jobs-filters">
          <div className="filter-group">
            <label>Location:</label>
            <select>
              <option>All Locations</option>
              <option>Remote</option>
              <option>San Francisco</option>
              <option>New York</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Job Type:</label>
            <select>
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Experience:</label>
            <select>
              <option>All Levels</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>
        </div>

        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div className="job-title-section">
                  <h3 className="job-title">
                    <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                  </h3>
                  <p className="company-name">🏢 {job.company}</p>
                </div>
                <div className="job-type-badge">
                  {job.type}
                </div>
              </div>

              <div className="job-details">
                <div className="job-meta">
                  <span className="location">📍 {job.location}</span>
                  <span className="salary">💰 {job.salary}</span>
                  <span className="posted">📅 {job.posted}</span>
                  {job.remote && <span className="remote-badge">🌐 Remote</span>}
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <div className="requirements-tags">
                    {job.requirements.map((req, index) => (
                      <span key={index} className="requirement-tag">{req}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="job-actions">
                <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                  Apply Now
                </Link>
                <button className="btn btn-outline">Save Job</button>
              </div>
            </div>
          ))}
        </div>

        <div className="job-search-tips">
          <h2>Job Search Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📝</div>
              <h3>Optimize Your Resume</h3>
              <p>Use our AI-powered resume analyzer to improve your chances</p>
              <Link to="/resume" className="btn btn-outline btn-sm">Analyze Resume</Link>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🎤</div>
              <h3>Practice Interviews</h3>
              <p>Prepare for interviews with our AI interview simulator</p>
              <Link to="/ai-interview" className="btn btn-outline btn-sm">Practice Now</Link>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🎯</div>
              <h3>Skill Matching</h3>
              <p>Find jobs that match your skills and experience level</p>
              <button className="btn btn-outline btn-sm">Find Matches</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
