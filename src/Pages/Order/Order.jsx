import React from "react";
import Nav from "../../Components/Nav/Nav";
import { Redirect } from "react-router-dom";
import "./Order.scss";
function Order() {
  const [dataOr, setDataOr] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/yonalish")
      .then((response) => response.json())
      .then((datas) => setDataOr(datas));
  }, []);

  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Order" />
      )}
      <h1 className="ord__header">Create order</h1>

      <form
        action="http://localhost:8030/newOrder"
        method="POST"
        className="ord__form"
      >
        <input
          type="text"
          className="order__username"
          required
          autoComplete="off"
          placeholder="vvedite sush username"
          name="waiting_patient_username"
        />
        <input
          type="text"
          className="order__fname"
          required
          autoComplete="off"
          placeholder="first name"
          name="waiting_patient_firstname"
        />
        <input
          type="text"
          className="order__lname"
          required
          autoComplete="off"
          placeholder="last name"
          name="waiting_patient_lastname"
        />

        <input
          type="text"
          className="order__phone"
          required
          autoComplete="off"
          placeholder="phone"
          defaultValue="+"
          name="waiting_patient_phone"
        />
        <select
          name="waiting_patient_direction_name"
          required
          className="select"
        >
          {dataOr.length &&
            dataOr.map((row) => (
              <option key={row.direction_id} value={row.direction_name}>
                {row.direction_name}
              </option>
            ))}
        </select>
        <button className="ord__btn">Send</button>
      </form>
    </>
  );
}

export default Order;
