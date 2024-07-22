import axiosInstance from "../instance"
import { RegisterParams } from "../types"
import Endpoints from "../endpoints"

export const register = async (data: RegisterParams) => {
    try {
        const response = await axiosInstance.post(Endpoints.AUTH.REGISTER, data);
        console.log(response.data);
    } catch (err) {
        if (!err?.response) {
            console.log(err);
        }
    }
}