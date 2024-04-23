import { ErrorCodes } from "@/utils/Errors";
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
        console.log(priceId)
        try {

            const response = await axiosClient.post(`/stripe/checkout`, { priceId: priceId });
            toast.update(id, { render: "Redirecting..", type: "success", isLoading: false });
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false });
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

            if (error.response.data.code == '1000') {

                toast.update(id, { autoClose: 900, render: ErrorCodes.NO_ACTIVE_SUBSCRIPTIONS.message, type: "warn", isLoading: false });

                return null;

            }
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return null;
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
    updateInstance: async function (data) {
        const id = toast.loading('Updating......');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/instances`, data);
            toast.update(id, { autoClose: 1000, render: "Updated " + data.name + " successfully", type: "success", isLoading: false });
            console.log(response);
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false, });
        }


    },
    redirectInstance: async function (data) {
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/instances/authorize`, data);
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false, autoClose: 900 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }


    },
    redirectToDemo: async function () {
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.get(`/instances/authorize`);
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false, autoClose: 900 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            return response.data;
        } catch (error) {
            toast.update(id, { autoClose: 900, render: "Error Occured", type: "error", isLoading: false });
            return error
        }



    },
    register: async function (data) {
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/auth/register`, data);
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false, autoClose: 900 });
            return response;
        } catch (error) {
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false });
            return error
        }
    },
    verifyEmail: async function (token) {
        const id = toast.loading('Verifying your email please wait.....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/auth/verify-email`, { token: token });
            toast.update(id, { render: "Email verified redirecting.......", type: "success", isLoading: false, autoClose: 1500 });
            return response;
        } catch (error) {
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false });
            return error
        }

    },
    requestNewEmailVerification: async function () {
        const id = toast.loading('Sending verification email.....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.get(`/auth/verify-email`);
            toast.update(id, { render: "Email sent", type: "success", isLoading: false, autoClose: 1500 });
            return response;
        } catch (error) {
            console.log(error)
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false });
            return error
        }
    },
    async restartSubscription(subscriptionId) {

        const id = toast.loading('Restarting subscription.....');
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await axiosClient.post(`/stripe/restart-subscription`,{subscriptionId:subscriptionId});
            toast.update(id, { render: "Redirecting.....", type: "success", isLoading: false, autoClose: 1500 });
            return response.data;
        } catch (error) {
            console.log(error)
            toast.update(id, { autoClose: 1000, render: error.response.data.message, type: "error", isLoading: false });
            return error
        }

    }

}

export default nextApi;



