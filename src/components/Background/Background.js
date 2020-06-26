import React from "react";

import "./Background.css";

import ImageBackground from "../BackgroundImage/BackgroundImage";

//Code
import reactJS from "../../images/backgroundCode/reactJS.png";
import html5 from "../../images/backgroundCode/html5.png";
import css from "../../images/backgroundCode/css.png";
import js from "../../images/backgroundCode/js.png";
import mongo from "../../images/backgroundCode/mongo.png";
import github from "../../images/backgroundCode/github.png";
import git from "../../images/backgroundCode/git.png";
import angular from "../..//images/backgroundCode/angular.png";

//PersonalBranding
import cbd from "../../images/backgroundPersonalBrand/bgPersonalBrandCBD.png";
import cbi from "../../images/backgroundPersonalBrand/bgPersonalBrandCBI.png";
import engranaje from "../../images/backgroundPersonalBrand/bgPersonalBrandEngranaje.png";
import logo from "../../images/backgroundPersonalBrand/bgPersonalBrandLogo.png";
import mano from "../../images/backgroundPersonalBrand/bgPersonalBrandMano.png";
import olivo from "../../images/backgroundPersonalBrand/bgPersonalBrandOlive.png";
import cBraces from "../../images/backgroundPersonalBrand/bgBrandcurlyBraces.png";

const Background = (props) => {
  const backgrounds = {
    code: [
      { logo: reactJS, class: "col-6 col-sm-4 col-lg-3" },
      { logo: html5, class: "col-6 col-sm-4 col-lg-3" },
      { logo: css, class: "col-6 col-sm-4 col-lg-3" },
      { logo: js, class: "col-6 col-sm-4 col-lg-3" },
      { logo: mongo, class: "col-6 col-sm-4 col-lg-3" },
      { logo: github, class: "col-6 col-sm-4 col-lg-3" },
      { logo: git, class: "col-6 col-sm-4 col-lg-3" },
      { logo: angular, class: "col-6 col-sm-4 col-lg-3" },
      { logo: js, class: "d-none d-sm-block col-sm-4 d-lg-none" },
    ],
    personalBrand: [
      { logo: logo, class: "col-6 col-sm-4 col-lg-3" },
      { logo: cbd, class: "col-6 col-sm-4 col-lg-3" },
      { logo: engranaje, class: "col-6 col-sm-4 col-lg-3" },
      { logo: logo, class: "col-6 col-sm-4 col-lg-3" },
      { logo: cbi, class: "col-6 col-sm-4 col-lg-3" },
      { logo: mano, class: "col-6 col-sm-4 col-lg-3" },
      { logo: olivo, class: "col-6 col-sm-4 col-lg-3" },
      { logo: cBraces, class: "col-6 col-sm-4 col-lg-3" },
      { logo: mano, class: "d-none d-sm-block col-sm-4 d-lg-none" },
    ],
  };

  return (
    <div className="Background row justify-content-center align-items-center p-3">
      {props.type === "code" ? (
        <div className="row">
          {backgrounds.code.map((code) => (
            <ImageBackground name={code.logo} class={code.class} />
          ))}
        </div>
      ) : (
        props.type === "personalBrand" && (
          <div className="row">
            {backgrounds.personalBrand.map((personal) => (
              <ImageBackground name={personal.logo} class={personal.class} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Background;
