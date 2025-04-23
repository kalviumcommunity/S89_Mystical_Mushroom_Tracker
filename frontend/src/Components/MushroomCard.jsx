import React from "react";
import "../Styles/MushroomCard.css";

const Mushroom = () => {
  const mushroomEntries = [
    {
      id: 1,
      name: "Luminous Cap",
      description: "Glows in the dark and grants night vision.",
      location: "Enchanted Forest",
      rarity: "Rare",
      effects: ["Glowing aura", "Night vision"],
      image: "https://static.toiimg.com/photo/74866653.cms",
      discoveredBy: "Elder Myco"
    },
    {
      id: 2,
      name: "Shadow Spore",
      description: "Casts shadows even in bright light.",
      location: "Darkwood Hollow",
      rarity: "Very Rare",
      effects: ["Invisibility", "Shadow meld"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFQn5SZmqGJIKKJyxLjZyvuXhf2L_e7oAhwfQWeQ2z3JZ_dYB13e2_kWwjZSBrwn5TH0&usqp=CAU",
      discoveredBy: "Rogue Alchemist"
    },
    {
      id: 3,
      name: "Crimson Veil",
      description: "Used in ancient rituals for healing.",
      location: "Bloodroot Caverns",
      rarity: "Legendary",
      effects: ["Healing boost", "Poison resistance"],
      image: "https://www.first-nature.com/fungi/images/phallaceae/phallus-indusiatus1.jpg",
      discoveredBy: "Oracle Vex"
    },
    {
      id: 4,
      name: "Frostcap",
      description: "Shivers even without wind.",
      location: "Frozen Glade",
      rarity: "Uncommon",
      effects: ["Cold resistance", "Chilling touch"],
      image: "https://wiki.guildwars2.com/images/thumb/a/a0/Toxic_Frostcap.jpg/240px-Toxic_Frostcap.jpg",
      discoveredBy: "Ice Wanderer"
    },
    {
      id: 5,
      name: "Sunburst Shroom",
      description: "Radiates warmth and joy.",
      location: "Golden Meadows",
      rarity: "Common",
      effects: ["Energy boost", "Mood enhancement"],
      image: "https://images.stockcake.com/public/d/7/3/d73dc84e-9958-43a4-8cc3-f8827da37667_medium/woodland-mushroom-cluster-stockcake.jpg",
      discoveredBy: "Druid Elara"
    },
    {
      id: 6,
      name: "Ethereal Puffball",
      description: "Vanishing spores used for spirit travel.",
      location: "Spirit Grove",
      rarity: "Mythical",
      effects: ["Spirit communication", "Levitation"],
      image: "https://thumbs.dreamstime.com/b/enchanting-puffball-mushrooms-releasing-spores-misty-forest-three-lycoperdon-perlatum-emerge-moss-wisp-smoke-close-up-358456163.jpg",
      discoveredBy: "Seer Althos"
    },
    {
      id: 7,
      name: "Void Fungus",
      description: "Pulls energy from the air.",
      location: "Abyssal Depths",
      rarity: "Extremely Rare",
      effects: ["Reality distortion", "Mind expansion"],
      image: "https://img.freepik.com/free-photo/closeup-selective-focus-wild-mushroom-growing-forest-surrounded-by-leaves_181624-23692.jpg?t=st=1744174302~exp=1744177902~hmac=71a187cdc78ef97d501cc103af6e43db49592fda719d7f6fb5aa370e43d73478",
      discoveredBy: "Archmage Zorath"
    },
    {
      id: 8,
      name: "Dreamcap",
      description: "Used in lucid dreaming ceremonies.",
      location: "Mystic Woods",
      rarity: "Rare",
      effects: ["Lucid dreaming", "Mind clarity"],
      image: "https://livinginwildstar.com/images/items/plants/dreamcap_mushroom_screenshot_1.jpg",
      discoveredBy: "Sage Lirien"
    },
    {
      id: 9,
      name: "Thunderstalk",
      description: "Crackles softly in storms.",
      location: "Stormpeak Cliffs",
      rarity: "Uncommon",
      effects: ["Static charge", "Lightning affinity"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHlHMMj01mIGKY13s_oN9PdzS8xLWrxJEPg&s",
      discoveredBy: "Stormcaller Brann"
    },
    {
      id: 10,
      name: "Ember Gills",
      description: "Survives in volcanic areas.",
      location: "Molten Crater",
      rarity: "Rare",
      effects: ["Fire resistance", "Heat absorption"],
      image: "https://treetimearchaeology.wordpress.com/wp-content/uploads/2019/04/true-morel.jpg",
      discoveredBy: "Pyromancer Ignis"
    }
  ];

  return (
    <div>
      <h1>Musroom Home Page</h1>
      {
       mushroomEntries.map((entry) => (
        <div key={entry.id} className="mushroomcard">
          <img src={entry.image} alt={`${entry.name} image`} />
          <h2>{entry.name}</h2>
          <p><strong>Description:</strong> {entry.description}</p>
          <p><strong>Location:</strong> {entry.location}</p>
          <p><strong>Rarity:</strong> {entry.rarity}</p>
          <p><strong>Discovered By:</strong> {entry.discoveredBy}</p>
          <div>
            <h4>Effects:</h4>
            {entry.effects.map((effect, index) => (
              <p key={index}>• {effect}</p>
            ))
        }
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Mushroom;
