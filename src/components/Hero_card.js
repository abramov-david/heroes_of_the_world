import React from "react";
import "./Hero_card.css";
import dc_logo from "../assets/dc_logo_white.png";
import marvel_logo from "../assets/marvel_logo.png";
import dark_horse_logo from "../assets/dark_horse_logo.png";

export default function Hero_card(props) {
  return (
    <div className="hero-card">
      <div className="hero-card__front-side">
        <div className="hero-card__front-side--background"></div>

        <img src={props.img} className="hero-card__hero" alt="" />
        {props.publisher == "DC Comics" && (
          <img
            src={dc_logo}
            className="hero-card__front-side--logo hero-card__front-side--logo--dc"
            alt=""
          />
        )}
        {props.publisher == "Marvel Comics" && (
          <img
            src={marvel_logo}
            className="hero-card__front-side--logo"
            alt=""
          />
        )}
        {props.publisher == "Dark Horse Comics" && (
          <img
            src={dark_horse_logo}
            className="hero-card__front-side--logo hero-card__front-side--logo--dc"
            alt=""
          />
        )}
        {props.publisher == "Dark Horse Comics" && (
          <img
            src={dark_horse_logo}
            className="hero-card__front-side--logo hero-card__front-side--logo--dc"
            alt=""
          />
        )}
        <p>{props.name}</p>
      </div>
      <div className="hero-card__back-side">
        <img src={props.img} className="hero-card__hero" alt="" />
        <p>click to open</p>
      </div>
    </div>
  );
}
