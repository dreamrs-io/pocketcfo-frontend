import axios from "axios";
import { toast } from "react-toastify";
import Router from 'next/router';
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_LARAVEL_API}/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});



const apiService = {

    sigin: async function (data) {
        try {
            const response = await axiosClient.post(`auth/sign-in`, data)
            return response.data;
        } catch (error) {
            toast.error('server error')
        }
    },
    sigup: async function (data) {
        try {
            const response = await axiosClient.post(`auth/sign-up`, data)
            return response.data;
        } catch (error) {
            toast.error('server error')
            
        }
    },
    convertFile: async function (file,onProgress){
        if (!file) {
            toast.error('Please select a file to upload');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axiosClient.post('/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: progressEvent => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    onProgress(percentCompleted);
                },
            });
            toast.success('File uploaded successfully');
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error)
            toast.error('Error uploading file');
        }


    }



}

export default apiService;



