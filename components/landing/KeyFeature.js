import Image from "next/image";
import { BsStars } from "react-icons/bs";

export default function KeyFeature() {

    const reasons = [

        {
            id:1,
            title:'Secure Cloud-Based Conversion',
            subtitle:"Ensure your data's security and accessibility."
        },
        {
            id:2,
            title:'Customizable Templates',
            subtitle:'Tailor documents to your specific needs.'
        },
        {
            id:3,
            title:'Real-Time Collaboration',
            subtitle:'Work efficiently with your team in a collaborative environment.'
    
        },
        
    ]
 


    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center p-8">Key Features of Pocket CFO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
                {
                    reasons.map((i) => (
                        <Card key={i.id} title={i.title} subtitle={i.subtitle} icon={i.icon} />
                    ))
                }
            </div>
        </div>
    )
}

function Card({ title, subtitle }) {
    return (
        <div className="flex flex-col gap-4 md:text-center lg:text-left items-center text-center md:items-center lg:items-baseline border p-4 cursor-pointer rounded-md shadow-2xl   hover:shadow-xl  ">
            <BsStars size={40} className="text-blue-600"/>
            <p className="text-xl font-bold">{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}