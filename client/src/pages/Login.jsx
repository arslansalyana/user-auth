import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function Login() {
  const navigate = useNavigate();
  const { fetchUserProfile } = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', { email, password });
      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchUserProfile(); // Fetch the user profile after a successful login
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        if (error.response.status === 400) {
          toast.error("No user found with this email!");
        } else if (error.response.status === 401) {
          toast.error("Invalid password");
        } else if (error.response.status === 500) {
          toast.error("Internal Server Error. Please try again later.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    width: '300px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#004080',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonHoverStyle = {
    backgroundColor: '#003366'
  };

  const handleButtonHover = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleButtonHoverOut = (e) => {
    Object.assign(e.target.style, { backgroundColor: '#004080' });
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={loginUser}>
        <label style={labelStyle}>Email</label>
        <input 
          type="email" 
          placeholder="Enter Email..." 
          style={inputStyle}
          value={data.email} 
          onChange={(e) => setData({ ...data, email: e.target.value })} 
        />
        <label style={labelStyle}>Password</label>
        <input 
          type="password" 
          placeholder="Enter Password..." 
          style={inputStyle}
          value={data.password} 
          onChange={(e) => setData({ ...data, password: e.target.value })} 
        />
        <button 
          type="submit" 
          style={buttonStyle} 
          onMouseEnter={handleButtonHover} 
          onMouseLeave={handleButtonHoverOut}
        >
          Login
        </button>
      </form>
    </div>
  );
}