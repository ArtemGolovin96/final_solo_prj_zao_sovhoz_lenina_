

export function loginInputFromLoginPageAction (loginFromInput) {
    return {
        type: "CHANGE_INPUT_LOGIN",
        payload: {
            loginFromInput
        }
    }
}


export function passwInputFromLoginPageAction (passFromInput) {
    return {
        type: "CHANGE_INPUT_PASS",
        payload: {
            passFromInput
        }
    }
}


