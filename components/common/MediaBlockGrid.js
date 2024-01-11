

import Image from "next/image";
import usersIcon from '@/public/assets/billionUsers.svg'
import bussiness from '@/public/assets/bussiness.svg'
import encryption from '@/public/assets/encryption.svg'
import partners from '@/public/assets/partners.svg'
import support from '@/public/assets/support.svg'
import { FaMedal } from "react-icons/fa";

export default function MediaBlockGrid({content,title}) {
    
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center p-8">{title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
                {
                    content.map((i) => (
                        <Card key={i.id} title={i.h3} paragraph={i.p} icon={i.icon} />
                    ))
                }
            </div>
        </div>
    )
}

function Card({ icon, title, paragraph }) {
    return (
        <div className="flex flex-col gap-4 md:text-center lg:text-left items-center text-center md:items-center lg:items-baseline border p-4 cursor-pointer rounded-md shadow-2xl   hover:shadow-xl  ">
            <FaMedal size={40} className="text-blue-600"/>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="line-clamp-4 ">{paragraph}</p>
        </div>
    )
}