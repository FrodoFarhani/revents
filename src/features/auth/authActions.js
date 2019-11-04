import { LOGIN_USER, SIGNED_OUT_USER } from './authConstants';

export const login = creds => {
  return {
    type: LOGIN_USER,
    payload: creds
  };
};
export const logout = () => {
  return {
    type: SIGNED_OUT_USER
  };
};
