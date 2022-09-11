import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import dc_logo from "../assets/dc_logo.png";
import marvel_logo from "../assets/marvel_logo.png";
import dark_horse_logo from "../assets/dark_horse_logo.png";

export default function Footer() {
  return (
    <div className={classes.main}>
      <section className={classes.logoBlock}>
        <img src={dc_logo} alt="" />
        <img src={marvel_logo} alt="" />
        <img src={dark_horse_logo} alt="" />
      </section>
      <section className={classes.footer__links}>
        <div className={classes.links}>
          <Link to="/terms">terms of use</Link>
          <hr />
          <Link to="/privacy">privacy policy</Link>
          <hr />
          <Link to="/license">license agreement</Link>
          <hr />
          <Link to="/acessibility">acessibility</Link>
        </div>
        <p className={classes.copyRight}>
          ™ &#38; © 2022 MARVEL &#38; DC AND WBEI. ALL RIGHTS RESERVED
        </p>
      </section>
    </div>
  );
}
