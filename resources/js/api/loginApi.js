import axiosClient from "./axiosClient";

const loginApi = {
    getuser: (formValue) => {
        if (formValue === {}) return;

        const url = "/login";
        return axiosClient.post(url, formValue);
    },
};

export default loginApi;
