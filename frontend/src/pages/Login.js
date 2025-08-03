import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./css/Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="Login-container">
      <form onSubmit={handleSubmit}>
        <h2 className="login-heading">Ready to Post? Sign In</h2>
        <input
          className="login-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="login-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="login-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
