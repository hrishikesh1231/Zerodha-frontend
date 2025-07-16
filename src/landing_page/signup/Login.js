import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
   
      const res = await axios.post('http://localhost:3002/login', formData,{ withCredentials: true}).then(()=>{
      toast.success('Login successful ✅');
      setTimeout(() => {
        window.location.href = process.env.REACT_APP_BACKEND_URL; // ✅ Redirect to dashboard
      }, 2000);
      }).catch((err)=>{
        toast.error(err.response?.data?.msg || 'Invalid username or password ❌');
      })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Log In</button>
        <a href='/signUp'>signUp</a>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Login;
