import React from "react";

import Flip from "react-reveal/Flip";

import "../Projects/Projects.css";

const Card = (props) => {
  const holdTempClass = "cardBox border-0 p-2 ";
  return (
    <Flip duration={1500} left>
      <div className={holdTempClass + props.name}>
        <div className="content rounded">
          <div className="front rounded">
            <div
              className="frontCard rounded d-flex align-items-end justify-content-end p-3"
              style={{
                backgroundImage: `url(${props.imagen})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            className="back rounded d-flex justify-content-center align-items-center"
            style={{ background: `${props.color}` }}
          >
            <div style={{ width: "100%" }}>
              <h3 className="h4 p-1">{props.titulo}</h3>
              <div className="p-1">
                <p>{props.descripcion}</p>
              </div>
              <div className="my-1 my-sm-3 p-2">
                {props.tecnologias.map((tecnologia, idx) => (
                  <span key={idx} className="badge badge-secondary mr-1">
                    {tecnologia}
                  </span>
                ))}
              </div>
              <div>
                <a
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  href={props.linkGit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {props.linkWebPage !== "none" && (
                  <a
                    type="button"
                    className="btn btn-secondary mx-1"
                    href={props.linkWebPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default Card;
