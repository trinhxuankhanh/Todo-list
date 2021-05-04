import axiosClient from "./axiosClient";

const deleteTaskApi = {
    delete: (id) => {
        if (id === {}) return;

        const url = `/item/${id}`;
        return axiosClient.delete(url);
    },
};

export default deleteTaskApi;
