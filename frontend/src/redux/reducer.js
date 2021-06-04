/* eslint-disable no-duplicate-case */
import store from './store';
import { act } from "react-dom/test-utils"


const globalState = {
  //страница логина
  loginInput: "",
  passInput: "",
  //страница админа
  adminAddLoginInput: "",
  adminAddPassInput: "",
  adminDelLoginInput: "",
  adminDelPassInput: "",
  //роуты с логина
  rout: "",
  //сорта ягоды с дидмаунта argo
  globalArrOfSorts: [],
}

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_LOGIN":
      console.log(action.payload.loginFromInput)
      return { ...state, loginInput: action.payload.loginFromInput };

    case "CHANGE_INPUT_PASS":
      console.log(action.payload.passFromInput)
      return { ...state, passInput: action.payload.passFromInput };

    case "CHANGE_INPUT_LOGIN_ADMIN_ADD":
      console.log(action.payload.loginFromInputAdd)
      return { ...state, adminAddLoginInput: action.payload.loginFromInputAdd };

    case "CHANGE_INPUT_PASS_ADMIN_ADD":
      console.log(action.payload.passFromInputAdd)
      return { ...state, adminAddPassInput: action.payload.passFromInputAdd };

    case "CHANGE_INPUT_LOGIN_ADMIN_DELETE":
      console.log(action.payload.loginFromInputDelete)
      return { ...state, adminDelLoginInput: action.payload.loginFromInputDelete };

    case "TAKE_ARR_OF_SORTS_FROM_BACK":
      console.log(action.payload.arrOfSorts)
      return { ...state, globalArrOfSorts: action.payload.arrOfSorts};
      default:
        return state
  }


}