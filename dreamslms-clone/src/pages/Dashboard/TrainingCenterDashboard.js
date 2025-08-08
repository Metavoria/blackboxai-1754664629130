import React from 'react';

const TrainingCenterDashboard = () => {
  return (
    <div className="training-center-dashboard">
      <div className="container">
        <h1>Training Center Dashboard</h1>
        <p>Manage your courses, trainers, and student enrollments.</p>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>45</h3>
            <p>Active Courses</p>
          </div>
          <div className="stat-card">
            <h3>18</h3>
            <p>Trainers</p>
          </div>
          <div className="stat-card">
            <h3>1,234</h3>
            <p>Enrolled Students</p>
          </div>
          <div className="stat-card">
            <h3>4.8</h3>
            <p>Average Rating</p>
          </div>
        </div>

        <div className="center-sections">
          <div className="section">
            <h2>Course Management</h2>
            <p>Create, edit, and manage your training courses.</p>
            <button className="btn btn-primary">Manage Courses</button>
          </div>
          
          <div className="section">
            <h2>Trainer Management</h2>
            <p>Add and manage your training staff.</p>
            <button className="btn btn-primary">Manage Trainers</button>
          </div>
          
          <div className="section">
            <h2>Student Analytics</h2>
            <p>Track student progress and performance.</p>
            <button className="btn btn-primary">View Analytics</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCenterDashboard;
