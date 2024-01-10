import Image from "next/image";
import usersIcon from '@/public/assets/billionUsers.svg'
import bussiness from '@/public/assets/bussiness.svg'
import encryption from '@/public/assets/encryption.svg'
import partners from '@/public/assets/partners.svg'
import support from '@/public/assets/support.svg'
import { FaCheckDouble } from "react-icons/fa";
import { RiShieldStarFill } from "react-icons/ri";

export default function Reason() {

    const reasons = [

        {
            id:1,
            title:'Precision & Accuracy',
            subtitle:'Our AI-driven algorithms ensure meticulous accuracy in converting financial documents to tax returns.'
    
        },
        {
            id:2,
            title:'Time-Efficient Solutions',
            subtitle:'Save time with our automated processes, leaving more room for strategic financial planning.'
    
        },
        {
            id:3,
            title:'Customizable & User-Friendly',
            subtitle:'Tailor our tools to meet your specific needs, with intuitive interfaces for seamless navigation.'
    
        },
        {
            id:4,
            title:'Reliability & Compliance',
            subtitle:'Pocket CFO ensures compliance with tax regulations, backed by factual verification and reliability.'
    
        },
        {
            id:5,
            title:'Seamless Financial Translations',
            subtitle:'Unlock the potential of Pocket CFO and manage your financial documentation.Our platform integrates with accounting databases and offers dedicated US GAAP accounting & US tax .'
    
        },
        {
            id:6,
            title:'Advanced AI Technology',
            subtitle:'Harness the power of AI for precise, error-free translations and reporting.'
    
        },
        
    ]
    

    return (
        <div className=" max-w-5xl  mx-auto ">
            <h2 className="text-center p-8">Why Choose Pocket CFO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 my-10 ">
                {
                    reasons.map((i) => (
                        <Card key={i.id} title={i.title} subtitle={i.subtitle} icon={i.icon} />
                    ))
                }
            </div>
        </div>
    )
}

function Card({ icon, title, subtitle }) {
    return (
        <div className="flex flex-col gap-4 md:text-center lg:text-left items-center text-center md:items-center lg:items-baseline border p-4 cursor-pointer rounded-md shadow-2xl   hover:shadow-xl   ">
            {/* <Image src={icon} width={60} height={200} alt="peoples" /> */}
            <RiShieldStarFill size={60} className=" text-blue-600" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="line-clamp-3  ">{subtitle}</p>
        </div>
    )
}