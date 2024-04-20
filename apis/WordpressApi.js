import axios from "axios";
import { toast } from "react-toastify";
const axiosClient = axios.create({
    baseURL: `https://api.cforesource.org/wp-json/wp/v2/posts`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const buildQueryString = (queryParams) => {
    const queryString = Object.keys(queryParams)
        .map((key) => {
            const value = queryParams[key];
            return value !== undefined ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : null;
        })
        .filter(Boolean)
        .join('&');

    return queryString ? `?${queryString}` : '';
};

const wordpressApi = {

    getPosts: async function (params) {

     

        const queryParams = {
            per_page: params?.limit || undefined
        };

        const query = buildQueryString(queryParams);


        try {
            const res = await axiosClient.get(query);
            return res.data
        } catch (error) {
            toast.error('Error while reteriving blog posts')
            return [];
        }
    },
    getPostBySlug: async function (slug) {
        try {
            const res = await axiosClient.get('?slug=' + slug)
            return res.data
        } catch (error) {
            toast.error('Error while reteriving blog posts')
            return [];
        }



    }




}

export default wordpressApi;



