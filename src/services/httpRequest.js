import axios from "axios";
import swal from 'sweetalert2';
import {showErrorToast} from "./toastServices";
import API_BASE_URL from '../config';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjIyZmRjYTdiZjdhNmIwYzg2NjJkIn0sImlhdCI6MTY4Mjg2ODMzOX0.cpKEMx7QY5HZNzJ-XKiqdw083Y_OvxbqvCXMi2MfrMM";

const headers = {
    'auth-token': token,
    'Content-Type': 'application/json'
};

const getMethod = async (endPoint) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/${endPoint}`, {headers});
        return data;
    } catch (error) {
        showErrorToast(error.response.message);
        return null;
    }
}

const postMethod = async (endPoint, obj) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/${endPoint}`, obj, {headers});
        return data;
    } catch (error) {
        showErrorToast(error.response.message);
        return null;
    }
}

const deleteMethod = async (endPoint, id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${endPoint}/${id}`, {headers});
    } catch (error) {
        showErrorToast(error.response.message);
    }
}

export default {
    get: getMethod,
    post: postMethod,
    delete: deleteMethod
};
