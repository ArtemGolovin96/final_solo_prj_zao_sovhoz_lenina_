import React, { Component } from "react";
import "./AgroPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import axios from "axios";
import VisualSpace from "./VisualSpace/VisualSpace";

// import {

// } from '../../redux/action'

class Space extends Component {
  state = {
    open: false,
    arrOfSpacesFromBack: [],
    clickedSpaceOpened: "",
    sortsArr: [],
  };

  onClickSpaceOpen = (e, el) => {
    this.setState({ open: true });
    const res = this.state.arrOfSpacesFromBack.find(
      (item) => el.id === item.id
    );
    this.setState({ clickedSpaceOpened: res });
    this.setState({ sortsArr: res.sort });
    console.log(res.sort)
        
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
              <section
                className="space"
                onClick={(e) => this.onClickSpaceOpen(e, el)}
              >
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
            <p className="name-space">{this.state.clickedSpaceOpened.name}</p>
            <p className="name-brigade">
              {" "}
              Бригада № {this.state.clickedSpaceOpened.brigade}
            </p>
          </div>
          <div className="container-space-information">
            <p className="start-space">
              Начало использования поля -{" "}
              {this.state.clickedSpaceOpened.startyear} год
            </p>
            <p className="start-space">
              Средняя планируемая урожайность с одного куста -{" "}
              {this.state.clickedSpaceOpened.lastyearsyield} кг
            </p>
            <p className="start-space">
              Средняя планируемая урожайность с одного метра грядки -{" "}
              {(this.state.clickedSpaceOpened.lastyearsyield * (3.3)).toFixed(2)} кг
            </p>
            <ul className="space-sorts">Сорта ягоды в поле: {this.state.sortsArr.map((el) => {
                return <li>{el.name},  </li>
            })}    </ul>
          </div>
          <div className="container-space-opened-visual">
              <div className="visual-space">
                  <VisualSpace />
              </div>
              <div className="visual-space-information">
              <div className="space-information">
              <h4 className="space-information-mini">Информация</h4>
              </div>
              </div>
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
