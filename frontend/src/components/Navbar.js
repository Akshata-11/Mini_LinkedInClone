import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link className="btn" to="/">
        Home
      </Link>{" "}
      <Link className="btn" to="/login">
        Login
      </Link>{" "}
      <Link className="btn" to="/register">
        Register
      </Link>
      <button className="btn-logout" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
