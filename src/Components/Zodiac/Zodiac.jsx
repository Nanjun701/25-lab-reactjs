import { useState } from "react";
import zodiacData from "../../data/zodiac.json";
import "./Zodiac.css";

export default function Zodiac() {
  const allTraits = Object.keys(Object.values(zodiacData)[0]).filter(
    (t) => !["element", "dateRange", "image"].includes(t)
  );

  const [selectedTrait, setSelectedTrait] = useState(""); 
  const [sortedZodiac, setSortedZodiac] = useState(Object.entries(zodiacData));
  const [flipped, setFlipped] = useState({}); 

  const handleSort = (trait) => {
    setSelectedTrait(trait);
    const sorted = Object.entries(zodiacData).sort(
      (a, b) => b[1][trait] - a[1][trait]
    );
    setSortedZodiac(sorted);
  };

  const handleFlip = (name) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const displayedZodiac =
    selectedTrait === "" ? sortedZodiac : sortedZodiac.slice(0, 6);

  return (
    <div className="zodiac-container">
      <h1>Zodiac Traits</h1>

      <div className="trait-buttons">
        {allTraits.map((trait) => (
          <button
            key={trait}
            className={selectedTrait === trait ? "active" : ""}
            onClick={() => handleSort(trait)}
          >
            {trait.charAt(0).toUpperCase() + trait.slice(1)}
          </button>
        ))}
        <button
          className={!selectedTrait ? "active" : ""}
          onClick={() => {
            setSelectedTrait("");
            setSortedZodiac(Object.entries(zodiacData));
          }}
        >
          Show All
        </button>
      </div>

      <div className="zodiac-list">
        {displayedZodiac.map(([name, info], index) => (
          <div
            key={name}
            className={`zodiac-card ${flipped[name] ? "flipped" : ""}`}
            onClick={() => handleFlip(name)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={info.image} alt={name} className="zodiac-img" />
                <span className="rank">{index + 1}</span>
                <span className="name">{name}</span>
              </div>

              <div className="card-back">
                <span className="element">{info.element}</span>
                <span className="date">{info.dateRange}</span>
                {selectedTrait && (
                  <span className="score">
                    {selectedTrait}: {info[selectedTrait]}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
