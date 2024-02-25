import { generalTools } from "@/data/content";
import MainLayout from "@/layouts/MainLayout";
import { fetchCategory } from "@/utils/helper";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";

export default function Tools({ toolData,canonicalUrl }) {

    return (
        <MainLayout>
            <Head>
                <title>PocketCfos | Tools</title>
                <meta name="description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta property="og:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta name="twitter:title" content='PocketCfo&apos;s' />
                <meta property="og:title" content='PocketCfo&apos;s' />
                <meta name="twitter:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="min-h-screen max-w-6xl mx-auto">
                <h1 className="text-5xl py-8 text-center">{toolData.title}</h1>
                <div className="mt-10 grid grid-cols-4 gap-4">
                    {
                        toolData.tools.map((i) => (
                            <div className="" key={i.id}>

                                <ToolItem href={i.url} title={i.name} color={i.color} bg={i.bg} childHref={i.page.url} />

                            </div>

                        ))


                    }


                </div>
            </div>
        </MainLayout>
    )
}




function ToolItem({ title = 'Compress', color, bg, icon = <CgMenuGridR />, href, childHref }) {

    const Icon = React.cloneElement(icon, { className: `${color} group-hover:text-white`, size: 42 });


    return (
        <Link href={'/tools/' + href + '/' + childHref} className={`gap-1 flex cursor-pointer items-center ${bg} justify-start p-8 rounded-sm  group border shadow-lg hover:scale-110 transition-all `}>
            {Icon}
            <h4 className="text-sm group-hover:text-white">{title}</h4>
        </Link>
    )

}

export async function getStaticPaths() {
    const paths = [];
    generalTools.map((i) => {
        paths.push({
            params: {
                category: i.category,
            }
        })
    })


    return {
        paths,
        fallback: false
    };
}




export async function getStaticProps({ params }) {
    console.log(params)
    let toolData = await fetchCategory(params) ;
    const canonicalUrl = 'https://www.pocketcfos.com/tools/' + params.category
    toolData = JSON.parse(JSON.stringify(toolData))
    console.log(toolData)
    return {
        props: {
            toolData, canonicalUrl
        },
    };
}