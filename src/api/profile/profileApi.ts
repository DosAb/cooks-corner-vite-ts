import axiosInstance from "../instance"
import { ProfilePutParams } from "../types"
import Endpoints from "../endpoints"

export const getUserProfile = async ()=>{
    const response = await axiosInstance.get(
        Endpoints.USERS.USER_PROFILE
    );
    return response;
}

export const putUserProfile = async (data: ProfilePutParams)=>{
    const response = await axiosInstance.put(Endpoints.USERS.USER_PROFILE, data);
    return response;
}