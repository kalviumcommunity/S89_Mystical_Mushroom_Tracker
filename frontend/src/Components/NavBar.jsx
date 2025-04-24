import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      margin:"20px"
    }}>
      <div onClick={() => navigate("/")}>
        <button style={buttonStyle}>About</button>
      </div>

      <div onClick={() => navigate("/mushitem")}>
        <button style={buttonStyle}>Home</button>
      </div>

      <div onClick={()=>navigate("/entitieslist")}>
        <button style={buttonStyle}>EntityList</button>
      </div>

      <div onClick={()=>navigate("/AddList")}>
        <button style={buttonStyle}>Add Mushroom</button>
      </div>
    </div>
  );
};



export default NavBar;
