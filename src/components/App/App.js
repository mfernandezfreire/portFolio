import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
