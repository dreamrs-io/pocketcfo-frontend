import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className=" p-12 container mx-auto ">
            <div className="flex-col lg:flex-row flex justify-between  items-center h-full">
                <div className="w-full flex-col flex gap-8">
                    <h1>We make PDF Easy</h1>
                    <p className="text-xl">All the tools you’ll need to be more productive and work <br/>smarter with documents.</p>
                    <div className="md:flex-row flex-col flex gap-4">
                        <button className="btn bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-150">
                            Start Free Trial
                        </button>
                        <Link href={'#'} className="text-blue-600 flex items-center justify-center border border-blue-600 btn font-bold hover:bg-blue-600 transition-all duration-150 hover:text-white">
                            Explore All PDF Tools
                        </Link>

                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <Image src={'https://s.smallpdf.com/static/8c3b329d85ca37b6aad3.svg'} width={600} height={250} alt="svgart" />
                </div>
            </div>
        </div>
    );

}
