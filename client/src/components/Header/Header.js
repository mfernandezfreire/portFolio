import React from "react";

import Fade from "react-reveal/Fade";

import "./Header.css";

import Background from "../Background/Background";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Flecha from "../FlechaDown/FlechaDown";

const Header = () => {
  return (
    <div className="Header container-fluid">
      <Background type={"code"} />
      <Flecha delay={4} />
      <Logo />
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-3 mt-sm-5">
        <Button titulo={"Sobre mi"} />
        <Button titulo={"Mis proyectos"} />
        <Button titulo={"Hablemos"} />
      </div>
    </div>
  );
};

export default Header;
