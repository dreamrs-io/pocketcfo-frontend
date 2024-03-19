import Head from "next/head";
import Tools from "@/components/Tools";
import Hero from "@/components/landing/Hero";
import KeyFeature from "@/components/landing/KeyFeature";
import Pricing from "@/components/landing/Pricing";
import Reason from "@/components/landing/Reason";
import Sections from "@/components/landing/Sections";
import UseCases from "@/components/landing/UseCases";
import MainLayout from "@/layouts/MainLayout";
import Solutions from "@/components/landing/Solutions";




export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>PocketCfos</title>
                <meta name="description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta property="og:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta name="twitter:title" content='PocketCfo&apos;s' />
                <meta property="og:title" content='PocketCfo&apos;s' />
                <meta name="twitter:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <link rel="canonical" href='https://www.pocketcfos.com' />
            </Head>
            <Hero />
            
            <Sections />
            <KeyFeature />
            <UseCases />
            <Solutions />
            <Reason />
            {/* <LTools/> */}
            {/* <Clients/> */}
            <Pricing />
            <div className="border-t">
                <div className="max-w-7xl mx-auto my-10 p-2 lg:p-6">
                    <Tools />
                </div>
            </div>

            {/* {user?.map((i)=>(<p>{i}</p>))} */}
        </MainLayout>
    )
}

