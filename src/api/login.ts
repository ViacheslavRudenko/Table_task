import { AxiosError } from "axios";
import axios from "./instance";
import { loginDataTypes } from "../Pages/Login/types";

export const getLoginData = async (loginData: loginDataTypes) => {
  const response = await axios.post<loginDataTypes>(`/login/`, loginData);
  return response.data;
};
