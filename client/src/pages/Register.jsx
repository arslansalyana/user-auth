import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await axios.post('/register', { name, email, password });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred");
        console.error(error);
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
      <form style={formStyle} onSubmit={registerUser}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          placeholder="Enter Name..."
          style={inputStyle}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
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
          Submit
        </button>
      </form>
    </div>
  );
}