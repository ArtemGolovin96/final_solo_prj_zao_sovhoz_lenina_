import React, { Component } from "react";
import "./AgroPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import axios from "axios";

// import {

// } from '../../redux/action'

class Space extends Component {
  state = {
    open: false,
    arrOfSpacesFromBack: [],
  };

  onClickSpaceOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true });
    this.getSpaces();
  };

  componentDidMount() {
    this.getSpaces();
  }

  getSpaces = () => {
    axios
      .get("http://localhost:7778/agro")
      .then((response) => {
        const arr = [...response.data];
        this.setState({ arrOfSpacesFromBack: arr });
        console.log(this.state.arrOfSpacesFromBack);
      })
      .catch(function (error) {
        alert("Ошибка загрузки страницы. Обратитесь к администратору");
      });
  };

  render() {
    return (
      <main className="space-page">
        <div className="space-container">
          <h2 className="space-container-name">Название полей</h2>
          {this.state.arrOfSpacesFromBack.map((el) => {
            return (
              <section className="space" onClick={this.onClickSpaceOpen}>
                <div className="container-name-space">
                  <p className="name-space">{el.name}</p>
                  <p className="name-brigade"> Бригада № {el.brigade}</p>
                </div>
              </section>
            );
          })}
          <section className="add-space-button-section">
            <button className="add-space-button">Добавить новое поле</button>
          </section>
        </div>
        <div className={this.state.open ? "space-opened" : "space-closed"}>
          <div className="container-name-space-opened">
            <p className="name-space">Поле Тест</p>
            <p className="name-brigade"> Бригада Тест</p>
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    // passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    // loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    // passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  };
};

export default connect(() => {}, mapDispatchToProps)(Space);
