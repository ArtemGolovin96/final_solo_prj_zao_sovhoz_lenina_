import React, { Component } from "react";
import "./AgroPage.css";
import store from "../../redux/store";
import { connect } from "react-redux";
import axios from "axios";
import VisualSpace from "./VisualSpace/VisualSpace";
import { YMaps, Map, GeoObject, Rectangle, Button } from "react-yandex-maps";
import ButtonGroup from "antd/lib/button/button-group";
import { Link } from "react-router-dom";
import { takeArrOfSotsAction } from '../../redux/action'
// import { Button } from "antd";

// import {

// } from '../../redux/action'

class Space extends Component {
  state = {
    open: false,
    arrOfSpacesFromBack: [],
    clickedSpaceOpened: "",
    sortsArr: [],
    showMap: false,
    buttonOnMapType: 'Гибрид',
    typeOfMap: "yandex#publicMapHybrid",
  };

  onClickSpaceOpen = (e, el) => {
    this.setState({ open: true });
    const res = this.state.arrOfSpacesFromBack.find(
      (item) => el.id === item.id
    );
    this.setState({ clickedSpaceOpened: res });
    this.setState({ sortsArr: res.sort });
    console.log(res.sort);
  };

  componentDidMount() {
    this.getSpaces();
    this.getSpacesSorts();
    
  }

  getSpacesSorts = () => {
    axios
      .get("http://localhost:7778/agro/sorts")
      .then((response) => {
        const arr = [...response.data];
        this.setState({ arrOfAllSorts: arr });
        this.props.takeArrOfSotsActionProps(arr);
      })
      .catch(function (error) {
        alert("Ошибка загрузки страницы. Обратитесь к администратору");
      });
  };

  getSpaces = () => {
    axios
      .get("http://localhost:7778/agro")
      .then((response) => {
        const arr = [...response.data];
        this.setState({ arrOfSpacesFromBack: arr });
      })
      .catch(function (error) {
        alert("Ошибка загрузки страницы. Обратитесь к администратору");
      });
  };

  onClickTypeMap = (prevState) => {
    console.log('cccc')
    if (this.state.typeOfMap === "yandex#publicMapHybrid") {
      this.setState({ typeOfMap: "yandex#map" });
      return Object.assign({}, prevState, { type: 'yandex#map' });
    } else {
      this.setState({ typeOfMap: "yandex#publicMapHybrid" });
      return Object.assign({}, prevState, { type: 'yandex#publicMapHybrid' });
    }
  };

  onClickShoWMap = () => {
    if (this.state.showMap === false) {
      this.setState({ showMap: true });
      console.log("check true");
    } else {
      this.setState({ showMap: false });
    }
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
            <Link className="add-space-button-link" to="agro-calc">
              <button className="add-space-button">Добавить новое поле
              </button>
            </Link>
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
              {(this.state.clickedSpaceOpened.lastyearsyield * 3.3).toFixed(2)}{" "}
              кг
            </p>
            <ul className="space-sorts">
              Сорта ягоды в поле:{" "}
              {this.state.sortsArr.map((el) => {
                return <li>{el.name}, </li>;
              })}{" "}
            </ul>
          </div>
          <div className="container-space-opened-visual">
            <div className="visual-space">
              <VisualSpace />
            </div>
            <div className="visual-space-information">
              <div className="space-information">
                <h4 className="space-information-mini">Расположение поля</h4>
                <button
                  className="show-map-button"
                  onClick={this.onClickShoWMap}
                >
                  {this.state.showMap
                    ? "Скрыть карту"
                    : "Показать расположение на карте"}
                </button>
                <div className="map-container">
                  {

                  }
                  <YMaps className="ya-maps" >
                    <Map
                      defaultState={{ center: [55.75, 37.57], zoom: 10, type: this.state.typeOfMap, }}
                      width={300}
                      margin={150}
                    >
                      <Button data={{ content: this.state.buttonOnMapType }} options={{ maxWidth: [28, 150, 178] }} onClick={() => this.onClickTypeMap(this.state)} />
                      <GeoObject
                        geometry={{
                          type: "Point",
                          coordinates: [55.8, 37.8],
                        }}
                        properties={{
                          iconContent: "Я тащусь",
                          hintContent: "Ну давай уже тащи",
                        }}
                        options={{
                          preset: "islands#blackStretchyIcon",
                          draggable: false,
                        }}
                      />
                    </Map>
                  </YMaps>
                </div>
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
    takeArrOfSotsActionProps: (e) => { dispatch(takeArrOfSotsAction(e)) },
  };
};

export default connect(() => { }, mapDispatchToProps)(Space);
