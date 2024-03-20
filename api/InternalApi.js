import axios from "axios";
import { toast } from "react-toastify";
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}`,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});


const nextApi = {

    getCheckoutSession: async function (priceId) {
        const id = toast.loading("Subscribing...");
        try {
            
            const response = await axiosClient.post(`/stripe/checkout`,{priceId:priceId});
            toast.update(id, { render: "Redirecting..", type: "success", isLoading: false });
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose:900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }
    },
    



}

export default nextApi;



