import React from "react";
import { useEffect } from "react";

import { motion, useAnimation } from "framer";
import { useInView } from "react-intersection-observer";

import "./CodeLanguajes.css";

import reactJS from "../../images/reactJS.png";
import html5 from "../../images/html5.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import mongo from "../../images/mongo.png";
import github from "../../images/github.png";
import angular from "../../images/angular.png";
import nodeJS from "../../images/nodeJS.png";
import express from "../../images/express.png";

const CodeLanguajes = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(inView, "Background");
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: {
          delay: i * 1,
          duration: 5,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="codelanguajes">
      <motion.h4
        custom={4}
        className="mb-2"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Lenguajes de programación
      </motion.h4>
      <div className="d-flex flex-row justify-content-center flex-wrap p-2 mb-2">
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={4}
            className="codelanguajeslogo img-fluid"
            src={reactJS}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={5}
            className="codelanguajeslogo img-fluid"
            src={angular}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1 ">
          <motion.img
            custom={6}
            className="codelanguajeslogo img-fluid"
            src={js}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1 ">
          <motion.img
            custom={7}
            className="codelanguajeslogo img-fluid"
            src={html5}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={8}
            className="codelanguajeslogo img-fluid"
            src={css}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={9}
            className="codelanguajeslogo img-fluid"
            src={mongo}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={10}
            className="codelanguajeslogo img-fluid"
            src={github}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={11}
            className="codelanguajeslogo img-fluid"
            src={nodeJS}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
        <div className="col-4 col-md-2 m-1">
          <motion.img
            custom={12}
            className="codelanguajeslogo img-fluid"
            src={express}
            alt="reactJs"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 90 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeLanguajes;
