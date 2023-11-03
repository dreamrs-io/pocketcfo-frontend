import Image from "next/image";
import usersIcon from '@/public/assets/billionUsers.svg'
import { reasons } from "@/data/content";

export default function Reason() {

    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-center p-8">Why Choose Smallpdf?</h2>
            <div className="grid grid-cols-3 gap-8 my-10">
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
        <div className="flex flex-col gap-4">
            <Image src={icon} width={60} height={200} alt="peoples" />
            <p className="text-xl font-bold">{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}