import apiService from "@/api/ExternalApi";
import { useEffect, useState } from "react";
import { BiSolidFileExport } from "react-icons/bi"
import { FaRegFilePdf } from "react-icons/fa"

export async function getServerSideProps(context) {
    return {
        props: {
            'data': 'test'
        }, // 传递给页面组件的属性
    }
}

export default function FileInput({toolData}) {
    let files = [];
    let hasFile = false;
    const [filesState, setFiles] = useState(files);
    const [hasFileState, setHasFile] = useState(hasFile);
    const [results, setResults] = useState(null);
        
    const [uploadProgress, setUploadProgress] = useState(30);

    const handleDrop = (e) => {
        e.preventDefault();
        setUploadProgress(0);
        updateFiles(e.dataTransfer.files);

        // const files = e.dataTransfer.files[0];
        // setFile(files);
    };

    /** using onFileChange handle file upload */
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

    const onFileChange = (e) => {
        updateFiles(e.target.files);
    };

    const updateFiles = (newFiles) => {
        setFiles(files = newFiles);
        setHasFile(hasFile = newFiles.length > 0);
        console.log('hasFile', hasFile, files);
        uploadFile();
    }

    /** TODO: add load progress */
    const uploadFile = async () => {
        if (files.length === 0) {
            console.log("No file selected!")
            return;
        }
        setUploadProgress(0);
        setResults(null);
        console.log('uploadFile....', files[0])
        const formData = new FormData();
        formData.append("file", files[0]);
        // const apiState = "http://127.0.0.1:8000/upload"
        const apiState = "https://s.pocketcfos.com/upload"
        try {
            const res = await fetch(apiState, {
                method: "POST",
                body: formData,
            })
            if (res.ok) {
                const result = await res.json();
                const { data: { data } } = result;
                setResults(result);
                console.log("File uploaded successfully", result);
            } else {
                console.log("Upload failed")
            }
        } catch (error) {
            console.error('Upload Error:', error);
        }
        
    }
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
                {/* <input onChange={handleChange} type="file" className="hidden" id="fileInput" /> */}
                <input type="file" className="hidden" id="fileInput" onChange={onFileChange} />
                <button
                    className="bg-white p-2 px-6 rounded-md font-light "
                    onClick={() => { document.getElementById('fileInput').click() }}
                >
                    <div className="flex items-center gap-2">
                        <span>Choose File</span>
                    </div>
                </button>
                <label className="block font-semibold my-2 text-white">or drop File here</label>
                <label className="block font-semibold my-2 text-white">{
                    (hasFileState) && filesState[0].name
                }</label>
                <div className="inset-2 border-2 border-white border-dashed rounded-md absolute pointer-events-none"></div>
                <div className="text-white mt-4">
                    {
                        results && results.status && 
                        <><p className="block font-semibold my-2 text-white">
                            File Type: {results.data.file_type}
                        </p><ul>
                            {results.data.results.map((item, index) => <li key={index}>{item}</li>)}
                        </ul></>
                    }
                    {
                        (results) && !results.status && 
                        <p>{ results.message }</p>
                    }
                </div>
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