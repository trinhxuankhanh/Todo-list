import axiosClient from "./axiosClient";

const putUpdateTaskApi = {
    put: (id, value) => {
        const url = `/item/${id}`;
        return axiosClient.put(url, value);
    },
};

export default putUpdateTaskApi;
