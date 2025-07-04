import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8082/api/auth/login', loginData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="username" value={loginData.username} onChange={handleChange} placeholder="Username" required />
        <input className="form-control mb-2" type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" required />
        <button className="btn btn-success w-100">Login</button>
      </form>

      <div className="mt-3 text-center">
        <p>
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
