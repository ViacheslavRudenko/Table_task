import { UserLoginActionTypes, UserLoginState, UserLoginAction } from "./types";

export const initialState: UserLoginState = {
  isLogin: false,
};

const reducerUserLogin = (
  state = initialState,
  action: UserLoginAction
): UserLoginState => {
  switch (action.type) {
    case UserLoginActionTypes.SET_IS_LOGIN: {
      return { ...state, isLogin: action.payload };
    }

    default:
      return state;
  }
};
export default reducerUserLogin;
