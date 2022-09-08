import React from "react";
import "./Hero_card.css";
import dc_logo from "../assets/dc_logo_white.png";
import marvel_logo from "../assets/marvel_logo.png";
import batman_img from "../assets/main_page/index_6.jpg";

export default function Hero_card() {
  return (
    <div className="hero-card">
      <div className="hero-card__front-side">
        <div className="hero-card__front-side--background"></div>
        <img src={batman_img} className="hero-card__hero" alt="" />
        <img src={dc_logo} className="hero-card__front-side--logo" alt="" />
        <p>BATMAN</p>
      </div>
      <div className="hero-card__back-side">
        <img src={batman_img} className="hero-card__hero" alt="" />
        <p>click to open</p>
      </div>
    </div>
  );
}
