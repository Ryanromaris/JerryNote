import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/timerGameMain"
      >
        <div>Go to Jerry Game Town!</div>
      </Link>
    </div>
  );
};

export default LandingPage;
