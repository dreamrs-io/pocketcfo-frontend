import Image from "next/image";
import Link from "next/link";

export default function Sections(){
    return (
        <>
            <div className="container mx-auto mt-20 p-8">
                <div className="text-center flex-col flex gap-4 max-w-xl mx-auto">
                    <h2>Keep Your Simple Tasks Simple</h2>
                    <p className="">Smallpdf is the first and only PDF software you’ll love. We have all the tools you’ll need to start, manage, and finish your work with digital documents.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-20 ">
                    <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                        <h3>Work Directly on Your Files</h3>
                        <p className="max-w-xl">Do more than just view PDFs. Highlight and add text, images, shapes, and freehand annotations to your documents. You can connect to 20 other tools to enhance your files further.</p>
                        <Link  href={'#'} className="btn bg-blue-600 text-white font-bold max-w-fit   ">Edit A PDF Now</Link>
                    </div>
                    <div className="w-full">
                        <Image src={'https://s.smallpdf.com/static/044c10a9e45775957eb2.svg'} width={600} height={250} alt="svgart" />
                    </div>

                </div>
            </div>
            <div className="container mx-auto mt-10 p-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full">
                        <Image src={'https://s.smallpdf.com/static/c0b10aade0cdba9ece61.svg'} width={600} height={250} alt="svgart" />
                    </div>
                    <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                        <h3>Digital Signatures Made Easy</h3>
                        <p className="max-w-xl">Fill in forms, e-sign contracts, and close deals in a few simple steps. You can also request e-signatures and track your document every step of the way.</p>
                        <Link  href={'#'} className="btn bg-blue-600 text-white font-bold max-w-fit   ">Try Sign</Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 p-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                        <h3>Create the Perfect Document</h3>
                        <p className="max-w-xl">File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages. Smallpdf has it all.</p>
                        <Link  href={'#'} className="btn bg-blue-600 text-white font-bold max-w-fit   ">View Tools</Link>
                    </div>
                    <div className="w-full">
                        <Image src={'https://s.smallpdf.com/static/c90bf120da7ddfdbee1a.svg'} width={600} height={250} alt="svgart" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 p-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full">
                        <Image src={'https://s.smallpdf.com/static/235bb6affad39e0207d8.svg'} width={600} height={250} alt="svgart" />
                    </div>
                    <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                        <h3>Manage Documents—All in One Place</h3>
                        <p className="max-w-xl">File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages. Smallpdf has it all.</p>
                        <Link  href={'#'} className="btn bg-blue-600 text-white font-bold max-w-fit   ">View Tools</Link>
                    </div>
                    
                </div>
            </div>
        
        
        </>

    );
}