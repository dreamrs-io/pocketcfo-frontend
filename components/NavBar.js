import { Menu } from "@headlessui/react"
import Image from "next/image"
import React from "react"
import {CgMenuGridR} from "react-icons/cg"
import {HiMenu} from "react-icons/hi"
import Tools from "./Tools"

export default function NavBar() {
    return (
        <nav className="p-2 border-b h-14 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <Logo />
                    <ul className="flex gap-4 ml-2 ">
                        <li className=""><ToolMenu /></li>
                        <div className="hidden flex-wrap gap-4 max-h-4 sm:flex items-center">
                            <li className="link">Compress</li>
                            <li className="link">Convert</li>
                            <li className="link">Merge</li>
                            <li className="link">Edit</li>
                            <li className="link">Sign</li>
                        </div>
                    </ul>
                </div>
                <div className="flex gap-6 ml-6 items-center">
                    <ul className="hidden sm:flex items-center gap-6  ">
                        <li className="link">Templates</li>
                        <li className="link">Pricing</li>
                        <li className="link">Teams</li>
                    </ul>
                    <ul className="hidden md:flex items-center gap-4 border-l pl-4">
                        <li className="link ">Login</li>
                        <li className=" bg-blue-600 text-white px-4 py-2 font-semibold rounded-sm cursor-pointer text-sm whitespace-nowrap">Free Trial</li>
                    </ul>
                    <button className="md:hidden">
                        <HiMenu size={28}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <div className="flex gap-2 ">
            <Image className="" alt="logo" src={'https://s.smallpdf.com/static/2ae88642617fc2c0b873.svg'} width={30} height={20} />
            <p className="text-2xl font-extrabold">PocketCFO</p>
        </div>
    )
}



function ToolMenu() {
    return (
        <div>
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button className="link flex items-center gap-[2px] ">
                        <CgMenuGridR size={24}/>
                        <p className=" hidden sm:block">Tools</p>

                    </Menu.Button>
                    
                </div>
                <Menu.Items className="absolute right-0 top-[56px] bg-white w-full border z-20">
                    <div className=" p-6">
                        <div className="max-w-7xl mx-auto">
                            <Tools/>
                        </div>
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    )
}



