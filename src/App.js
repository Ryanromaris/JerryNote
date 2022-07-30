import React from "react";
import { Route, Routes } from "react-router-dom";
import Timer from "./pages/games/Timer";
import CountMax from "./pages/games/countMax";
import Main from "./pages/games/Main";
import LandingPage from "./pages/index";
import TestGame from "./pages/games/TestGame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/jerrynote" element={<LandingPage />} />
        <Route path="/timerGameMain" element={<Main />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/countMax" element={<CountMax />} />
        <Route path="/testGame" element={<TestGame />} />
      </Routes>
    </div>
  );
}

export default App;
