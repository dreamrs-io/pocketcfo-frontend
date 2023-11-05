import ConversionLayout from "@/layouts/ConversionLayout";
import { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

export default function Pricing(){
    const [tenure,setTenure] = useState('monthly')

    return (
        <ConversionLayout>
            <div className="mx-auto max-w-6xl my-12">
                <h2 className="text-center mb-4">Pocket CFO&apos;s That Fits Your Budget </h2>
                <div className="flex justify-center">
                    <button className={`px-4 py-2 border rounded-sm text-sm font-semibold ${tenure=='monthly' ? 'bg-blue-200':''}`} onClick={()=>{setTenure('monthly')}}>Monthly</button>
                    <button className={`px-4 py-2 border rounded-sm text-sm font-semibold ${tenure=='yearly' ? 'bg-blue-200':''}`} onClick={()=>{setTenure('yearly')}}>Yearly</button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-200 my-10 ">
                    <div className="p-4 bg-gray-100 rounded-md w-full h-[500px] ">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Free Trial</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">15 days <span className="text-sm text-gray-400">/Free Trial</span></p>
                            <div className="flex justify-center my-8">
                                <button className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>2-week free trial</li>
                            </ul>

                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md w-full">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Startup</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">{tenure=='yearly'?48*12:48} $ <span className="text-sm text-gray-400">/{tenure}</span></p>
                            <div className="flex justify-center my-8">
                                <button className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>limited messages per day/week</li>
                            </ul>

                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md w-full">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Growth</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">{tenure=='yearly'?88*12:88} $ <span className="text-sm text-gray-400">/{tenure}</span></p>
                            <div className="flex justify-center my-8">
                                <button className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>unlimited messages</li>
                            </ul>

                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md w-full">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Team</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">{tenure=='yearly'?188*12:188} $ <span className="text-sm text-gray-400">/{tenure}</span></p>
                            <div className="flex justify-center my-8">
                                <button className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>Multi users</li>
                            </ul>

                        </div>
                    </div>
                

                </div>

            </div>
        </ConversionLayout>
    );
}