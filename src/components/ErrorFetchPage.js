import React from "react";
import errorFetch from "../assets/error/error_fetch.jpg";
import classes from "./ErrorFetchPage.module.css";

import { useSelector } from "react-redux";

export default function ErrorFetchPage() {
  const errorStatus = useSelector((state) => state.heroes.error);
  return (
    <div className={classes.errorFetchContainer}>
      <div className={classes.errorFetchContainer__img}>
        <img src={errorFetch} alt="" />
      </div>
      <h1>{errorStatus}</h1>
    </div>
  );
}
