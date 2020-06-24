import React from "react";

import curlyBraces from "../../images/curlyBraces.png";
import logopersonal from "../../images/logopersonal.png";
import plus from "../../images/plus.png";

const PersonalLogo = () => {
  return (
    <div className="PersonalLogo row border">
      <p className="col-12">
        <div className="row">
          <div className="logo col-4 border">
            <img
              className="img-fluid"
              alt="Logo de trabajo social"
              src={logopersonal}
            />
          </div>
        </div>
      </p>
      <div className="col-8">
        <div className="row">
          <h3 className="col-12">Sobre mi Logo</h3>
          <p className="col-12">
            Mi logo se compone de dos elementos.....Por una parte el logo de
            trabajo social representado por la rueda dentada, la mano y la hoja
            de olivo y por la otra, y cómo nexo de unión, dos{" "}
            <code> curly braces </code>....
          </p>
        </div>
      </div>
      {/* <div className="col-5 mt-2 mt-lg-4">
        <div className="row justify-content-center mt-sm-4">
          <div className="logo col-4">
            <img
              className="img-fluid"
              alt="Logo de trabajo social"
              src={logopersonal}
            />
          </div>
          <div className="logo col-4">
            <img
              className="img-fluid"
              alt="Logo de trabajo social"
              src={plus}
            />
          </div>
          <div className="logo col-4">
            <img
              className="img-fluid"
              alt="Logo de trabajo social"
              src={curlyBraces}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PersonalLogo;
