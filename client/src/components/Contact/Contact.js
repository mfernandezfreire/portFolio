import React from "react";
import "./Contact.css";

import Axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer";

import Background from "../Background/Background";
import LogoContact from "../LogoContact/LogoContact";

const validate = (values) => {
  const errors = {};
  if (!values.subject) {
    errors.subject = "Campo Necesario";
  } else if (values.subject.length < 5) {
    errors.subject = "Al menos 5 cáracteres, no seas tacaño!!";
  }

  if (!values.email) {
    errors.email = "Campo Necesario";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo Electronico No Valido";
  }

  if (!values.message) {
    errors.message = "Campo Necesario";
  } else if (values.message.length < 10) {
    errors.message = "Al menos 10 caracteres, no seas tacaño!!";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      const email = values.email;
      const subject = values.subject;
      const message = values.message;
      Axios.post(`http://localhost:4000/send-email`, {
        email,
        subject,
        message,
      })
        .then((_) => {
          console.log("everything it's ok");
          formik.resetForm({
            values: {
              email: "",
              subject: "",
              message: "",
            },
          });
        })
        .catch((error) => console.log("Nothing it's ok"));
    },
  });

  return (
    <div className="Contact container-fluid">
      <Background type={"contact"} opacity={0.1} />
      <h1 className="display-4 text-center">Contacta Conmigo</h1>
      <div className="row justify-content-center">
        <div className="col-6 mb-5">
          <LogoContact />
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row justify-content-center mb-5">
          <div className="col-9 col-md-3 mr-2">
            <div className="form-group">
              <label htmlFor="emailDeContacto" className="h5 mb-3">
                Email de Contacto
              </label>
              <input
                id="emailDeContacto"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                placeholder="name@ejemplo.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <small id="emailHelp" className="form-text text-danger">
                  {formik.errors.email}
                </small>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="asunto" className="h5 mb-3">
                Asunto
              </label>
              <input
                id="asunto"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                placeholder="Asunto"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <small id="subjectHelp" class="form-text text-danger">
                  {formik.errors.subject}
                </small>
              ) : null}
            </div>
          </div>
          <div className="col-9 col-md-3 ml-2">
            <div className="form-group">
              <label htmlFor="Mensaje" className="h5 mb-3">
                Mensaje
              </label>
              <textarea
                id="Mensaje"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="form-control border-0"
                style={{ background: "gainsboro", color: "black" }}
                rows="5"
              ></textarea>
              {formik.touched.message && formik.errors.email ? (
                <small id="emailHelp" class="form-text text-danger">
                  {formik.errors.message}
                </small>
              ) : null}
            </div>
          </div>
          <div className="col-12 text-center">
            <motion.button
              type="submit"
              className="btn btn-dark btn-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Enviar
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
