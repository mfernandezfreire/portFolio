import React from "react";
import { useEffect } from "react";

import { motion, useAnimation } from "framer";
import { useInView } from "react-intersection-observer";

import "./Background.css";

import reactJS from "../../images/reactJS.png";
import html5 from "../../images/html5.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import mongo from "../../images/mongo.png";
import github from "../../images/github.png";
import git from "../../images/git.png";
import angular from "../..//images/angular.png";

const Background = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(inView, "Background");
    if (inView) {
      controls.start((i) => ({
        opacity: 0.1,
      }));
    }
  }, [controls, inView]);

  const background = [reactJS, html5, css, js, mongo, github, git, angular];
  return (
    <div ref={ref} className="Background d-flex flex-row">
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        alt="Logo de desarrollo web"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{
          delay: Math.floor(Math.random() * 5),
          duration: 5,
        }}
        style={{
          position: "absolute",
          top: "5vw",
          left: "6vw",
          width: "30vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        alt="Logo de desarrollo web"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        style={{
          position: "absolute",
          top: "1vw",
          left: "30vw",
          width: "30vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        alt="Logo de desarrollo web"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        style={{
          position: "absolute",
          bottom: "5vw",
          left: "8vw",
          width: "30vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          bottom: "2vw",
          right: "30vw",
          width: "25vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 3 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          top: "3vw",
          right: "5vw",
          width: "20vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          top: "3vw",
          right: "30vw",
          width: "20vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          top: "15vw",
          right: "15vw",
          width: "16vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          bottom: "7vw",
          right: "8vw",
          width: "20vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 8)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          bottom: "7vw",
          left: "30vw",
          width: "18vw",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default Background;
