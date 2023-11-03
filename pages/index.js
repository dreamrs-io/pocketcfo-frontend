import Tools from "@/components/Tools";
import Clients from "@/components/landing/Clients";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Reason from "@/components/landing/Reason";
import Sections from "@/components/landing/Sections";
import LTools from "@/components/landing/Tools";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <MainLayout>
            <Hero/>
            <LTools/>
            <Sections/>
            <Clients/>
            <Pricing/>
            <Reason/>
            <div className="border-t">
                <div className="max-w-7xl mx-auto my-10 p-6">
                    <Tools/>
                </div>
            </div>
            
      
        </MainLayout>
    )
}