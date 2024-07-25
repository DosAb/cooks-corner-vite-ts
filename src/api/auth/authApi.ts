import axiosInstance from "../instance"
import { RegisterParams, LoginParams } from "../types"
import Endpoints from "../endpoints"


export const register = async (data: RegisterParams) => {
    const response = await axiosInstance.post(Endpoints.AUTH.REGISTER, data);
    return response;
}

export const login = async (data: LoginParams) =>{
    const response = await axiosInstance.post(Endpoints.AUTH.LOGIN, data);
    return response;
}