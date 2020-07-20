import React from "react";

import "./Header.css";

import Background from "../Background/Background";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Flecha from "../FlechaDown/FlechaDown";

const Header = () => {
  return (
    <div className="Header container-fluid">
      <Background type={"code"} opacity={0.3} />
      <Flecha />
      <Logo />
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-3 mt-sm-5">
        <Button titulo={"Sobre mi"} link={"Profile"} duration={1000} />
        <Button titulo={"Proyectos"} link={"Projects"} duration={2000} />
        <Button titulo={"Hablemos"} link={"Contact"} duration={3000} />
      </div>
    </div>
  );
};

export default Header;
