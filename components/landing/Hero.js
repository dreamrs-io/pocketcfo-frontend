import Image from "next/image";
import Link from "next/link";
import heroImg from '@/public/assets/hero.svg'

export default function Hero() {
    return (
        <div className=" px-12 container mx-auto ">
            <div className="flex-col lg:flex-row flex justify-between  items-center h-full">
                <div className="w-full flex-col flex gap-8">
                    <h1>Upload Docs,Files Business Tax Returns, Make Financial Statements</h1>
                    <p className="text-xl">With Pocket CFO streamline your tax returns and financial statement preparation effortlessly.</p>
                    <div className="md:flex-row flex-col flex gap-4">
                        <button className="btn bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-150">
                            Start Free Trial
                        </button>
                        <Link href={'#'} className="   text-blue-600 flex items-center justify-center border border-blue-600 btn font-bold hover:bg-blue-600 transition-all duration-150 hover:text-white">
                            Explore All  Tools
                        </Link>

                    </div>
                </div>
                <div className="w-full overflow-hidden flex justify-centers items-center  ">
                    <Image src={heroImg}   width={900} alt="svgart" />
                </div>
            </div>
        </div>
    );

}
