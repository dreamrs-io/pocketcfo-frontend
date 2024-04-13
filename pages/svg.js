import Image from "next/image";
import logo from '@/public/assets/logo.svg'
import { useRef } from "react";
import Link from "next/link";
export default function Home() {

    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
            <Logo/>
            <div className="flex flex-col gap-4 mt-10">
                <h4>Email Verification</h4>
                <p>Hi username,</p>
                <p>You are almost setup please click the link below to verify your email</p>
                <a className="bg-blue-600 w-full text-center p-4 text-white font-bold">Verify my email address</a>
            </div>
        </div>
    );
}

function Logo() {
    return (
        <Link href={'/'} className="flex gap-1 items-center">
            <Image className="" alt="logo" src={logo} width={40} height={20} />
            <p className="text-2xl font-extrabold">PocketCFO</p>
        </Link>
    )
}
