import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'John Doe',
    email: localStorage.getItem('userEmail') || 'john@example.com',
    role: localStorage.getItem('userRole') || 'student',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate learner interested in web development and data science.',
    skills: ['JavaScript', 'React', 'Python', 'SQL'],
    avatar: '👤'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userEmail', user.email);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="user-profile">
      <div className="container">
        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your account settings and preferences</p>
        </div>

        <div className="profile-content">
          <div className="profile-main">
            <div className="profile-card">
              <div className="profile-avatar-section">
                <div className="profile-avatar-large">{user.avatar}</div>
                <div className="profile-basic-info">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        className="form-input"
                      />
                      <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="form-input"
                      />
                    </>
                  ) : (
                    <>
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                    </>
                  )}
                  <span className="user-role-badge">{user.role}</span>
                </div>
              </div>

              <div className="profile-actions">
                {isEditing ? (
                  <>
                    <button onClick={handleSave} className="btn btn-primary">
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)} 
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="btn btn-primary"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-section">
                <h3>Personal Information</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <label>Phone:</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={user.phone}
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                        className="form-input"
                      />
                    ) : (
                      <span>{user.phone}</span>
                    )}
                  </div>
                  <div className="detail-item">
                    <label>Location:</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={user.location}
                        onChange={(e) => setUser({...user, location: e.target.value})}
                        className="form-input"
                      />
                    ) : (
                      <span>{user.location}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>About Me</h3>
                {isEditing ? (
                  <textarea
                    value={user.bio}
                    onChange={(e) => setUser({...user, bio: e.target.value})}
                    className="form-input form-textarea"
                    rows="4"
                  />
                ) : (
                  <p>{user.bio}</p>
                )}
              </div>

              <div className="detail-section">
                <h3>Skills</h3>
                <div className="skills-list">
                  {user.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                {isEditing && (
                  <button className="btn btn-outline btn-sm">
                    Add Skill
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="sidebar-section">
              <h3>Account Settings</h3>
              <div className="settings-list">
                <div className="setting-item">
                  <span>Email Notifications</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <span>SMS Notifications</span>
                  <input type="checkbox" />
                </div>
                <div className="setting-item">
                  <span>Profile Visibility</span>
                  <select className="form-input">
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Quick Actions</h3>
              <div className="quick-actions">
                <button className="btn btn-outline btn-sm">
                  Change Password
                </button>
                <button className="btn btn-outline btn-sm">
                  Download Data
                </button>
                <button className="btn btn-outline btn-sm">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Statistics</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-label">Courses Completed:</span>
                  <span className="stat-value">12</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Certificates Earned:</span>
                  <span className="stat-value">8</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Study Hours:</span>
                  <span className="stat-value">156</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Member Since:</span>
                  <span className="stat-value">Jan 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
