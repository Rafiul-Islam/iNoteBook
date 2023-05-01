import httpService from "../services/httpServices";
import {showErrorToast} from "./toastServices";
import API_BASE_URL from '../config';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjIyZmRjYTdiZjdhNmIwYzg2NjJkIn0sImlhdCI6MTY4Mjg2ODMzOX0.cpKEMx7QY5HZNzJ-XKiqdw083Y_OvxbqvCXMi2MfrMM";

const headers = {
    'auth-token': token,
    'Content-Type': 'application/json'
};

const getMethod = async (endPoint) => {
    try {
        const {data} = await httpService.get(`${API_BASE_URL}/${endPoint}`, {headers});
        return data;
    } catch (error) {
        error.response.data.errors && showErrorToast(error.response.data.errors);
        error.response.data.errors[0].msg && showErrorToast(error.response.data.errors[0].msg);
        return null;
    }
}

const postMethod = async (endPoint, obj) => {
    try {
        const {data} = await httpService.post(`${API_BASE_URL}/${endPoint}`, obj, {headers});
        return data;
    } catch (error) {
        error.response.data.errors && showErrorToast(error.response.data.errors);
        error.response.data.errors[0].msg && showErrorToast(error.response.data.errors[0].msg);
        return null;
    }
}

const putMethod = async (endPoint, obj) => {
    try {
        const {data} = await httpService.put(`${API_BASE_URL}/${endPoint}`, obj, {headers});
        return data;
    } catch (error) {
        error.response.data.errors && showErrorToast(error.response.data.errors);
        error.response.data.errors[0].msg && showErrorToast(error.response.data.errors[0].msg);
        return null;
    }
}

const deleteMethod = async (endPoint, id) => {
    try {
        await httpService.delete(`${API_BASE_URL}/${endPoint}/${id}`, {headers});
    } catch (error) {
        error.response.data.errors && showErrorToast(error.response.data.errors);
    }
}

const loginMethod = async (endPoint, credential) => {
    try {
        const {data} = await httpService.post(`${API_BASE_URL}/${endPoint}`, credential);
        return data;
    } catch (error) {
        error.response.data.errors && showErrorToast(error.response.data.errors);
        error.response.data.errors[0].msg && showErrorToast(error.response.data.errors[0].msg);
        return null;
    }
}

export default {
    get: getMethod,
    post: postMethod,
    put: putMethod,
    delete: deleteMethod,
    login: loginMethod
};
