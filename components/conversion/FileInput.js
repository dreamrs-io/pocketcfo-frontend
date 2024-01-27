import { BiSolidFileExport } from "react-icons/bi"
import { FaRegFilePdf } from "react-icons/fa"



export default function FileInput({toolData}) {


    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <div className="container mx-auto">
            <h1 className=" text-5xl text-center my-10 max-w-2xl mx-auto line-clamp-2">{toolData.page.header.title}</h1>
            <div className={`${toolData.page.bg} rounded-md text-center p-20 max-w-6xl mx-auto relative `}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => { document.getElementById('fileInput').click() }}
            >
                <div className="flex justify-center mb-4">
                    <FaRegFilePdf className="text-center text-white" size={32} />

                </div>
                <input type="file" className="hidden" id="fileInput" />
                <button
                    className="bg-white p-2 px-6 rounded-md font-light "
                    onClick={() => { document.getElementById('fileInput').click() }}
                >
                    <div className="flex items-center gap-2">
                        <BiSolidFileExport size={24} /> <span>Choose File</span>
                    </div>
                </button>
                <label className="block font-semibold my-2 text-white">or drop File here</label>
                <div className="inset-2 border-2 border-white border-dashed rounded-md absolute pointer-events-none"></div>
            </div>
        </div>
    )


}