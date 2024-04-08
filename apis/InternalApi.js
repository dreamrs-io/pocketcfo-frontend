import { ErrorCodes } from "@/utils/Errors";
import axios from "axios";
import { toast } from "react-toastify";
import { resolve } from "styled-jsx/css";
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
        try {

            const response = await axiosClient.post(`/stripe/manage`);
            toast.update(id, { render: "Redirecting..", type: "success", isLoading: false });
            return response.data;
        } catch (error) {
            
            if (error.response.data.code =='1000'){

                toast.update(id, { autoClose: 900, render: ErrorCodes.NO_ACTIVE_SUBSCRIPTIONS.message, type: "warn", isLoading: false });

                return null;

            }
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return null ;
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
        const id = toast.loading('Updating......');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/instances`, data);
            toast.update(id, { autoClose:1000, render: "Updated "+ data.name + " successfully", type: "success", isLoading: false });
            console.log(response);
            return response.data;
        } catch (error) {
            toast.update(id, {  autoClose:1000, render: error.response.data.message , type: "error", isLoading: false , });
        }


    },
    updatedInstancePasswrod: async function (instance_id,data){
        const id = toast.loading('Updating......');
        try {
            const response = await axiosClient.post(`/instances/${instance_id}`, data);
            toast.update(id, { autoClose:1000, render: "Updated successfully", type: "success", isLoading: false });
            console.log(response);
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose:1000,   render: error.response.data.message , type: "error", isLoading: false , });
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
    redirectToDemo:async function(){
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.get(`/instances/authorize`);
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false,autoClose: 900 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }



    }




}

export default nextApi;



