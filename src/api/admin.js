import axiosClient from "./axiosClient";

export const tableData = ({filter , page , size}) => {
    return axiosClient.get("/api/admin/seller" , { params: {filter , page , size}});
}

export const filterCounter = () => {
    return axiosClient.get("/api/admin/seller/count");
}