import { Menu } from "@headlessui/react"
import React, { useRef } from "react"
import { CgMenuGridR } from "react-icons/cg"
import { HiMenu } from "react-icons/hi"
import Tools from "./Tools"
import Link from "next/link"
import logoSVG from "@/public/assets/logo.svg"
import { useUser } from "@/contexts/userContext"
import Avatar from "avatar-initials"
import Image from "next/image"
import { BiLogOut } from "react-icons/bi"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

export default function NavBar() {
    const { user } = useUser();


    return (
        <nav className="p-2 border-b h-14 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <Logo />
                    <ul className="flex gap-4 ml-2 ">
                        <li className=""><ToolMenu /></li>
                        {/* <div className="hidden flex-wrap gap-4 max-h-4 sm:flex items-center">
                            <li className="link">Compress</li>
                            <li className="link">Convert</li>
                            <li className="link">Merge</li>
                            <li className="link">Edit</li>
                            <li className="link">Sign</li>
                        </div> */}
                    </ul>
                </div>
                <div className="flex gap-6 ml-6 items-center">
                    <ul className="hidden md:flex items-center gap-4 border-l pl-4">
                        {
                            user ?
                                <Profile user={user} />
                                :
                                <>
                                    <Link href={'/login'} className="link">Login</Link>
                                    <Link href={'/login'} className=" bg-blue-600 text-white px-4 py-2 font-semibold rounded-sm cursor-pointer text-sm whitespace-nowrap">Free Trial</Link>
                                </>


                        }

                    </ul>
                    <ul className="hidden sm:flex items-center gap-6  ">
                        {/* <li className="link">Templates</li> */}
                        <Link href={'/pricing'} className="link">Pricing</Link>
                        <li className="link">Teams</li>
                    </ul>

                    <button className="md:hidden">
                        <HiMenu size={28} />
                    </button>
                </div>
            </div>
        </nav>
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



function Profile({ userData }) {
    // const router = useRouter();
    const { user, setUser } = useUser();
    function logout(){
        Cookies.remove('laravel_token')
        setUser(false);
        window.location.reload();
    }
 
    return (
        <div className="">
            <Menu as="div" className="inline-block text-left relative">
                <div>
                    <Menu.Button className="link flex items-center gap-[2px] ">
                        {/* <div>
                                M
                        </div> */}
                        <Image src={gravatar_url(user.email)} width={40} height={40} alt="user" className="rounded-full" />
                    </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0  border shadow-2xl rounded-md bg-white  w-max">
                    <div className="border-b">
                        <div className="flex gap-4 w-full p-4">
                            <div>
                                <Image src={gravatar_url(user.email)} width={40} height={12} alt="user" className="rounded-full" />
                            </div>
                            <div className="flex flex-col cursor-pointer">
                                <p className="text-sm font-bold">{user.username}</p>
                                <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <button onClick={()=>{logout()}} className="px-4 py-2 hover:bg-red-500 w-full text-black font-bold hover:text-white transition-all duration-300 rounded-sm text-left ">
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



const gravatar_url = (email) => Avatar.gravatarUrl({
    email: email
});