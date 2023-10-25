export interface UserLoginState {
  isLogin: boolean;
}

export enum UserLoginActionTypes {
  SET_IS_LOGIN = "SET_IS_LOGIN",
}

interface addLoginData {
  type: UserLoginActionTypes.SET_IS_LOGIN;
  payload: boolean;
}

export type UserLoginAction = addLoginData;
