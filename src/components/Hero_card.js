import React from "react";
import classes from "./Hero_card.module.css";
import dc_logo from "../assets/dc_logo_white.png";
import marvel_logo from "../assets/marvel_logo.png";
import batman_img from "../assets/main_page/index_6.jpg";

export default function Hero_card() {
  return (
    <div className={classes.card}>
      <div className={classes.front__side}>
        <div className={classes.front__side__background}></div>
        <img src={batman_img} className={classes.hero} alt="" />
        <img src={dc_logo} className={classes.logo} alt="" />
        <p>BATMAN</p>
      </div>
      <div className={classes.back__side}>
        <img src={batman_img} className={classes.hero} alt="" />
        <p>click to open</p>
      </div>
    </div>
  );
}
