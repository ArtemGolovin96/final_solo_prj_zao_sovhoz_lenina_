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
}

export default function reducer(state = globalState, action) {
  // eslint-disable-next-line default-case
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

    case "CHANGE_INPUT_PASS_ADMIN_DELETE":
      console.log(action.payload.passFromInputDelete)
      return { ...state, adminDelPassInput: action.payload.passFromInputDelete };
  }


}