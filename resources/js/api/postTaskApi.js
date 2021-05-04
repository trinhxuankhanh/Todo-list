import axiosClient from "./axiosClient";

const postTaskApi = {
    post: (formValue) => {
        if (formValue === {}) return;

        const url = "/item/store";
        return axiosClient.post(url, formValue);
    },
};

export default postTaskApi;
