import axiosClient from "./axiosClient";

export const signUp = ({firstname , lastname , email , password}) => {
    return axiosClient.post("/api/user/register" , {firstname , lastname , email , password});
}