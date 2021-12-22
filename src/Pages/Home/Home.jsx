import React from "react";
import "./Home.scss";
import Nav from "../../Components/Nav/Nav";
import { Redirect } from "react-router-dom";
function Home() {
  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Home" />
      )}
      <h1 className="home__header">Welcome to the clinic 💊</h1>

      <ul className="home__list">
        <li>
          REGISTER -- patsient krganda undan password,yosh,va username soridi
        </li>
        <li>
          {" "}
          passwordi va unique username si yordamida unga token beradi va
          localstorage ga saqlab qoyadi
        </li>
        <li>
          {" "}
          agar krgan patsientni tokeni bosa uni REGISTER ga mas tori LOGIN ga
          rostdan ham shu patsient bazada borligini tekshirish uchun jonatadi{" "}
        </li>
        <li>DIRECTION -- klinika yonalishlari korinadi</li>
        <li>ORDER -- patsient navbat olishi munkun</li>
      </ul>
      <h2>
        REGISTRATSIYADA VA ORDER QOWGANDA KICHKINA MOMO BOR LEKN IWLAWIGA XALAXT
        QMAYABTI
      </h2>
    </>
  );
}

export default Home;
