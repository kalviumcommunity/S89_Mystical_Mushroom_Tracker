import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
    }}>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <button style={buttonStyle}>About</button>
      </div>

      <div onClick={() => navigate("/mushitem")} style={{ cursor: "pointer" }}>
        <button style={buttonStyle}>Home</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default NavBar;
