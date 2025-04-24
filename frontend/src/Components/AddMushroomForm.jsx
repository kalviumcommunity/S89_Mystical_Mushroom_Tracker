import React, { useState } from "react";
import axios from "axios";

const AddMushroomForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rarity: "",
    discovered_by: "",
    effects: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3009/mush/postmushroom",formData);
      alert("Mystical mushroom added successfully!");
      setFormData({
        name: "",
        location: "",
        rarity: "",
        discovered_by: "",
        effects: "",
      }); 
    } catch (error) {
      console.log("Error submitting mushroom data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", flexWrap:"wrap"}}>
      <h2>🍄 Add a Mystical Mushroom 🍄</h2>
      <form onSubmit={handleSubmit}>
        <label style={{color:"white"}}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label style={{color:"white"}}>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label style={{color:"white"}}>Rarity:</label>
        <input type="text" name="rarity" value={formData.rarity} onChange={handleChange} required />

        <label style={{color:"white"}}>Discovered By:</label>
        <input type="text" name="discovered_by" value={formData.discovered_by} onChange={handleChange} required />

        <label style={{color:"white"}}>Effects (comma-separated):</label>
        <input type="text" name="effects" value={formData.effects} onChange={handleChange} required />

        <button type="submit">Add Mushroom</button>
      </form>
    </div>
  );
};

export default AddMushroomForm;