import Image from "next/image";
import aifinanceinv from "@/public/assets/solutions.svg";

export default function MediaBlockList() {

    const solutions =

        [
            {
                "title": "Seamless Integration",
                "description": "Pocket CFO offers direct integration with your accounting software's database and related schemas."
            },
            {
                "title": "AI-Powered Invoicing and Billing ",
                "description": "Leverage the power of artificial intelligence to convert invoicing and billing data into comprehensive financial statements."
            },
            {
                "title": "Comprehensive Financial Statements",
                "description": "Simplify tax obligations by converting payroll records into precise tax filings with unparalleled accuracy."
            },
            {
                "title": "Accuracy and Reliability",
                "description": "Maintain high levels of accuracy and reliability in financial statement generation."
            },
            {
                "title": "Enhanced Financial Insights",
                "description": "Empower decision-makers with the information needed for strategic financial planning."
            },
          
           
        ]





    return (
        <div className="max-w-7xl mx-auto mt-10 p-8">
            <div className="flex flex-col lg:flex-row items-center">

                <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                    <h2>Conclusion</h2>
                    <ul className="flex flex-col gap-4">
                        {
                            solutions.map((i) => (
                                <li key={i.id} className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span>●</span>
                                        <h3 className="text-2xl">{i.title}</h3>
                                    </div>
                                    <p>{i.description}</p>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="w-full">
                    <Image src={aifinanceinv} className="" width={600} alt="svgart" />
                </div>


            </div>
        </div>
    )
}

