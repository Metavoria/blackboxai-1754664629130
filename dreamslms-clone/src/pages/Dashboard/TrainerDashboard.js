import React from 'react';

const TrainerDashboard = () => {
  return (
    <div className="trainer-dashboard">
      <div className="container">
        <h1>Trainer Dashboard</h1>
        <p>Manage your courses and interact with students.</p>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>8</h3>
            <p>Active Courses</p>
          </div>
          <div className="stat-card">
            <h3>245</h3>
            <p>Students</p>
          </div>
          <div className="stat-card">
            <h3>4.9</h3>
            <p>Rating</p>
          </div>
          <div className="stat-card">
            <h3>$2,450</h3>
            <p>Monthly Earnings</p>
          </div>
        </div>

        <div className="trainer-sections">
          <div className="section">
            <h2>My Courses</h2>
            <p>Manage your course content and student progress.</p>
            <button className="btn btn-primary">View Courses</button>
          </div>
          
          <div className="section">
            <h2>Student Messages</h2>
            <p>Chat with your students and provide support.</p>
            <button className="btn btn-primary">View Messages</button>
          </div>
          
          <div className="section">
            <h2>Earnings</h2>
            <p>Track your earnings and payment history.</p>
            <button className="btn btn-primary">View Earnings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
