import React from "react";
import Axios from "axios";

import useForm from "../../hooks/useForm";

import Background from "../Background/Background";
import LogoContact from "../LogoContact/LogoContact";

import linkedin from "../../images/Contact/Linkedin.png";
import github from "../../images/backgroundCode/github.png";
import twitter from "../../images/Contact/Twitter.png";

const Contact = () => {
  const [state, handleState, resetState] = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    const email = state.email;
    const subject = state.subject;
    const message = state.message;
    e.preventDefault();
    Axios.post(`http://localhost:4000/send-email`, { email, subject, message })
      .then((_) => {
        resetState();
        console.log("everything it's ok");
      })
      .catch((error) => console.log("Nothing it's ok"));
  };

  return (
    <div className="Contact container-fluid">
      <Background type={"contact"} />
      <h1 className="display-4 text-center">Contacta Conmigo</h1>
      <div className="row justify-content-center">
        <div className="col-6 mb-5">
          <LogoContact />
        </div>
      </div>
      <form>
        <div className="row justify-content-center mb-5">
          <div className="col-9 col-sm-3 mr-2">
            <div className="form-group">
              <label for="emailDeContacto" className="h5 mb-3">
                Email de Contacto
              </label>
              <input
                type="email"
                className="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                id="emailDeContacto"
                placeholder="name@ejemplo.com"
                value={state.email}
                onChange={handleState}
              />
            </div>
            <div className="form-group">
              <label for="asunto" className="h5 mb-3">
                Asunto
              </label>
              <input
                type="text"
                class="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                id="asunto"
                placeholder="Asunto"
                value={state.subject}
                onChange={handleState}
              />
            </div>
          </div>
          <div className="col-9 col-sm-3 ml-2">
            <div className="form-group">
              <label for="Mensaje" className="h5 mb-3">
                Mensaje
              </label>
              <textarea
                className="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                rows="5"
                id="Mensaje"
                value={state.message}
                onChange={handleState}
              ></textarea>
            </div>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-secondary btn-lg"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      <div className="row justify-content-center">
        <div className="col-3 col-sm-1">
          <a href="https://www.linkedin.com/in/manufernandezfreire/">
            <img
              src={linkedin}
              className="img-fluid"
              alt="logo de linkedin"
              style={{ maxWidth: "100px" }}
            />
          </a>
        </div>
        <div className="col-3 col-sm-1">
          <a href="https://github.com/mfernandezfreire">
            <img
              src={github}
              className="img-fluid"
              alt="logo de github"
              style={{ maxWidth: "100px" }}
            />
          </a>
        </div>
        <div className="col-3 col-sm-1">
          <a href="https://twitter.com/manuferfreire">
            <img
              src={twitter}
              className="img-fluid"
              alt="logo de twitter"
              style={{ maxWidth: "100px" }}
            />
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <p className="text-center mb-0" style={{ fontSize: "1.5rem" }}>
            Manuel Fernandez Freire ©
          </p>
          <p className="text-center" style={{ fontSize: "1.5rem" }}>
            2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
