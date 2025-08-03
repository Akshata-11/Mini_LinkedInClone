import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./css/Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="reg-heading">
          Welcome Back!! <span>Sign Up Here</span>{" "}
        </h2>

        <input
          className="reg-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="reg-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="reg-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="reg-input"
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
        />
        <button className="reg-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
