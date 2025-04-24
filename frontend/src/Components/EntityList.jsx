import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/EntityList.css"

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3009/mush/getmushroom");
      console.log(response.data)
      setEntities(response.data);
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);


  return (
    <div style={{ textAlign: "center"}}>
      <h1>🌟 Mystical Entity Tracker 🌟</h1>
      {entities.map((entity) => (
        <div key={entity.id} className="entity-container">
          <h2>{entity.name}</h2>
          <p><strong>Location:</strong> {entity.location}</p>
          <p><strong>Rarity:</strong> {entity.rarity}</p>
          <p><strong>Discovered By:</strong> {entity.discovered_by}</p>
          <h4>Effects:</h4>
          {entity.effects.map((effect, index) => (
              <p key={index}>• {effect}</p>
            ))
        }
        </div>
      ))}
    </div>
  );
};

export default EntityList;