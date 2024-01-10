import Image from "next/image";
import usecases from "@/public/assets/usecases.svg";

export default function UseCases() {

    const useCases =

        [
            {
                "id": "1",
                "title": "Professionals",
                "paragraph": "Our tailor-made software ensures accuracy and efficiency in handling tax returns; it's the ideal tax preparation software for professionals to meet their specific needs."
            },
            {
                "id": "2",
                "title": "Tax Preparers",
                "paragraph": "Simplify tax preparations with easy-to-use functionalities; the go-to choice is our tax software for tax preparers ensuring streamlined processes."
            },
            {
                "id": "3",
                "title": "Accountants and CPAs",
                "paragraph": "Streamline tax preparation processes with essential tools, leveraging our tax preparation software for accountants to ensure efficiency."
            },
            {
                "id": "4",
                "title": "Individuals and Self-Employed",
                "paragraph": "Simplify tax filings and enhance efficiency using our tax preparation software for individuals, catering to personal tax needs."
            },
            {
                "id": "5",
                "title": "Mac Users and Trusts",
                "paragraph": "Tailored solutions for specific user preferences, including Mac users and trusts, with our specialized tax software for Mac and tax software for trusts."
            }
        ]





    return (
        <div className="max-w-7xl mx-auto mt-10 p-8">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full">
                    <Image src={usecases} className="" width={600} alt="svgart" />
                </div>
                <div className="w-full flex-col flex gap-6 p-6 lg:p-12">
                    <h2>Use Cases for Pocket CFO</h2>
                    <ul className="flex flex-col gap-4">
                        {
                            useCases.map((i) => (
                                <li key={i.id} className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span>●</span>
                                        <h3 className="text-2xl">{i.title}</h3>
                                    </div>
                                    <p>{i.paragraph}</p>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                
            </div>
        </div>
    )
}

