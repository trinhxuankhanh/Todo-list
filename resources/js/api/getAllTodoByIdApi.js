import axiosClient from "./axiosClient";

const getAllToDoById = {
    get: (id) => {
        if (id === {}) return;

        const url = `/items/${id}`;
        return axiosClient.get(url);
    },
};

export default getAllToDoById;
