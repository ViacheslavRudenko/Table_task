import { UserLoginActionTypes } from "./types";

export const setLoginStatus = (loginData: boolean) => {
  return { type: UserLoginActionTypes.SET_IS_LOGIN, payload: loginData };
};
