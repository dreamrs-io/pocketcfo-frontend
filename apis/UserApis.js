import axios from "axios";
import { toast } from "react-toastify";
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_LARAVEL_API}/`,
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});