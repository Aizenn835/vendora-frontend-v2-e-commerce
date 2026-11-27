import axiosClient from "./axiosClient";

export const tableData = ({filter , page , size}) => {
    return axiosClient.get("/api/admin/seller" , { params: {filter , page , size}});
}

export const filterCounter = () => {
    return axiosClient.get("/api/admin/seller/count");
}

export const viewSellerById = ({id} = {}) => {
    return axiosClient.get(`/api/admin/seller/${id}`);
}

export const approveApplication = ({id} = {}) => {
    return axiosClient.patch(`/api/admin/seller/${id}/approve`);
}