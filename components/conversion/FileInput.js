import apiService from "@/api/ExternalApi";
import { useEffect, useState } from "react";
import { BiSolidFileExport } from "react-icons/bi"
import { FaRegFilePdf } from "react-icons/fa"



export default function FileInput({ toolData, path }) {

    const [file, setFile] = useState();
    const [uploadProgress, setUploadProgress] = useState(30);

    const handleDrop = (e) => {
        e.preventDefault();
        setUploadProgress(0);

        const files = e.dataTransfer.files[0];
        setFile(files);
    };

    const handleChange = async (e) => {
        setUploadProgress(0);
        setFile(e.target.files[0]);
        const upload = await apiService.convertFile(e.target.files[0], (progress) => {
            setUploadProgress(progress);
        });
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        setFile();
        setUploadProgress(0);
    }, [toolData]);

    return (
        <div className="container mx-auto">
            <h1 className=" text-5xl text-center my-10 max-w-2xl mx-auto line-clamp-2">{toolData.page.header.title}</h1>
            <div className={`${toolData.page.bg} rounded-md text-center p-20 max-w-6xl mx-auto relative `}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            // onClick={() => { document.getElementById('fileInput').click() }}
            >

                <div className="flex justify-center mb-4">
                    <FaRegFilePdf className="text-center text-white" size={32} />
                </div>
                <div className="mb-2 text-white">
                    {file && file.name}
                </div>
                <input onChange={handleChange} type="file" className="hidden" id="fileInput" />
                <button
                    className="bg-white p-2 px-6 rounded-md font-light "
                    onClick={() => { document.getElementById('fileInput').click() }}
                >
                    <div className="flex items-center gap-2">
                        <span>Choose File</span>
                    </div>
                </button>
                <label className="block font-semibold my-2 text-white">or drop File here</label>
                <div className="inset-2 border-2 border-white border-dashed rounded-md absolute pointer-events-none"></div>
            </div>
            {
                uploadProgress == 0 ||
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-6xl mx-auto mt-2">
                    <div className={`${toolData.page.bg} text-xs font-bold text-blue-100 text-center p-1 leading-none rounded-full `} style={{ width: uploadProgress + '%' }}>
                        {uploadProgress}
                    </div>
                </div>
            }
        </div>
    )


}