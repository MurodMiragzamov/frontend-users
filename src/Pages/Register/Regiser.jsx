import React from "react";
import { NavLink } from "react-router-dom";

import "./Register.scss";
function Register() {
  return (
    <>
      <h1 className="reg__header">Registration</h1>
      <form
        className="reg__form"
        action="http://localhost:8030/register"
        method="POST"
        noValidate
      >
        <input
          required
          type="text"
          placeholder="username"
          autoComplete="off"
          className="reg__name"
          name="patientName"
        />

        <input
          required
          type="number"
          placeholder="age"
          autoComplete="off"
          className="reg__age"
          name="patientAge"
        />
        <input
          required
          type="text"
          placeholder="password"
          autoComplete="off"
          className="reg__password"
          name="patientPassword"
        />

        <button>Submit</button>
      </form>
      <p className="reg__p">
        Esli vi uje zaregestrirovalis podtverdite vashe deystviya v{" "}
        <NavLink to="/">Login</NavLink>
      </p>
    </>
  );
}

export default Register;
