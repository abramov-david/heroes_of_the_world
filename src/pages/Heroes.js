import React from "react";
import classes from "./Heroes.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import Hero_card from "../components/Hero_card";

export default function Heroes() {
  return (
    <div className={classes.main}>
      <Header />
      <Hero_card />
      <Footer />
    </div>
  );
}
