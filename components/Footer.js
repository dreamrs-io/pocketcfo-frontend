import Image from "next/image"
import logo from "@/public/assets/logo.svg"
import Link from "next/link"
import { footerMenus, socialMedia } from "@/data/content"

import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"

export default function Footer() {

    return (
        <footer className="border-t mt-10">
            <div className="container mx-auto">
                <section className="flex-col lg:flex-row flex justify-between items-center  p-8">
                    <div className="mb-8 md:mb-0">
                        <Logo />
                        <p className="mt-4 font-semibold">We Make Finance Easy</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 w-3/4 gap-4">
                        {
                            footerMenus.map((i) => (
                                <div key={i.id} className="flex flex-col gap-3 lg:gap-4 items-center">
                                    <p className="font-bold underline underline-offset-4">{i.title}</p>
                                    {
                                        i.links.map((link) => (
                                            <Link key={link.id} className="link text-sm" href={link.href}>{link.title}</Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            <Socials />

        </footer>
    )
}



function Logo() {
    return (
        <div className="flex gap-2 items-center">
            <Image className="" alt="logo" src={logo} width={50} height={20} />
            <p className="text-2xl font-extrabold">PocketCFO</p>
        </div>
    )
}


function Socials() {

    return (
        <section className="border-t p-4 ">
            <div className="flex lg:flex-row flex-col-reverse   justify-between container mx-auto">
                <p className="flex  items-center gap-2 mb-4">
                    © {new Date().getFullYear()} PocketCfos  — Made with
                    <span>
                        <AiFillHeart className="text-red-600 animate-bounce  " size={24} />
                    </span>
                    for the people of the internet.
                </p>
                <div className="flex items-center justify-between ml-auto mb-4">
                    <div className='flex items-center gap-4'>
                        <Link href={socialMedia.facebook} className='p-2 border-2 border-dashed group hover:border-[#1877F2] duration-500 transition-all '>
                            <BsFacebook className='text-muted group-hover:text-[#1877F2] duration-500 transition-all' />
                        </Link>
                        <Link href={socialMedia.twitter} className='p-2 border-2 border-dashed group hover:border-[#00acee] duration-500 transition-all '>
                            <BsTwitter className='text-muted group-hover:text-[#00acee] duration-500 transition-all' />
                        </Link>
                        <Link href={socialMedia.linkden} className='p-2 border-2 border-dashed group hover:border-[#0077b5] duration-500 transition-all '>
                            <FaLinkedin className='text-muted group-hover:text-[#0077b5] duration-500 transition-all' />
                        </Link>
                        <Link href={socialMedia.insta} className='p-2 border-2 border-dashed group hover:border-[#8a3ab9] duration-500 transition-all '>
                            <FaInstagram className='text-muted group-hover:text-[#8a3ab9] duration-500 transition-all' />
                        </Link>

                        <Link href={socialMedia.youtube} className='p-2 border-2 border-dashed group hover:border-red-600 duration-500 transition-all '>
                            <BsYoutube className='text-muted group-hover:text-red-600 duration-500 transition-all' />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}