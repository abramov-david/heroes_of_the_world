import React from "react";
import loading from "../assets/loading/loading.jpg";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-container__img">
        <img src={loading} alt="" />
      </div>
      <h1>Loading...</h1>
    </div>
  );
}
