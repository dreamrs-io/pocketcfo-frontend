import Image from "next/image";
import aifinanceinv from "@/public/assets/solutions.svg";

export default function Solutions() {

    const solutions =

        [
            {
                "title": "Receipts to Tax Returns",
                "description": "Effortlessly convert receipts into meticulous tax filings, ensuring compliance and precise financial reporting."
            },
            {
                "title": "Invoicing & Billing Conversion",
                "description": "Streamline tax reporting by converting invoicing and billing data into accurate tax returns effortlessly."
            },
            {
                "title": "Payroll Records to Tax Returns",
                "description": "Simplify tax obligations by converting payroll records into precise tax filings with unparalleled accuracy."
            },
            {
                "title": "Cash Flow Statement Converter",
                "description": "Translate cash flow statements into accurate tax returns, enabling clear financial representation."
            },
            {
                "title": "Income Statement Conversion",
                "description": "Seamlessly convert income statements into precise tax filings for compliance and informed financial decisions."
            },
            {
                "title": "Balance Sheet Translation",
                "description": "Translate balance sheets into meticulous tax returns, offering clarity and compliance."
            },
            {
                "title": "Advanced AI Technology",
                "description": "Harness the power of AI trained especially on GAAP and US Laws for precise, error-free translations and reporting."
            }
        ]





    return (
        <div className="max-w-7xl mx-auto mt-10 p-8">
            <div className="flex flex-col lg:flex-row items-center">

                <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                    <h2>Our Solutions</h2>
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

