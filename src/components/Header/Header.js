import React from "react";

import "./Header.css";

import Background from "../Background/Background";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Flecha from "../FlechaDown/FlechaDown";

const Header = () => {
  return (
    <div className="Header container-fluid">
      <Background />
      <Flecha />
      <Logo />
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <Button titulo={"Sobre mi"} />
        <Button titulo={"Mis proyectos"} />
        <Button titulo={"Hablemos"} />
      </div>
    </div>
  );
};

export default Header;
