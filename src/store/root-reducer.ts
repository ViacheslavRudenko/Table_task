import { combineReducers } from "redux";
import reducerUserLogin from "./UserLogin/reducer";

export const rootReducer = combineReducers({
  isLogin: reducerUserLogin,
});
export type RootState = ReturnType<typeof rootReducer>;
