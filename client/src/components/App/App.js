import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
