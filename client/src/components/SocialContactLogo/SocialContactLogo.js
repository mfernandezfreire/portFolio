import React from "react";

import { motion } from "framer";

const SocialContactLogo = (props) => {
  const socialName = "Visita mi " + `${props.name}` + " y contacta conmigo!!!";
  return (
    <motion.div
      className="col-3 col-sm-1"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={props.source} target="_blank" title={socialName}>
        <img src={props.image} className="img-fluid" alt="logo de linkedin" />
      </a>
    </motion.div>
  );
};

export default SocialContactLogo;
