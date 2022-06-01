export function signInRequest( phonenumber, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { phonenumber, password },
  };
}
export function signInSuccess(token, user, worker) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user, worker },
  };
};
export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
}
export function signUpRequest(
  user_name,
  password,
  email,
  bio,
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      user_name,
      password,
      email,
      bio,
    },
  }
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}
