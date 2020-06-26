import React from "react";

import "../Projects/Projects.css";

const Card = (props) => {
  console.log(props);
  const holdTempClass = "cardBox border-0 ";
  return (
    <div className={holdTempClass + props.name}>
      <div className="content rounded">
        <div className="front rounded" onClick={props.flipCard}>
          <div
            className="frontCard rounded"
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
          style={{ backgroundColor: `${props.color}` }}
        >
          <div style={{ width: "100%" }}>
            <h3 className="h.3">{props.titulo}</h3>
            <div>
              <p className="lead p-1">{props.descripcion}</p>
            </div>
            <div className="my-3">
              {props.tecnologias.map((tecnologia) => (
                <span class="badge badge-secondary mr-1">{tecnologia}</span>
              ))}
            </div>
            <div>
              <a
                type="button"
                class="btn btn-outline-secondary mx-1"
                href={props.linkGit}
                target="_blank"
              >
                GitHub
              </a>
              {props.linkWebPage !== "none" && (
                <a
                  type="button"
                  class="btn btn-secondary mx-1"
                  href={props.linkWebPage}
                  target="_blank"
                >
                  Web
                </a>
              )}
              {props.linkWebPage !== "none" ? (
                <button
                  type="button"
                  class="btn btn-dark mx-1"
                  onClick={props.flipCard}
                  target="_blank"
                >
                  Volver
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-secondary mx-1"
                  onClick={props.flipCard}
                  target="_blank"
                >
                  Volver
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
