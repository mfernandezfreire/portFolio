import React from "react";

const BackgroundImage = (props) => {
  return (
    <div className={props.class}>
      <img
        src={props.name}
        alt="Imagen de logo ReactJS"
        className="img-fluid"
        style={{ opacity: 0.1 }}
      />
    </div>
  );
};

export default BackgroundImage;
