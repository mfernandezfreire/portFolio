import React from "react";

import "../Projects/Projects.css";

const Card = (props) => {
  const holdTempClass = "cardBox border-0 ";
  return (
    <div className={holdTempClass + props.name}>
      <div className="content rounded">
        <div className="front rounded">
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
        <div className="back rounded d-flex justify-content-center align-items-center bg-ligth">
          <div style={{ width: "100%" }}>
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
              >
                Git Hub
              </a>
              {props.linkWebPage !== "none" && (
                <a
                  type="button"
                  class="btn btn-secondary mx-1"
                  href={props.linkWebPage}
                >
                  Pagina Web
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
