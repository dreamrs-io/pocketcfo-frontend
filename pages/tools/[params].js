import FileInput from "@/components/conversion/FileInput";
import ConversionLayout from "@/layouts/ConversionLayout";
import fetchToolData from "@/utils/helper";
import { AiOutlineLock, AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaThumbsUp } from "react-icons/lia";
import excel from '@/public/assets/excel.svg'


import { HiOutlineLightBulb } from "react-icons/hi";
import Image from "next/image";



export default function ConversionTool({ toolData }) {

   

    return (
        <ConversionLayout>
            <FileInput toolData={toolData} />
            <div className="max-w-6xl mx-auto lg:grid-cols-3 grid sm:grid-cols-2 gap-y-8 my-24  ">
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <HiOutlineLightBulb size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <AiOutlineSafetyCertificate size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <LiaThumbsUp size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <AiOutlineLock size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <HiOutlineLightBulb size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>
                <div className="flex-col gap-y-2 justify-center flex items-center text-center px-10">
                    <HiOutlineLightBulb size={42}/>
                    <p className="font-bold text-sm">Simple Online Tool To Combine PDFs</p>
                    <p className="text-xs text-gray-600">Our PDF merger allows you to quickly combine multiple PDF files into one single PDF document, in just a few clicks. No signup is needed to use this online tool.</p>
                </div>

            </div>

            <div className="border-t  py-20 ">
                <div className="max-w-3xl mx-auto">
                    <div className="flex  justify-between">
                        <div>
                            <Image src={excel} alt="excel" height={250} width={300}/>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">How to convert PPT to PDF online:</h4>
                            <div className="pl-4">
                                <ol className=" list-decimal gap-2 flex-col flex mt-2 ">
                                    <li>Drag and drop or click Upload file to import your PPT.</li>
                                    <li> Wait for Smallpdf to convert the file to PDF format.</li>
                                    <li> Wait for Smallpdf to convert the file to PDF format.</li>
                                    <li> Wait for Smallpdf to convert the file to PDF format.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </ConversionLayout>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;

    const toolData = await fetchToolData(params.params);
    return {
        props: {
            toolData,
        },
    };
}