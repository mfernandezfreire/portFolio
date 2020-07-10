import React from "react";
import Zoom from "react-reveal/Zoom";

const Button = (props) => {
  return (
    <Zoom delay={5000} duration={3000}>
      <div className="col-6 col-sm-3">
        <button
          type="button"
          class="d-none d-sm-block btn btn-dark mx-3 btn-lg btn-block"
        >
          {props.titulo}
        </button>
        <button
          type="button"
          class="d-sm-none btn btn-dark my-3 btn-sm btn-block"
        >
          {props.titulo}
        </button>
      </div>
    </Zoom>
  );
};

export default Button;
