
//инпуты страницы входа
export function loginInputFromLoginPageAction(loginFromInput) {
  return {
    type: "CHANGE_INPUT_LOGIN",
    payload: {
      loginFromInput
    }
  }
}


export function passwInputFromLoginPageAction(passFromInput) {
  return {
    type: "CHANGE_INPUT_PASS",
    payload: {
      passFromInput
    }
  }
}


//инпуты страницы админа
//добавление
export function loginInputFromAdminPageAddAction(loginFromInputAdd) {
  return {
    type: "CHANGE_INPUT_LOGIN_ADMIN_ADD",
    payload: {
      loginFromInputAdd
    }
  }
}


export function passwInputFromAdminPageAddAction(passFromInputAdd) {
  return {
    type: "CHANGE_INPUT_PASS_ADMIN_ADD",
    payload: {
      passFromInputAdd
    }
  }
}

//удаление
export function loginInputFromAdminPageDeleteAction(loginFromInputDelete) {
  return {
    type: "CHANGE_INPUT_LOGIN_ADMIN_DELETE",
    payload: {
      loginFromInputDelete
    }
  }
}


export function passwInputFromAdminPageDeleteAction(passFromInputDelete) {
  return {
    type: "CHANGE_INPUT_PASS_ADMIN_DELETE",
    payload: {
      passFromInputDelete
    }
  }
}


