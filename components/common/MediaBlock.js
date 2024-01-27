import Image from "next/image";
import Link from "next/link";


export default function MediaBlock({ 
    orientation = 'right', 
    title = '', 
    image = '',
    imageWidth=700, 
    paragraph = '', 
    linkEnabled = true ,
    linkText='',
    linkHref='',
}) {
    return (
        <div className="max-w-6xl  mx-auto px-8">
            <div className={`flex flex-col lg:flex-row items-center  `}>
                <div className={` ${orientation=='left'&&'order-2'}`}>
                    <Image src={image} width={imageWidth} alt="svgart" />
                </div>
                <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                    <h3 className="text-2xl">{title}</h3>
                    <p >{paragraph}</p>
                    {

                        linkEnabled &&
                            <Link href={linkHref} className="btn bg-blue-600 text-white font-bold max-w-fit">{linkText}</Link>

                    }
                
                </div>
            </div>
        </div>
    );
}