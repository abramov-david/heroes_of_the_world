import React from "react";
import "./Hero_card.css";
import marvel_logo from "../assets/marvel_logo.png";
import dc_logo from "../assets/dc_logo_white.png";
import dark_horse_logo from "../assets/dark_horse_logo.png";
import nbc_heroes from "../assets/nbcHeroes.png";
import wildstorm from "../assets/wildstorm.png";
import lukas from "../assets/lukas.png";

export default function Hero_card(props) {
  let heroPublisher;

  switch (props.publisher) {
    case "Marvel Comics":
      heroPublisher = (
        <img
          src={marvel_logo}
          alt=""
          className="hero-card__front-side--logo hero-page__marvel-publisher"
        />
      );
      break;
    case "Dark Horse Comics":
      heroPublisher = (
        <img
          src={dark_horse_logo}
          className="hero-card__front-side--logo hero-card__front-side--logo--dc"
          alt=""
        />
      );
      break;
    case "DC Comics":
      heroPublisher = (
        <img
          src={dc_logo}
          className="hero-card__front-side--logo hero-card__front-side--logo--dc"
          alt=""
        />
      );
      break;
    case "NBC - Heroes":
      heroPublisher = (
        <img src={nbc_heroes} alt="" className="hero-card__front-side--logo " />
      );
      break;
    case "Wildstorm":
      heroPublisher = (
        <img
          src={wildstorm}
          alt=""
          className="hero-card__front-side--logo hero-card__front-side--logo--dc"
        />
      );
    case "George Lucas":
      heroPublisher = (
        <img
          src={lukas}
          alt=""
          className="hero-card__front-side--logo hero-card__front-side--logo--lukas"
        />
      );
      break;

    default:
      heroPublisher = (
        <h3 className="hero-card__publisherText">
          {props.publisher ? props.publisher : "Publisher Unknown"}
        </h3>
      );
      break;
  }

  return (
    <div className="hero-card">
      <div className="hero-card__front-side">
        <div className="hero-card__front-side--background"></div>

        <img src={props.img} className="hero-card__hero" alt="" />
        {heroPublisher}
        <p>{props.name}</p>
      </div>
      {}
      <div className="hero-card__back-side">
        <img src={props.img} className="hero-card__hero" alt="" />
        <p>click to open</p>
      </div>
    </div>
  );
}
