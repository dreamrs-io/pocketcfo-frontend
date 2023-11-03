import Link from "next/link";
import {FiUser} from 'react-icons/fi'
import {AiOutlineTeam} from 'react-icons/ai'

export default function Pricing(){

    return (
        <div className="max-w-6xl mx-auto bg-blue-50 rounded-sm my-20 px-4 py-10">
            <div className="flex lg:flex-row flex-col">
                <div className="flex flex-col gap-4 p-8">
                    <h2>Plans & Pricing</h2>
                    <p>Get unlimited access to Smallpdf tools for you and your team with pricing that’s right for you.</p>
                    <Link className="btn bg-blue-600 max-w-fit font-bold text-white" href={'#'}>Compare Plans</Link>
                </div>
                <div className="w-full flex gap-4 items-center">
                    <div className="p-4 bg-white w-full">
                        <div className="flex items-center justify-between border-b">
                            <p>Pro</p>
                            <p className="flex items-center"><FiUser/><span>1</span></p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">9$ <span className="text-sm text-gray-400">/month</span></p>
                            <p className="text-sm text-gray-400">per user, billed annually.</p>

                        </div>
                    </div>
                    <div className="p-4 bg-white w-full">
                        <div className="flex items-center justify-between border-b">
                            <p>Team</p>
                            <p className="flex items-center"><AiOutlineTeam/><span>2-14</span></p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-3xl font-light">7$ <span className="text-sm text-gray-400">/month</span></p>
                            <p className="text-sm text-gray-400">per user, billed annually.</p>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}