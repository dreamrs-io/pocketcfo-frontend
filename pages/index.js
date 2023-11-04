import Tools from "@/components/Tools";
import Clients from "@/components/landing/Clients";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Reason from "@/components/landing/Reason";
import Sections from "@/components/landing/Sections";
import LTools from "@/components/landing/Tools";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>PocketCfo&apos;s</title>
                <meta name="description" content= 'Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta property="og:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta name="twitter:title" content='PocketCfo&apos;s' />
                <meta property="og:title" content='PocketCfo&apos;s' />
                <meta name="twitter:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                {/* <meta property="og:image" content=''/>
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" /> */}
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
            <Hero/>
            <LTools/>
            <Sections/>
            <Clients/>
            <Pricing/>
            <Reason/>
            <div className="border-t">
                <div className="max-w-7xl mx-auto my-10 p-2 lg:p-6">
                    <Tools/>
                </div>
            </div>
            
      
        </MainLayout>
    )
}