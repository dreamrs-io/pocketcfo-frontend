import axios from "axios";
import { toast } from "react-toastify";
const axiosClient = axios.create({
    baseURL: `https://api.cforesource.org/wp-json/wp/v2/posts`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const wordpressApi = {

    getPosts:async function(){

        try 
        {
            const res = await axiosClient.get();
            return res.data  
        } catch (error) {
            toast.error('Error while reteriving blog posts')
            return [];
        }
    },
    getPostBySlug: async function(slug){
        try 
        {
            const res = await axiosClient.get('?slug='+slug)
            return res.data  
        } catch (error) {
            toast.error('Error while reteriving blog posts')
            return [];
        }



    }


    
  
}

export default wordpressApi;



