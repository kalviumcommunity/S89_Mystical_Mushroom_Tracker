import React from 'react';
import NavBar from './Components/NavBar';
const About = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial"}}>
      <h1>🌿 Mystical Mushroom Tracker 🍄</h1>
      <p>Discover, track, and manage your collection of mystical mushrooms.</p>
      <p>The Mystical Mushroom Tracker app helps you document and manage your mushroom discoveries, making each adventure magical. 🍄✨</p>
      <button style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
      }}>
        Get Started
      </button>
    </div>

  )
}

export default About
