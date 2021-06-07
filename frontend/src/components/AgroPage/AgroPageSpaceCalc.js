import React, { Component } from "react";
import "./AgroPage.css";
import { connect } from "react-redux";
import store from "../../redux/store";
import axios from "axios";
import Select from "react-select";
import VisualSpace from "./VisualSpace/VisualSpace";
import {
  takeRowsForAntDAction,
  takeColumnsForAntDAction,
  selectedSortsAntdAction,
  selectedSortsAntdSectorAction,
} from "../../redux/action";

class AgroPageSpaceCalc extends Component {
  state = {
    sorts: [],
    sortsSelected: [],
    ventel: false,
  };

  //Таймауты
  timeOutIdRows = null;
  timeOutIdColumns = null;
  timeOutIdSelectedElGectar = null;
  timeOutIdSelectedElSector = null;

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
    this.setState({ sortsSelected: e });
    // this.setState({ ventel: true })
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  onChangeRows = (e) => {
    clearTimeout(this.timeOutId);
    this.timeOutIdRows = setTimeout(() => {
      this.props.takeRowsForAntDActionActionProps(e);
    }, 1000);
  };

  onChangeColumns = (e) => {
    clearTimeout(this.timeOutIdColumns);
    this.timeOutIdColumns = setTimeout(() => {
      this.props.takeColumnsForAntDActionActionProps(e);
    }, 1000);
  };

  onChangeSelectedElGectar = (e, label) => {
    clearTimeout(this.timeOutIdSelectedElGectar);
    this.timeOutIdSelectedElGectar = setTimeout(() => {
      this.props.selectedSortsAntdActionProps(e, label);
    }, 1000);
  };

  onChangeSelectedElSector = (e, el) => {
    clearTimeout(this.timeOutIdSelectedElSector);
    this.timeOutIdSelectedElSector = setTimeout(() => {
      this.props.selectedSortsAntdSectorActionProps(e, el);
    }, 1000);
  };

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
                    <p className="selected-name-sorts">{el.label}</p>
                    <input
                      name="selected"
                      placeholder="введите количество гектар вашего сорта"
                      onChange={(e) => this.onChangeSelectedElGectar(e, el.label)}
                    ></input>
                    <input
                      className="sorts-gertars-nput"
                      name="rows-sort-gektars"
                      placeholder="Формат - 1.1"
                      onChange={(e) => this.onChangeSelectedElSector(e, el)}
                    ></input>
                  </div>
                );
              })}
            </div>
          </form>
          <div className="visual-antd-continer">
            <VisualSpace />
            <div className="input-sectors-container">
              <p className="rows-p-input">
                Введите количество секторов по горизонтали
              </p>
              <input
                className="input-int-rows"
                type="number"
                onChange={this.onChangeRows}
              ></input>
              <p className="rows-p-input">
                Введите количество секторов по вертикали
              </p>
              <input
                className="input-int-columns"
                type="number"
                onChange={this.onChangeColumns}
              ></input>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.globalArrOfSorts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeRowsForAntDActionActionProps: (e) => {
      dispatch(takeRowsForAntDAction(e.target.value));
    },
    takeColumnsForAntDActionActionProps: (e) => {
      dispatch(takeColumnsForAntDAction(e.target.value));
    },
    selectedSortsAntdActionProps: (e, label) => {
      dispatch(selectedSortsAntdAction(e.target.value, label));
    },
    selectedSortsAntdSectorActionProps: (e, el) => {
      dispatch(selectedSortsAntdSectorAction(e.target.value, el));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgroPageSpaceCalc);
