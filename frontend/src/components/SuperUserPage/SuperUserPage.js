import React, { Component } from "react";
import "./LoginPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import axios from 'axios'

import logo_login_page from "./logo_login_page.svg";
import { loginInputFromLoginPageAction, passwInputFromLoginPageAction } from '../../redux/action'

// ./img/LoginPage_img/logo_login_page.svg
// file:///C:/Users/User/Desktop/final_solo_prj_zao_sovhoz_lenina_/frontend/img/LoginPage_img/k.jpg
class SuperUser extends Component {

  render() {
    return (
      <main className="super-user">
          <h1>test</h1>
      </main>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    loginInputFromLoginPageActionProps: (e) => {dispatch(loginInputFromLoginPageAction(e.target.value))},
    passwInputFromLoginPageActionProps: (e) => {dispatch(passwInputFromLoginPageAction(e.target.value))}
  }
}


export default connect(()=>{}, mapDispatchToProps)(SuperUser)