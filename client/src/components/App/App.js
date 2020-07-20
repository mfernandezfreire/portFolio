import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
