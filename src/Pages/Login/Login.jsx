import React from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";
function Login() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/admin/patients")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  React.useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const userName = React.useRef(null);
  const userPassword = React.useRef(null);
  return (
    <>
      <h1 className="log__header">Login</h1>
      <form
        className="log__form"
        onSubmit={(evt) => {
          evt.preventDefault();

          data.length &&
            data.forEach((row) => {
              if (
                row.patient_username === userName.current.value &&
                row.patient_password === userPassword.current.value
              ) {
                localStorage.setItem("token", row.patient_token);
                window.location.href = "/Home";
              } else {
                setValue("password yoki username notogri kiritilgan");
              }
            });
        }}
      >
        <input
          required
          ref={userName}
          type="text"
          placeholder="username"
          autoComplete="off"
          className="log__adminname"
        />
        <input
          required
          ref={userPassword}
          type="text"
          placeholder="Password"
          autoComplete="off"
          className="log__adminpass"
        />
        <button className="log__btn">Submit</button>
      </form>
      <p className="log__p">{value}</p>
      <p className="log__preduprejdenie">
        Esli vi esho ne zaregistrirovani pereydite v{" "}
        <NavLink to="/Registration">Registration</NavLink>
      </p>
    </>
  );
}

export default Login;
