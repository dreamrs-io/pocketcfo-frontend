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

            const response = await axiosClient.post(`/stripe/checkout`, { priceId: priceId });
            toast.update(id, { render: "Redirecting..", type: "success", isLoading: false });
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }
    },
    getSubscriptionsPortal: async function () {

        const id = toast.loading('Redirecting.....');
        console.log(id);
        try {

            const response = await axiosClient.post(`/stripe/manage`);
            toast.update(id, { render: "Redirecting..", type: "success", isLoading: false });
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }




    },
    getInstances: async function () {
        try {
            const response = await axiosClient.get(`/instances`);
            return response.data;
        } catch (error) {
            return error

        }



    },
    updateInstance: async function ( data ) {
        const id = toast.loading();
        try {
            const response = await axiosClient.post(`/instances`, data);
            toast.update(id, { render: "Updated "+ data.name + " successfully", type: "success", isLoading: false });
            console.log(response);
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }


    },
    redirectInstance: async function ( data ) {
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/instances/authorize`, data);
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false,autoClose: 900 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }


    },




}

export default nextApi;



