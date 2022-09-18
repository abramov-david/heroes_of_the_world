import React from "react";
import "./Powerstats.css";

export default function Powerstats(props) {
  return (
    <div className="powerstats-container">
      <h2>Powerstats</h2>
      <p>
        intelligence: <span>{props.intelligence}</span>
      </p>
      <p>
        strength: <span>{props.strength}</span>
      </p>
      <p>
        speed: <span>{props.speed}</span>
      </p>
      <p>
        durability: <span>{props.durability}</span>
      </p>
      <p>
        power: <span>{props.power}</span>
      </p>
      <p>
        combat: <span>{props.combat}</span>
      </p>
    </div>
  );
}
