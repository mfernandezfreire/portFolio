import React from "react";

import { motion } from "framer";

const SocialContactLogo = (props) => {
  const socialName = "Visita mi " + props.name + " y contacta conmigo!!!";
  return (
    <motion.div
      className="col-2 col-sm-1"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={props.source}
        target="_blank"
        title={socialName}
      >
        <img
          src={props.image}
          className="img-fluid"
          alt="logo de linkedin"
          style={{ maxHeight: "200px" }}
        />
      </motion.a>
    </motion.div>
  );
};

export default SocialContactLogo;
