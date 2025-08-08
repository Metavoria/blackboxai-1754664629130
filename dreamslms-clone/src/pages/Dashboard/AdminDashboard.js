import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel. Manage users, courses, and system settings.</p>
        
        <div className="admin-stats">
          <div className="stat-card">
            <h3>15,234</h3>
            <p>Total Users</p>
          </div>
          <div className="stat-card">
            <h3>1,456</h3>
            <p>Active Courses</p>
          </div>
          <div className="stat-card">
            <h3>892</h3>
            <p>Job Postings</p>
          </div>
          <div className="stat-card">
            <h3>$125,000</h3>
            <p>Monthly Revenue</p>
          </div>
        </div>

        <div className="admin-sections">
          <div className="admin-section">
            <h2>User Management</h2>
            <p>Manage students, trainers, companies, and training centers.</p>
            <button className="btn btn-primary">Manage Users</button>
          </div>
          
          <div className="admin-section">
            <h2>Course Management</h2>
            <p>Oversee course content, approvals, and quality control.</p>
            <button className="btn btn-primary">Manage Courses</button>
          </div>
          
          <div className="admin-section">
            <h2>Job Board Management</h2>
            <p>Monitor job postings and company activities.</p>
            <button className="btn btn-primary">Manage Jobs</button>
          </div>
          
          <div className="admin-section">
            <h2>Analytics & Reports</h2>
            <p>View detailed analytics and generate reports.</p>
            <button className="btn btn-primary">View Analytics</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
