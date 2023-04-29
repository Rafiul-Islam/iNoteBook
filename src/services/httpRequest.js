import {showErrorToast} from "./toastServices";
import API_BASE_URL from '../config';
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjIyZmRjYTdiZjdhNmIwYzg2NjJkIn0sImlhdCI6MTY4Mjc4NTI1OH0.keW4Vl5VTTzyH1IOC2UfstGc1mzpJSMY4FD2_rnY998";

const headers = {
    'auth-token': token,
    'Content-Type': 'application/json'
};

const get = async (endPoint) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/${endPoint}`, {headers});
        return data;
    } catch (error) {
        showErrorToast(error.response.message);
        return null;
    }
}

export default {get};
