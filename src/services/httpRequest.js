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

const deleteMethod = async (endPoint, id) => {
    try {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${API_BASE_URL}/${endPoint}/${id}`, {headers});
                swal.fire(
                    'Deleted!',
                    'Your file has been deleted!',
                    'success'
                )
            }
        })
    } catch (error) {
        showErrorToast(error.response.message);
    }
}

export default {
    get: getMethod,
    delete: deleteMethod
};
