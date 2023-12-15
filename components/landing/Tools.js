import {MdOutlineKeyboardArrowRight} from 'react-icons/md' 
import Link from 'next/link';
import { sectionTools } from '@/data/content';
export default function LTools (){
    return (
        <div className="max-w-5xl mx-auto p-10  ">
            <div className="text-center">
                <h2>Most Popular PDF Tools</h2>
                <p className="mt-4">21 tools to convert, compress, and edit PDFs for free. Try it out today!</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                    {sectionTools.map((i)=>(
                        <Item key={i.id} title={i.title} subtitle={i.subtitle} icon={i.icon} href={i.href} />
                    ))}
                </div>
                <div className='mt-8'>
                    <Link href='#' className='btn !py-3 bg-blue-600 text-white font-bold text-sm'>See All PDF Tools</Link>
                </div>
            </div>
        </div>
    );
}

function Item({icon,title,subtitle,href}){
    return (
        <Link href={href} className="p-4 border rounded-sm bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all duration-100">
            <div className='flex gap-4 items-start '>
                {icon}
                <div>
                    <p className='font-bold text-sm text-left'>{title}</p>
                    <p className='text-xs text-left'>{subtitle}</p>
                </div>
                <MdOutlineKeyboardArrowRight className='ml-auto' size={24}/>
            </div>
        </Link>

    );


}