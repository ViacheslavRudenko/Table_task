import { AxiosError } from "axios";
import axios from "./instance";
import { loginDataTypes } from "../Pages/Login/types";


export const getBlogList = async (
    loginData: loginDataTypes
) => {
    try {
        const response = await axios.post<loginDataTypes>(`/login/`, loginData);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return { error: axiosError.response?.data, success: false };
    }
};
