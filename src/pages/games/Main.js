import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Timer.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.box}>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/countMax"
          >
            <div className={styles.GameBtn}>Go to Count Max Game!</div>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/timer"
          >
            <div className={styles.GameBtn}>Go to Count Max Expect Game!</div>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/testGame"
          >
            <div className={styles.GameBtn}>
              Go to I don't know what it is Yet
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
