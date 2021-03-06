export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user},
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOutSuccess() {
  return {
    type: '@auth/SIGN_OUT_SUCCESS',
  };
}
