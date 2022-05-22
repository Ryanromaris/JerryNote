import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../images/bling.gif";
import styles from "../../styles/Timer.module.css";

const Timer = () => {
  const refCount = useRef(0);
  const [view, setView] = useState("landing");
  const [expect, setExpect] = useState(0);
  const [msg, setMsg] = useState("");
  const plus = () => {
    refCount.current = refCount.current + 1;
    makeRandomStar();
  };
  const [time, setTime] = useState(10);

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
      var fadeEffect = setInterval(function () {
        if (!star.style.opacity) {
          star.style.opacity = 1;
        }
        if (star.style.opacity > 0) {
          star.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 100);

      root.append(star);
      setTimeout(() => star.remove(), 3000);
    }
  };

  const start = () => {
    setView("timer");
    setTime(10);
    let stopWatch = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setTimeout(() => clearInterval(stopWatch), 11000);
  };

  const goToResult = () => {
    let expectVal = document.querySelector(".expect").value;
    if (expectVal == refCount.current) {
      setMsg("와! 일치해요! 기록으로 인정됩니다.");
      localStorage.setItem(
        "best",
        Math.max(refCount.current, localStorage.getItem("best"))
      );
      setView("end");
      setExpect(expectVal);
    } else {
      setMsg("틀렸어요ㅠㅠ 기록으로 인정되진 않아요");
      setView("end");
      setExpect(expectVal);
    }
    setView("end");
  };

  useEffect(() => {
    if (time === 0) {
      setTime(10);
      setView("expect");
    }
  });

  return (
    <div>
      <div className={styles.main_container}>
        {view === "landing" ? (
          <>
            <div className={styles.start_box}>
              <h2>Click as much as you can!</h2>
              <h2>And Count your click number!</h2>
              <button className={styles.plusBtn} onClick={start}>
                Start
              </button>
              {localStorage.getItem("best") ? (
                <h2>최고 기록:{localStorage.getItem("best")}</h2>
              ) : (
                <h2>최고기록에 도전하세요!</h2>
              )}
            </div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/timerGameMain"
            >
              <div className={styles.goToHome}>처음으로 돌아가기</div>
            </Link>
          </>
        ) : view === "timer" ? (
          <>
            <div className={styles.timer}>{time}초</div>

            <button className={styles.plusBtn} onClick={plus}>
              +
            </button>
          </>
        ) : view === "expect" ? (
          <>
            몇 번 누르셨다고 생각하시나요??
            <input type="number" className={styles.expect}></input>
            <button
              type="submit"
              className={styles.expectSubmit}
              onClick={goToResult}
            >
              제출!
            </button>
          </>
        ) : view === "end" ? (
          <div className={styles.result_box}>
            <div>실제 클릭 횟수:{refCount.current}</div>
            <div>예상 클릭 횟수:{expect}</div>
            <div>{msg}</div>
            <button
              onClick={() => {
                setView("landing");
                refCount.current = 0;
              }}
            >
              다시하기
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Timer;
