import Link from "next/link";
import aifinance from "@/public/assets/ai-finance.svg";
import Image from "next/image";

export default function MediaBlock({ direction = '', title = '', image = '', paragraph = '', link = true }) {
    return (
        <div className="max-w-7xl  mx-auto  px-8">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full">
                    <Image src={aifinance} width={600} alt="svgart" />
                </div>
                <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                    <h2>Effortless Tax Return and Financial Statement</h2>
                    <p className="">Welcome to Pocket CFO, your AI Powered go-to for file online tax return solutions. Our software is the easiest online tax filing tool, ensuring the best online tax return service available.</p>
                    <Link href={'#'} className="btn bg-blue-600 text-white font-bold max-w-fit   ">Try Now</Link>
                </div>
            </div>
        </div>


    );
}