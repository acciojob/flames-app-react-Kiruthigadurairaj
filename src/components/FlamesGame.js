import React, { useState } from "react";

export default function FlamesGame() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationShipStatus, setRelationShipStatus] = useState("");

  const handleClick = () => {
    if (!firstName.trim() || !secondName.trim()) {
      setRelationShipStatus("Please Enter valid input");
      return;
    }

    let name1 = firstName.toLowerCase().replace(/\s/g, "").split("");
    let name2 = secondName.toLowerCase().replace(/\s/g, "").split("");

    for (let i = 0; i < name1.length; i++) {
      const index = name2.indexOf(name1[i]);
      if (index !== -1) {
        name1[i] = "";
        name2[index] = "";
      }
    }

    const totalRemaining = [...name1.join(""), ...name2.join("")].length;
    const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    const result = totalRemaining % 6;

    setRelationShipStatus(flames[result]);
  };

  const handleClear = () => {
    setFirstName("");
    setSecondName("");
    setRelationShipStatus("");
  };

  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        placeholder="Enter second name"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        onClick={handleClick}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <h3 data-testid="answer">{relationShipStatus}</h3>
    </div>
  );
}
