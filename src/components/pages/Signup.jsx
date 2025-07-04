import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8082/api/auth/register', user);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
        <input className="form-control mb-2" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Signup;
