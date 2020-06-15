import React from "react";
import { useEffect } from "react";

import { motion, useAnimation } from "framer";
import { useInView } from "react-intersection-observer";

import "./BackgroundWorker.css";

import backgrounWorkerCBD from "../../images/backgrounWorkerCBD.png";
import backgrounWorkerCBI from "../../images/backgrounWorkerCBI.png";
import backgrounWorkerEngranaje from "../../images/backgrounWorkerEngranaje.png";
import backgrounWorkerLogo from "../../images/backgrounWorkerLogo.png";
import backgrounWorkerMano from "../../images/backgrounWorkerMano.png";
import backgrounWorkerOlive from "../../images/backgrounWorkerOlive.png";
import backgrounWorkerbackgrounWorkerCBRotated1 from "../..//images/backgrounWorkerbackgrounWorkerCBRotated1.png";
import backgrounWorkerbackgrounWorkerCBRotated2 from "../..//images/backgrounWorkerbackgrounWorkerCBRotated2.png";
import backgrounWorkerbackgrounWorkerManoRotated1 from "../..//images/backgrounWorkerbackgrounWorkerManoRotated1.png";
import backgrounWorkerbackgrounWorkerManoRotated2 from "../..//images/backgrounWorkerbackgrounWorkerManoRotated2.png";
import backgrounWorkerbackgrounWorkerOliveRotated1 from "../..//images/backgrounWorkerbackgrounWorkerOliveRotated1.png";

const BackgroundWorker = () => {
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

  const background = [
    backgrounWorkerCBD,
    backgrounWorkerCBI,
    backgrounWorkerEngranaje,
    backgrounWorkerLogo,
    backgrounWorkerMano,
    backgrounWorkerOlive,
    backgrounWorkerbackgrounWorkerCBRotated1,
    backgrounWorkerbackgrounWorkerCBRotated2,
    backgrounWorkerbackgrounWorkerManoRotated1,
    backgrounWorkerbackgrounWorkerManoRotated2,
    backgrounWorkerbackgrounWorkerOliveRotated1,
  ];
  return (
    <div ref={ref} className="BackgroundWorker d-flex flex-row">
      <motion.img
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
        alt="Logo de desarrollo web"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        style={{
          position: "absolute",
          bottom: "5vw",
          left: "11vw",
          width: "30vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
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
        src={background[Math.floor(Math.random() * 11)]}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: Math.floor(Math.random() * 5), duration: 5 }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          bottom: "7vw",
          right: "11vw",
          width: "20vw",
          opacity: 0.5,
        }}
      />
      <motion.img
        src={background[Math.floor(Math.random() * 11)]}
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

export default BackgroundWorker;
