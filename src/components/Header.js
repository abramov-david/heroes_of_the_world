import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import profile_img from "../assets/main_page/svg_reg/user_5.svg";
import hotw_logo from "../assets/header/hotw.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const classHeader =
    props.scroll > 200
      ? `${classes.main} ${classes.scrolledHeader}`
      : `${classes.main}`;

  return (
    <section className={classHeader}>
      <Link to="/">
        {" "}
        <img src={hotw_logo} alt="" />
      </Link>

      <div className={classes.links}>
        <Link to="/collection">my collection</Link>
        <Link to="/heroes">heroes</Link>
        <Link to="/community">community</Link>
        <Link to="/contacts">contacts</Link>
      </div>
      <div className={classes.profile}>
        <img src={profile_img} id="img_profile" alt="" />
        <p>Welcome, David !</p>
      </div>
      <FontAwesomeIcon className={classes.burgerIcon} icon={faBars} />
    </section>
  );
}
