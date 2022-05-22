import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Timer.module.css";
import img from "../../images/bling.gif";

const CountMax = () => {
  const [counting, setCounting] = useState(0);
  const [view, setView] = useState("landing");
  const plus = () => {
    setCounting((counting) => counting + 1);
    makeRandomStar();
  };

  const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const makeRandomStar = () => {
    let x = generateRandomInt(0, 95);
    let y = generateRandomInt(0, 90);

    if (x >= 10 && x <= 75 && y >= 30 && y <= 60) {
    } else {
      let root = document.querySelector(".main_container");
      let star = document.createElement("img");
      star.style.width = "60px";
      star.style.height = "60px";
      star.setAttribute("src", img);
      star.style.left = `${x}vw`;
      star.style.top = `${y}vh`;
      star.style.position = "absolute";
      let fadeEffect = setInterval(function () {
        if (!star.style.opacity) {
          star.style.opacity = 1;
        }
        if (star.style.opacity > 0) {
          star.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 300);

      root.append(star);
      setTimeout(() => star.remove(), 3000);
    }
  };
  const [time, setTime] = useState(10);

  const start = () => {
    setView("timer");
    setTime(10);
    let stopWatch = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setTimeout(() => clearInterval(stopWatch), 11000);
  };

  const goToResult = () => {
    localStorage.setItem(
      "bestCount",
      Math.max(counting, localStorage.getItem("bestCount"))
    );
  };

  useEffect(() => {
    if (document.querySelector(".click_num")) {
      let a = document.querySelector(".click_num");
      if (counting <= 10) {
        a.style.color = "green";
      } else if (counting <= 30) {
        a.style.color = "yellow";
      } else if (counting <= 50) {
        a.style.color = "orange";
      } else if (counting <= 80) {
        a.style.color = "red";
      }
    }

    if (time === 0) {
      setTime(10);
      setView("end");
      goToResult();
    }
  });
  useEffect(() => {
    if (!localStorage.getItem("bestCount")) {
      console.log("NO");
    }
  }, []);

  return (
    <div>
      <div className={styles.main_container}>
        {view === "landing" ? (
          <>
            <div className={styles.start_box}>
              <h2>Click as much as you can!</h2>
              <button className={styles.plusBtn} onClick={start}>
                Start
              </button>
              {localStorage.getItem("bestCount") ? (
                <h2>최고 기록:{localStorage.getItem("bestCount")}</h2>
              ) : (
                <h2>최고기록에 도전하세요!</h2>
              )}
            </div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/timerGameMain/"
            >
              <div className={styles.goToHome}>처음으로 돌아가기</div>
            </Link>
          </>
        ) : view === "timer" ? (
          <>
            <div className={styles.timer}>남은 시간: {time}초</div>
            <div className={styles.click_num} style={{ fontSize: "40px" }}>
              {counting}
            </div>
            <button className={styles.plusBtn} onClick={plus}>
              +
            </button>
          </>
        ) : view === "end" ? (
          <>
            <div className={styles.result_box}>
              <div>클릭 횟수:{counting}</div>
              <div>최고 기록: {localStorage.getItem("bestCount")}</div>
            </div>
            <button
              style={{ margin: "20px" }}
              onClick={() => {
                setView("landing");
                setCounting(0);
              }}
            >
              다시하기
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CountMax;
