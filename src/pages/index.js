import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import { FullPage, Slide } from "react-full-page";
import Page1 from "../components/LandingPage/page1";

const LandingPage = () => {
  return (
    <>
      <FullPage>
        <Slide>
          <Page1 />
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>

      <div>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/timerGameMain"
        >
          <div>Go to Jerry Game Town!</div>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
