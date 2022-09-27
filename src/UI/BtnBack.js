import React from "react";
import { Link } from "react-router-dom";
import "./BtnBack.css";

export default function BtnBack() {
  return (
    <Link to="/heroes" className="btnBack">
      Back to heroes
    </Link>
  );
}
