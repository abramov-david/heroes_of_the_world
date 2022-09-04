import React from "react";
import classes from "./AuthButton.module.css";

export default function AuthButton(props) {
  return <button className={classes.btn}>{props.text}</button>;
}
