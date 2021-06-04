import React, { Component } from "react";
import "./AgroPage.css";
import { connect } from "react-redux";
import store from "../../redux/store";
import axios from "axios";
import Select from "react-select";
import VisualSpace from "./VisualSpace/VisualSpace";

class AgroPageSpaceCalc extends Component {
  state = {
    sorts: [],
    sortsSelected: [],
    ventel: false
  };

  componentDidMount() {
    this.getSpacesSorts();
  }

  getSpacesSorts = () => {
    axios
      .get("http://localhost:7778/agro-calc")
      .then((response) => {
        const arr = [...response.data];
        this.setState({ sorts: arr });
        console.log(arr);
      })
      .catch(function (error) {
        alert("Ошибка загрузки страницы. Обратитесь к администратору");
      });
  };

  onChangeSelect = (e) => {
    console.log('check on change', e)
    this.setState({ sortsSelected: e });
    // this.setState({ ventel: true })
  };

  submitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <main className="agronom-space-calc">
        <header className="agro-space-calc-header">{/* //Some value */}</header>
        <div className="calc-container">
          <h3 className="name-calc">Создание нового поля</h3>
          <form className="space-calc-form" onSubmit={this.submitHandler}>
            <div className="calc-name-brigade">
              <p className="input-name">Введите название поля</p>
              <input
                className="space-calc-input-name"
                placeholder="Название поля"
                name="name"
              ></input>
              <p className="input-name">Выберите бригаду</p>
              <select
                className="space-calc-input-name"
                placeholder="Название поля"
                name="brigade"
              >
                <option>Бригада № 1 Совхоз Ленина</option>
                <option>Бригада № 2 Молоково</option>
              </select>
            </div>
            <div className="calc-main">
              <p className="input-name">Введите площадь поля в гектарах</p>
              <input
                className="space-calc-input-name"
                placeholder="общая S в гектарах"
                name="area"
              ></input>

              <Select
                onChange={(e) => this.onChangeSelect(e)}
                options={this.state.sorts}
                className="react-select"
                isMulti
                styles={{
                  option: (styles) => ({
                    backgroundColor: "#d53032",
                    color: "#ffd700",
                    border: "1px solid #ffd700",
                    borderRadius: "10px",
                    width: "130px",
                    margin: "10px auto",
                  }),
                }}
              />
            </div>
            <div className="selected">
              {this.state.sortsSelected.map((el) => {
                  return (
                    <div className="selected-input-container">
                      <span className="selected-name-sorts">{el.label}</span>
                      <input
                        name="selected"
                        placeholder="введите количество гектар вашего сорта"
                      >
                      </input>
                    </div>
                  );
                })
              }
            </div>
          </form>
          <VisualSpace />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    options: state.globalArrOfSorts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    // passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    // loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    // passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgroPageSpaceCalc);
