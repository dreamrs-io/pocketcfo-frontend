import Image from "next/image"
import loginSvg from '@/public/assets/login.svg'
import Link from "next/link";
import Button from "@/components/common/Button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { Inter } from 'next/font/google';
import logoSVG from "@/public/assets/logo.svg"
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import apiService from "@/api/ExternalApi";
import Cookies from "js-cookie";
import Head from "next/head";
import { signIn } from "next-auth/react"
import { getServerAuthSession } from "./api/auth/[...nextauth]";
const inter = Inter({ subsets: ['latin'] })

export default function Login() {

    const router = useRouter();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })
    async function onSubmit(values) {
        const res = await apiService.sigin(values);
        if (res.status == true) {
            const u = {
                accessToken: res.data.accessToken,
                username: res.data.user.name,
                email: res.data.user.email,
            }
            Cookies.set('laravel_token', JSON.stringify(u), { expires: 7 })
            toast.success('Loggin In')
            router.push('/');
        } else {
            toast.error(res.message);
        }

    }

    return (
        <>
            <Head>
                <title>PocketCFO | Login</title>
                <link rel="canonical" href='https://www.pocketcfos.com/login' />
            </Head>
            <div className={`relative h-screen bg-blue-600 flex flex-col justify-center ${inter.className}`}>
                <div className="flex justify-between h-full items-center ">
                    <div className="bg-white h-full w-full     border flex flex-col justify-center items-center right-skew ">
                        <form onSubmit={formik.handleSubmit} className="w-2/4   ">
                            <Logo />
                            <h2 className="text-xl font-bold text-left my-6 ">Login to start </h2>
                            <div className="my-4">
                                <label className="input-wrapper">Email</label>
                                <input className={`input-box  ${formik.errors.email && formik.touched.email ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='text' id='email' placeholder="jhon Dhoe" {...formik.getFieldProps('email')} />
                                {formik.errors.email && formik.touched.email ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.email}</div> : <></>}
                            </div>
                            <div className="my-4">
                                <label className="input-wrapper">Password</label>
                                <input className={`input-box  ${formik.errors.password && formik.touched.password ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='password' id='password' placeholder="••••••••" {...formik.getFieldProps('password')} />
                                {formik.errors.password && formik.touched.password ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.password}</div> : <></>}
                            </div>

                            <div className="flex  justify-end" >
                                <Link href={'/recover'} className={`mt-1  hover:underline`}  >
                                    Forgot Password
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <Button type='submit' label="Login" width="w-full" />
                                <Button type='button' label="Sign In with Google" onClick={() => { signIn('google') }} inverted='true' width="w-full" ico={<FcGoogle className="w-6 h-6" />} />
                            </div>
                            <div className="flex  justify-center mt-4 items-center gap-2" >
                                <p className="text-gray-400 text-sm">{"Don't have an account yet"}</p>
                                <Link href={'/register'} className={` hover:underline`}  >
                                    Signup Here
                                </Link>
                            </div> 
                        </form>
                    </div>

                    <div className="w-full hidden md:block animate-bounce">
                        <Image src={loginSvg} width={900} alt="login" />
                    </div>

                </div>
            </div>
        </>
    );
}


function Logo() {
    return (
        <div className="flex gap-2 justify-center items-center ">
            <Image className="" alt="logo" src={logoSVG} width={30} height={20} />
            <p className="text-2xl font-extrabold">PocketCFO</p>
        </div>
    )
}

function login_validate(values) {

    const errors = {};


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }
    return errors;
}


export async function getServerSideProps(context) {

    const session = await getServerAuthSession(context.req, context.res);


    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {


        }
    }



}

