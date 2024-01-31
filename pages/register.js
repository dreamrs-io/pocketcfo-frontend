import Image from "next/image"
import loginSvg from '@/public/assets/login.svg'
import Link from "next/link";
import Button from "@/components/common/Button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { Inter } from 'next/font/google';
import logoSVG from "@/public/assets/logo.svg"
import apiService from "@/api/ExternalApi";
import { useRouter } from "next/router";
import { parse } from "cookie-js";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Register() {

    const router = useRouter();
    const formik = useFormik({

        initialValues: { username: '', email: '', password: '', password_confirmation: '' },
        onSubmit,
        validate: register_validate
    })
    async function onSubmit(values) {
        const res = await apiService.sigup(values);
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
                <title>PocketCFO | Register</title>
                <link rel="canonical" href='https://www.pocketcfos.com/register' />
            </Head>
            <div className={`relative h-screen bg-blue-600 flex flex-col justify-center ${inter.className}`}>
                <div className="flex justify-between h-full items-center ">

                    <div className="bg-white h-full w-full     border flex flex-col justify-center items-center right-skew ">

                        <form onSubmit={formik.handleSubmit} className="w-2/4   ">
                            <Logo />
                            <h2 className="text-xl font-bold text-left my-6 ">Register to start </h2>
                            <div className="my-4">
                                <label className="input-wrapper">Full Name</label>
                                <input className={`input-box  ${formik.errors.username && formik.touched.username ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='text' id='username' placeholder="jhon Dhoe" {...formik.getFieldProps('username')} />
                                {formik.errors.username && formik.touched.username ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.username}</div> : <></>}
                            </div>
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
                            <div className="my-4">
                                <label className="input-wrapper">Confirm Password</label>
                                <input className={`input-box  ${formik.errors.password_confirmation && formik.touched.password_confirmation ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='password' id='password_confirmation' placeholder="••••••••" {...formik.getFieldProps('password_confirmation')} />
                                {formik.errors.password_confirmation && formik.touched.password_confirmation ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.password_confirmation}</div> : <></>}
                            </div>
                            <button type="submit" className="btn-login w-full disabled:bg-gray-300 disabled:border-transparent" disabled={!(formik.isValid && formik.dirty)} >Register</button>
                            <div className="flex flex-col gap-2 mt-4">
                                <Button type='button' label="Sign In with Google" onClick={() => { signIn('google') }} inverted='true' width="w-full" ico={<FcGoogle className="w-6 h-6" />} />
                                {/* <Button label="Sign In with Github" inverted='true' width="w-full" ico={<FaGithub className="w-6 h-6" />} /> */}
                            </div>
                            <div className="flex  justify-end mt-4 items-center gap-2" >
                                <Link href={'/login'} className={`mt-2  hover:underline`}  >
                                    <p className="">Already Have Account</p>
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




function register_validate(values) {

    const errors = {};

    if (!values.username) {
        errors.username = "Required";
    } else if (!(values.username.includes(" "))) {
        errors.username = "Invalid Username Must include a Space!"
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }

    // validate confirm password
    if (!values.password_confirmation) {
        errors.password_confirmation = "Required";
    } else if (values.password !== values.password_confirmation) {
        errors.password_confirmation = "Password Not Match...!"
    } else if (values.password_confirmation.includes(" ")) {
        errors.password_confirmation = "Invalid Confirm Password"
    }

    return errors;
}


export async function getServerSideProps(context) {
    const cookies = parse(context.req.headers.cookie || '');
    if (cookies.laravel_token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {

        return {
            props: {

            },
        };
    }

}
