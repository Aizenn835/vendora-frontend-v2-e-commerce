import axiosClient from "./axiosClient";

export const signUp = ({firstname , lastname , email , password}) => {
    return axiosClient.post("/api/user/register" , {firstname , lastname , email , password});
}

export const login = ({email , password}) => {
    return  axiosClient.post("/api/auth/login" , {email , password});
}