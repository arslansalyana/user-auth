import React from 'react';
import ProfilePic from '../assets/license-picture.png';

export default function Home() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };

  const navStyle = {
    width: '100%',
    backgroundColor: '#004080',
    padding: '10px',
    color: 'white',
    textAlign: 'center'
  };

  const sectionStyle = {
    backgroundColor: 'white',
    padding: '20px',
    margin: '20px 0',
    width: '80%',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '5px'
  };

  const profileStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const courseCardStyle = {
    backgroundColor: '#e0e0e0',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px'
  };

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <h1>University LMS</h1>
      </nav>

      <div style={sectionStyle}>
        <h2>Announcements</h2>
        <p>Welcome to the new semester! Please check your course schedules and join the introductory sessions.</p>
        <p>Due to maintenance, the library will be closed this weekend.</p>
      </div>

      <div style={sectionStyle}>
        <h2>Your Courses</h2>
        <div style={courseCardStyle}>
          <h3>Web Technologies</h3>
          <p>Instructor: Miss Mehak</p>
          <p>Next Class: Monday, 10 AM</p>
        </div>
        <div style={courseCardStyle}>
          <h3>GeoSpatila Project Management</h3>
          <p>Instructor: Lecturer Junaid Aziz</p>
          <p>Next Class: Tuesday, 2 PM</p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={profileStyle}>
          <div>
            <h2>Profile</h2>
            <p>Name: Arslan</p>
            <p>Major: Geo Informatics Engineering</p>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            style={{ borderRadius: '50%', width: '110px', height: '100px'}}
          />
        </div>
      </div>
    </div>
  );
}