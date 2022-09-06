import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import profile_img from "../assets/main_page/svg_reg/user_5.svg";
import hotw_logo from "../assets/header/hotw.svg";

export default function Header() {
  return (
    <section className={classes.main}>
      <img src={hotw_logo} alt="" />
      <div className={classes.links}>
        <Link to="/main">my collection</Link>
        <Link to="/heroes">heroes</Link>
        <Link to="/community">community</Link>
        <Link to="/contacts">contacts</Link>
      </div>
      <div className={classes.profile}>
        <img src={profile_img} id="img_profile" alt="" />
        <p>Welcome, David !</p>
      </div>
    </section>
  );
}
