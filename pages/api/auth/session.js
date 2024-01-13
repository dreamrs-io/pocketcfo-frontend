import { getCookie, getCookies } from "cookies-next";




export default function handler (req,res){





    const auth = cookieStore.get('x-laravel-token');

    console.log(auth)

}