import axios from "axios";
import { toast } from "react-toastify";
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_LARAVEL_API}/auth`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});


const apiService = {

    sigin: async function (data) {
        try {
            const response = await axiosClient.post(`/sign-in`, data)
            return response.data;
        } catch (error) {
            toast.error('server error')
        }
    },
    sigup: async function (data) {
        try {
            const response = await axiosClient.post(`/sign-up`, data)
            return response.data;
        } catch (error) {
            toast.error('server error')
            
        }
    }



}

export default apiService;



