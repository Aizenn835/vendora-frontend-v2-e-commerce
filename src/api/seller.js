import axiosClient from "./axiosClient"

export const apply = (payload) => {
    return axiosClient.post('/api/seller/apply', payload);
}