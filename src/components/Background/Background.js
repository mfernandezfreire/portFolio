import React from "react";

import "./Background.css";

import ImageCode from "../ImageCode/ImageCode";

import reactJS from "../../images/backgroundCode/reactJS.png";
import html5 from "../../images/backgroundCode/html5.png";
import css from "../../images/backgroundCode/css.png";
import js from "../../images/backgroundCode/js.png";
import mongo from "../../images/backgroundCode/mongo.png";
import github from "../../images/backgroundCode/github.png";
import git from "../../images/backgroundCode/git.png";
import angular from "../..//images/backgroundCode/angular.png";

const Background = () => {
  const backgrounds = [
    { logo: reactJS, class: "col-6 col-sm-4 col-lg-3" },
    { logo: html5, class: "col-6 col-sm-4 col-lg-3" },
    { logo: css, class: "col-6 col-sm-4 col-lg-3" },
    { logo: js, class: "col-6 col-sm-4 col-lg-3" },
    { logo: mongo, class: "col-6 col-sm-4 col-lg-3" },
    { logo: github, class: "col-6 col-sm-4 col-lg-3" },
    { logo: git, class: "col-6 col-sm-4 col-lg-3" },
    { logo: angular, class: "col-6 col-sm-4 col-lg-3" },
    { logo: js, class: "d-none d-sm-block col-sm-4 d-lg-none" },
  ];

  return (
    <div className="Background row justify-content-center align-items-center p-3">
      <div className="row">
        {backgrounds.map((code) => (
          <ImageCode name={code.logo} class={code.class} />
        ))}
      </div>
    </div>
  );
};

export default Background;
