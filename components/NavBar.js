import { Menu } from "@headlessui/react"
import React, { useEffect, useRef, useState } from "react"
import { CgMenuGridR } from "react-icons/cg"
import { HiMenu } from "react-icons/hi"
import Tools from "./Tools"
import Link from "next/link"
import logoSVG from "@/public/assets/logo.svg"
import Avatar from "avatar-initials"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"
import nextApi from "@/apis/InternalApi"
import { toast } from "react-toastify"


export default function NavBar() {

    const { status, data: session, } = useSession()

    const [isOpen,setIsOpen] = useState(false)

    useEffect(() => {

        if (session) {
            if (session.user.verified == false) {

                setIsOpen(true);
            }
        }

    }, [status])

    async function handleClick() {

        const r = await nextApi.redirectToDemo();

        if (r) {

            window.open(r.url, '_blank');

        }


    }

    return (
        <>
            <VerifyEmailAlert isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav className="p-2 px-6 border-b h-14  ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Logo />
                        <ul className="flex gap-4 ml-2 ">
                            <li className=""><ToolMenu /></li>
                        </ul>
                    </div>
                    <div className="flex gap-6 ml-6 items-center">
                        <ul className="hidden sm:flex items-center gap-6  ">
                            {/* <li className="link">Templates</li> */}
                            <Link href={'/pricing'} className="link">Pricing</Link>
                            <Link href={'/pricing'} className="link">Docs</Link>
                            <button id="demo" onClick={() => { handleClick() }} className="  px-4 py-1 bg-blue-600 text-white rounded-sm">Demo</button>
                        </ul>
                        <ul className="hidden md:flex items-center gap-4 border-l pl-4">
                            {
                                status == 'loading' ?
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    :
                                    status == 'authenticated' ?
                                        <Profile user={session.user} />
                                        :
                                        <>
                                            <Link href={'/login'} className="link">Login</Link>
                                            {/* <Link href={'/login'} className=" bg-blue-600 text-white px-4 py-2 font-semibold rounded-sm cursor-pointer text-sm whitespace-nowrap">Free Trial</Link> */}
                                        </>

                            }



                        </ul>

                        <button className="md:hidden">
                            <HiMenu size={28} />
                        </button>
                    </div>
                </div>

            </nav>

        </>
    )
}

function Logo() {
    return (
        <Link href={'/'} className="flex gap-1 items-center">
            <Image className="" alt="logo" src={logoSVG} width={40} height={20} />
            <p className="text-2xl font-extrabold">PocketCFO</p>
        </Link>
    )
}
function Profile({ user }) {
    async function portall() {
        const portal = await nextApi.getSubscriptionsPortal();
        if (portal) {
            window.open(portal.session.url, '_blank');
        }

    }
    return (
        <div className="">
            <Menu as="div" className="inline-block text-left relative">
                <div>
                    <Menu.Button className="link flex items-center - ">
                        <Image src={user.image} width={40} height={40} alt="user" className="rounded-full border-4 border-gray-200" />
                    </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0  border shadow-2xl rounded-md bg-white  w-max">
                    <div className="border-b">
                        <div className="flex gap-4 w-full p-4">
                            <div>
                                <Image src={user.image} width={40} height={40} alt="user" className="rounded-full" />
                            </div>
                            <div className="flex flex-col cursor-pointer">
                                <p className="text-sm font-bold">{user.name}</p>
                                <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">

                        <button onClick={() => { portall() }} className="px-3 py-2 hover:bg-gray-100 w-full block text-gray-600 font-semibold transition-all duration-300 rounded-sm text-left text-xs">Subscriptions</button>
                        <Link href={'/dashboard'} className="px-3 py-2 hover:bg-gray-100 w-full block text-gray-600 font-semibold transition-all duration-300 rounded-sm text-left text-xs">Dashboard</Link>
                        <button onClick={() => { signOut() }} className="px-3 py-2 hover:bg-gray-100 w-full text-gray-600 font-semibold transition-all duration-300 rounded-sm text-left text-xs ">
                            <span>Logout </span>
                        </button>

                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
}
function ToolMenu() {

    const buttonARef = useRef(null);

    const handleButtonClickB = () => {
        if (buttonARef.current) {
            buttonARef.current.click();
        }
    }
    return (
        <div>
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button ref={buttonARef} className="link flex items-center gap-[2px] ">
                        <CgMenuGridR size={24} />
                        <p className=" hidden sm:block">Tools</p>

                    </Menu.Button>

                </div>
                <Menu.Items className="absolute right-0 top-[56px] bg-white w-full border z-20">
                    <div className=" p-6">
                        <div onClick={handleButtonClickB} className="max-w-7xl mx-auto ">
                            <Tools />
                        </div>
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    )
}

function VerifyEmailAlert({ isOpen = true, setIsOpen }) {

    const [closing,setIsClosing] = useState(false);
    async function handleClose(){
        setIsClosing(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsOpen(false);
        setIsClosing(false);
    }
    async function sendVerificationEmail(){
        nextApi.requestNewEmailVerification();
    }
    return (
        <>
            {isOpen &&
                <div id="alert-border-4" className={`sticky top-0 flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 transition-all duration-1000 opacity-100 ${closing && '!opacity-0' }  `} role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div className="ms-3 text-sm font-medium">
                        Please verify your email. An email has been sent to your email address for verification. 
                        <button className="text-yellow-800 font-bold underline ml-2" onClick={sendVerificationEmail}> Request New Verification Email</button>
                    </div>
                    <button type="button" onClick={()=>{handleClose()}} className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 " >
                        <span className="sr-only">Dismiss</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>}
        </>
    );
}



