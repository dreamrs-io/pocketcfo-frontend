import Image from "next/image";

export default function Clients() {
    return (
        <div className="max-w-3xl mx-auto my-10">
            <h2 className="text-center">You&apos;re in Good Company </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8 items-center cursor-pointer justify-center">
                <Image className="hover:scale-125 transition-all duration-200" src={'https://s.smallpdf.com/static/df48a20e0130aca2a6a5.svg'} width={300} height={100} alt="facebook" />
                <Image className="hover:scale-125 transition-all duration-200" src={'https://s.smallpdf.com/static/7d854a95ea707d7cb20a.svg'} width={300} height={100} alt="UniversityColoumbia" />
                <Image className="hover:scale-125 transition-all duration-200" src={'https://s.smallpdf.com/static/7bca53d4f92c1981065b.svg'} width={300} height={100} alt="Uniliver" />
                <Image className="hover:scale-125 transition-all duration-200" src={'https://s.smallpdf.com/static/ad1aae01f91bdd467a6c.svg'} width={300} height={100} alt="Hilton" />
            </div>
        </div>
    )
}