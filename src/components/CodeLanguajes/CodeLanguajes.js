import React from "react";

import "./CodeLanguajes.css";

import { motion } from "framer";

import reactJS from "../../images/reactJS.png";
import html5 from "../../images/html5.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import mongo from "../../images/mongo.png";
import github from "../../images/github.png";
import angular from "../../images/angular.png";
import nodeJS from "../../images/nodeJS.png";
import express from "../../images/express.png";

const CodeLanguajes = (props) => {
  return (
    <div ref={props.ref} className="row border justify-content-center">
      <motion.h4
        custom={2}
        className="col-12 mb-2"
        initial={{ opacity: 0 }}
        animate={props.controls}
        transition={{ duration: 1 }}
      >
        Lenguajes de programación
      </motion.h4>
      <div ClassName="col-12">
        <div className="row justify-content-center">
          <div className="col-3 col-md-3">
            <motion.img
              custom={5.5}
              className="codelanguajeslogo img-fluid"
              src={reactJS}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={6}
              className="codelanguajeslogo img-fluid"
              src={angular}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95, rotate: -90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1 ">
            <motion.img
              custom={6.5}
              className="codelanguajeslogo img-fluid"
              src={js}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1 ">
            <motion.img
              custom={7}
              className="codelanguajeslogo img-fluid"
              src={html5}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={7.5}
              className="codelanguajeslogo img-fluid"
              src={css}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={8}
              className="codelanguajeslogo img-fluid"
              src={mongo}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={8.5}
              className="codelanguajeslogo img-fluid"
              src={github}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={9}
              className="codelanguajeslogo img-fluid"
              src={nodeJS}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
          <div className="col-3 col-md-2 m-1">
            <motion.img
              custom={9.5}
              className="codelanguajeslogo img-fluid"
              src={express}
              alt="reactJs"
              initial={{ opacity: 0 }}
              animate={props.controls}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 90 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeLanguajes;
