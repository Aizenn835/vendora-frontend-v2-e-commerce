import axiosClient from "./axiosClient"

export const apply = (payload) => {
    return axiosClient.post('/api/seller/apply', payload);
}

export const confirmation = () => {
    return axiosClient.get('/api/seller/application');
}