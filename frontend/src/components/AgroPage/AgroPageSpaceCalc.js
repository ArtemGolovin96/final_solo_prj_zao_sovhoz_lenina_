import React, { Component } from 'react';
import './AgroPage.css';
import { connect } from 'react-redux'
import store from '../../redux/store';
import axios from 'axios';



class AgroPageSpaceCalc extends Component {
  render() {
    return (
      <main className="agronom-space-calc">
        <header className="agro-space-calc-header">
          {/* //Some value */}
        </header>
        <div className="calc-container">
          <h3 className="name-calc">Создание нового поля</h3>
          <form className="space-calc-form">
            <div className="calc-name-brigade">
              <p className="input-name">Введите название поля</p>
              <input className="space-calc-input-name" placeholder="Название поля" name="name"></input>
              <p className="input-name">Выберите бригаду</p>
              <select className="space-calc-input-name" placeholder="Название поля" name="brigade">
                <option>Бригада № 1 Совхоз Ленина</option>
                <option>Бригада № 2 Молоково</option>
              </select>
            </div>
            <div className="calc-main">
              <p className="input-name">Введите площадь поля в гектарах</p>
              <input className="space-calc-input-name" placeholder="гектар" name="area"></input>
              <select className="space-calc-input-name" name="sorts[]" multiple>
                <option>--Выберите необходимые сорта--</option>
                <option>Эльсата</option>
                <option>Мальвина</option>
                <option>Богема</option>
                <option>Пегас</option>
                <option>Диамант</option>
                <option>Гигантелла</option>
                <option>Зенга</option>
                <option>Кимберли</option>
                <option>Холидей</option>
              </select>

            </div>
          </form>
        </div>
      </main>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    // passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    // loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    // passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  }
}


export default connect(() => { }, mapDispatchToProps)(AgroPageSpaceCalc)