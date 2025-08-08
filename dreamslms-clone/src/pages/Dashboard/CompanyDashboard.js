import React from 'react';

const CompanyDashboard = () => {
  return (
    <div className="company-dashboard">
      <div className="container">
        <h1>Company Dashboard</h1>
        <p>Manage your job postings and find the perfect candidates.</p>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>24</h3>
            <p>Active Job Postings</p>
          </div>
          <div className="stat-card">
            <h3>156</h3>
            <p>Applications Received</p>
          </div>
          <div className="stat-card">
            <h3>12</h3>
            <p>Interviews Scheduled</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Positions Filled</p>
          </div>
        </div>

        <div className="company-sections">
          <div className="section">
            <h2>Job Management</h2>
            <p>Create, edit, and manage your job postings.</p>
            <button className="btn btn-primary">Manage Jobs</button>
          </div>
          
          <div className="section">
            <h2>Candidate Search</h2>
            <p>Search and filter candidates using AI-powered matching.</p>
            <button className="btn btn-primary">Search Candidates</button>
          </div>
          
          <div className="section">
            <h2>Interview Scheduling</h2>
            <p>Schedule and manage online interviews with candidates.</p>
            <button className="btn btn-primary">Schedule Interviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
