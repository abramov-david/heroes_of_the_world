import React from "react";
import classes from "./Heroes.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer.js";

export default function Heroes() {
  return (
    <div className={classes.main}>
      <Header />
      <Footer />
    </div>
  );
}
