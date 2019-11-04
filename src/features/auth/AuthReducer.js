import { SIGNED_OUT_USER, LOGIN_USER } from './authConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
  currentUser: {}
};
export const loginUser = (state, payload) => {
  console.log(payload);

  return {
    ...state,
    authenticated: true,
    currentUser: payload.email
  };
};
export const logoutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGNED_OUT_USER]: logoutUser
});
