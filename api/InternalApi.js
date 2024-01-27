import axios from "axios";
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}/auth`,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    }
});


const nextApi = {

    getSession: async function () {
        try {
            const response = await axiosClient.get(`/session`)
            return response.data;
        } catch (error) {
            console.log()
        }
    },
    



}

export default nextApi;



