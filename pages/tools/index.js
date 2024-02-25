import { generalTools } from "@/data/content";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";

export default function Tools() {
    return (

        <MainLayout>
            <Head>
                <title>PocketCfos | Tools</title>
                <meta name="description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta property="og:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta name="twitter:title" content='PocketCfo&apos;s' />
                <meta property="og:title" content='PocketCfo&apos;s' />
                <meta name="twitter:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <link rel="canonical" href='https://www.pocketcfos.com/tools' />
            </Head>
            <div className="min-h-screen max-w-6xl mx-auto">
                <h1 className="text-5xl py-8 text-center">Tools</h1>
                <div className="mt-10">
                    {
                        generalTools.map((i) => (
                            <>
                                <h3 key={i.id} className="text-center my-10 text-gray-500">{i.title}</h3>
                                <div className="grid grid-cols-4 gap-4" key={i.id}>

                                    {
                                        i.tools.map((t) => (
                                            <div key={t.id} className="flex-col gap-4">
                                                <ToolItem href={t.url} title={t.name} color={t.color} bg={t.bg} childHref={t.page.url} icon={t.icon} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
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