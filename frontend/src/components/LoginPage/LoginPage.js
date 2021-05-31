import React, { Component } from "react";
import "./LoginPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import logo_login_page from "./logo_login_page.svg";

// ./img/LoginPage_img/logo_login_page.svg
// file:///C:/Users/User/Desktop/final_solo_prj_zao_sovhoz_lenina_/frontend/img/LoginPage_img/k.jpg
class LoginPage extends Component {
  render() {
    return (
      <main className="login-page">
        <header className="header-login-page"></header>

        <a href="https://sovhozlenina.ru/history/" target="blank">
          <img
            className="img-logo-login-page"
            src={logo_login_page}
            alt="ЗАО Совхоз имени Ленина"
          />
        </a>
        <form className="login-form">
          <input
            className="login-input"
            name="login"
            maxLength="55"
            size="40"
            placeholder="Ваш пароль"
          ></input>
          <div className="input-password-container">
            <input
              className="password-input"
              name="password"
              type="password"
              maxLength="25"
              size="40"
              placeholder="Ваш пароль"
            ></input>
            <button className="pokazatbutton">👁‍🗨</button>
          </div>
          <button className="login-button">ВОЙТИ</button>
        </form>

        <footer className="footer">
          <p className="p-footer-ok">
            Отдел кадров ЗАО "Совхоз имени Ленина" - +7(495) 548-66-70
          </p>
          <p className="p-footer-kontakti">Контакты</p>
          <p className="p-footer-prava">Все права защищены</p>
        </footer>
      </main>
    );
  }
}

export default LoginPage;
