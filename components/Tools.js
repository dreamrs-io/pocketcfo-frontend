import { generalTools } from "@/data/content";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";

export default function Tools() {

    return (

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            {
                generalTools.map((i)=>(
                    <div key={i.id}>
                        <p className="text-sm ml-2 mb-2 text-gray-400">{i.title}</p>
                        {
                            i.tools.map((t)=>(
                                <div key={t.id} className="flex-col gap-4">
                                    <ToolItem color={t.color} bg={t.bg} />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}


function ToolItem({ title = 'Compress PDF' , color, bg, icon = <CgMenuGridR />})
{
    
    const Icon = React.cloneElement(icon, { className: `${color} group-hover:text-white` , size : 24});
    

    return (
        <div className={`gap-1 flex cursor-pointer items-center ${bg} justify-start p-2 rounded-sm  group`}>
            {Icon}
            <p className="text-sm font-bold group-hover:text-white">{title}</p>
        </div>
    )

}