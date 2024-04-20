import Cryption from "@/lib/encryption";
import { isExpired } from "@/utils/helper";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import loginSvg from '@/public/assets/login.svg'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import nextApi from "@/apis/InternalApi";
import logoSVG from "@/public/assets/logo.svg"
import Link from "next/link";
import Button from "@/components/common/Button";
import { useFormik } from "formik";

const inter = Inter({ subsets: ['latin'] })

export default function VerifyEmail() {

    const router = useRouter();


    const formik = useFormik({
        initialValues: {
            password: '',
            confirm_password:''
        },
        validate: login_validate,
        onSubmit
    })
    async function onSubmit(values) {
        const id = toast.loading('Please wait....');
        await new Promise(resolve => setTimeout(resolve, 1000));
        const req = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect:false
        })

        if (req.ok){
            toast.update(id, { render: "Redirecting....", type: "success", isLoading: false,autoClose: 1000 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/')
        }
        if (req.error){
            toast.update(id, { autoClose: 1000, render: req.error, type: "error", isLoading: false });
        }

    }
    

    return (
        <>
            <Head>
                <title>PocketCFO | Reset Password</title>
                <link rel="canonical" href='https://www.pocketcfos.com/login' />
            </Head>
            <div className={`relative h-screen bg-blue-600 flex flex-col justify-center ${inter.className}`}>
                <div className="flex justify-between h-full items-center ">
                    <div className="bg-white h-full w-full     border flex flex-col justify-center items-center right-skew ">
                        <form onSubmit={formik.handleSubmit} className="w-2/4   ">
                            <Logo />
                            <h2 className="text-xl font-bold text-left my-6 ">Reset your password</h2>
                            <div className="my-4">
                                <label className="input-wrapper">Password</label>
                                <input className={`input-box  ${formik.errors.password && formik.touched.password ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='password' id='password' placeholder="••••••••" {...formik.getFieldProps('password')} />
                                {formik.errors.password && formik.touched.password ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.password}</div> : <></>}
                            </div>
                            <div className="my-4">
                                <label className="input-wrapper">Confirm Password</label>
                                <input className={`input-box  ${formik.errors.confirm_password && formik.touched.confirm_password ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                                    type='confirm_password' id='confirm_password' placeholder="••••••••" {...formik.getFieldProps('confirm_password')} />
                                {formik.errors.confirm_password && formik.touched.confirm_password ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.confirm_password}</div> : <></>}
                            </div>


                            <div className="flex flex-col gap-2 mt-4">
                                <Button type='submit' label="Reset" width="w-full" />
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

    // validation for password
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }

    // validate confirm password
    if (!values.confirm_password) {
        errors.confirm_password = "Required";
    } else if (values.password !== values.confirm_password) {
        errors.confirm_password = "Password Not Match...!"
    } else if (values.confirm_password.includes(" ")) {
        errors.confirm_password = "Invalid Confirm Password"
    }

    return errors;
}



