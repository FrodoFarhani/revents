import { LOGIN_USER, SIGNED_OUT_USER } from './authConstants';
import { closeModal } from '../modals/modalActions';
export const login = creds => {
  //here we use redux thunk dispatch to close the login modal after login
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      payload: { creds }
    });
    dispatch(closeModal());
  };
  /* return {
    type: LOGIN_USER,
    payload: creds
  }; */
};
export const logout = () => {
  return {
    type: SIGNED_OUT_USER
  };
};
