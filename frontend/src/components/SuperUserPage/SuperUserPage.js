import React, { Component } from "react";
import "./SuperUserPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import axios from 'axios'

import {
  loginInputFromAdminPageAddAction,
  passwInputFromAdminPageAddAction,
  loginInputFromAdminPageDeleteAction,
  passwInputFromAdminPageDeleteAction,
} from '../../redux/action'
// ./img/LoginPage_img/logo_login_page.svg
// file:///C:/Users/User/Desktop/final_solo_prj_zao_sovhoz_lenina_/frontend/img/LoginPage_img/k.jpg
class SuperUser extends Component {

  render() {
    return (
      <main className="super-user">
        <h1 className="admins-page-h1">Страница администратора</h1>
        <section className="forms">
          <form className="admins-form-add">
            <h2 className="form-name-admin">Добавить сотрудника</h2>
            <p className="add-login-p">Добавить логин</p>
            <input className="login-input-admin" type="text" placeholder="имя@отдел" onChange={(e) => this.props.loginInputFromAdminPageAddActionProps(e)}></input>
            <p className="add-pass-p">Добавить логин</p>
            <input className="pass-input-admin" type="text" placeholder="Придумайте пароль" onChange={(e) => this.props.passwInputFromAdminPageAddActionProps(e)}></input>
            <button className="add-admin-button">Добавить сотрудника</button>
          </form>
          <hr></hr>
          <form className="admins-form-delete">
            <h2 className="form-name-admin">Удалить сотрудника</h2>
            <p className="delete-login-p">Логин</p>
            <input className="login-input-admin" type="text" placeholder="имя@отдел" onChange={(e) => this.props.loginInputFromAdminPageDeleteActionProps(e)}></input>
            <p className="delete-pass-p">Пароль</p>
            <input className="pass-input-admin" type="text" placeholder="Введите пароль" onChange={(e) => this.props.passwInputFromAdminPageDeleteActionrops(e)}></input>
            <button className="delete-admin-button">Удалить сотрудника</button>
          </form>
        </section>
      </main>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  }
}


export default connect(() => { }, mapDispatchToProps)(SuperUser)