import axios from "axios";

const BASE_URL = "http://localhost:8080/api/content";

export const uploadContent = (formData) => {
    return axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const getAllContent = () => {
    return axios.get(BASE_URL);
};

export const downloadFile = (fileName) => {
    return axios.get(`${BASE_URL}/file/${fileName}`, {
        responseType: 'blob'
    });
};
