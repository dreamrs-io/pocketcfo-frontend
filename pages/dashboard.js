import UserLayout from "@/layouts/UserLayout";
import { Tab } from "@headlessui/react";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";




export default function Dashboard() {
    return (
        <UserLayout>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-extrabold">
                            Dashboard
                        </h1>
                        <p className="mt-3">Your Dashboard</p>
                    </div>
                    <div>
                        <h3>Mohid Meer</h3>
                    </div>
                </div>

                <div>
                    <Tab.Group>
                        <Tab.List className={`max-w-3xl mx-auto flex gap-4 items-center justify-center`}>
                            <Tab className={({ selected }) => `border-b-4 pb-1 outline-none font-bold text-gray-400 ${selected && '!text-blue-600 border-blue-600'}`}>Instances</Tab>
                            <Tab className={({ selected }) => `border-b-4 pb-1 outline-none font-bold text-gray-400 ${selected && ' !text-blue-600 border-blue-600'}`}>Companies</Tab>

                        </Tab.List>
                        <Tab.Panels className={({selected})=>`mt-10 outline-none`} >
                            <Tab.Panel>
                                <Instances />
                            </Tab.Panel>
                            <Tab.Panel>
                                <Companies />
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>

        </UserLayout>
    );
}

function Companies() {
    return (
        <div className=" max-w-4xl mx-auto p-4">

            <div className="grid grid-cols-2 text-gray-800">
                <div className="p-4 border rounded-xl">
                    <p className="font-bold ">Comapny Name</p>
                    <p className="font-bold text-xs text-gray-500">Created 1 week ago</p>
                    <div className="flex justify-between items-center mt-4 ">
                        <button className=" text-xs text-green-500 flex items-center justify-center border py-2 px-4 rounded-md border-green-500 font-bold hover:bg-green-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>

                </div>
            </div>
        </div>

    );
}
function Instances() {
    return (
        <div className=" max-w-4xl mx-auto p-4  ">
            <div className="grid grid-cols-2 text-gray-800 gap-4 ">
                <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font-bold ">Ab Traders</p>
                            <p className="font-bold text-xs text-gray-500">Created 1 week ago</p>
                        </div>
                        <div className="cursor-pointer flex gap-1 items-center ">
                            <GoDotFill className="text-green-500" />
                            <p className="text-xs font-bold text-gray-500">Running</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 ">
                        <button className=" text-xs text-blue-500 flex items-center justify-center border py-2 px-4 rounded-md border-blue-500 font-bold hover:bg-blue-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>

                </div>
                <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font-bold ">Instance Name</p>
                            <p className="font-bold text-xs text-gray-500">1 minute ago</p>
                        </div>
                        <div className="cursor-pointer flex gap-1 items-center ">
                            <GoDotFill className="text-yellow-500" />
                            <p className="text-xs font-bold text-gray-500">Initializing</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 ">
                        <button disabled className=" disabled:cursor-not-allowed  text-xs text-blue-500 flex items-center justify-center border py-2 px-4 rounded-md border-blue-500 font-bold hover:bg-blue-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>

                </div>
                <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font-bold ">Instance Name</p>
                            <p className="font-bold text-xs text-gray-500">Created 2 week ago</p>
                        </div>
                        <div className="cursor-pointer flex gap-1 items-center ">
                            <GoDotFill className="text-yellow-500" />
                            <p className="text-xs font-bold text-gray-500">Payment Required</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 ">
                        <button disabled className=" disabled:cursor-not-allowed text-xs text-blue-500 flex items-center justify-center border py-2 px-4 rounded-md border-blue-500 font-bold hover:bg-blue-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>

                </div>
                <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className="font-bold ">Instance Name</p>
                            <p className="font-bold text-xs text-gray-500">Created 1 week ago</p>
                        </div>
                        <div className="cursor-pointer flex gap-1 items-center ">
                            <GoDotFill className="text-red-500" />
                            <p className="text-xs font-bold text-gray-500">Terminated</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 ">
                        <button disabled className=" disabled:cursor-not-allowed  text-xs text-blue-500 flex items-center justify-center border py-2 px-4 rounded-md border-blue-500 font-bold hover:bg-blue-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>

                </div>

            </div>
        </div>

    );
}
