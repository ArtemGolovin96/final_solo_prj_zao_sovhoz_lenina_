import store from './store';
import { act } from "react-dom/test-utils"


const globalState = {
        loginInput: "",
        passInput: "",
        rout: "",
}

export default function reducer (state = globalState, action) {
    switch(action.type) {
        case "CHANGE_INPUT_LOGIN":
            console.log(action.payload.loginFromInput)
            return {...state, loginInput: action.payload.loginFromInput}

        case "CHANGE_INPUT_PASS":
            console.log(action.payload.passFromInput)
            return {...state, passInput: action.payload.passFromInput}
    }

    
}