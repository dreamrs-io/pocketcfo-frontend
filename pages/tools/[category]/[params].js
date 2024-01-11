import FileInput from "@/components/conversion/FileInput";
import ConversionLayout from "@/layouts/ConversionLayout";
import fetchToolData from "@/utils/helper";
import excel from '@/public/assets/excel.svg'
import Image from "next/image";
import Head from "next/head";
import { generalTools } from "@/data/content";
import MediaBlock from "@/components/common/MediaBlock";
import toolExplain from "@/public/assets/toolExplain.svg";
import overview from "@/public/assets/overview.svg";
import logo from "@/public/assets/introduction.svg";
import whyWe from "@/public/assets/whyWe.svg";
import fileconvert from "@/public/assets/fileconvert.svg";
import Benefits from "@/components/landing/Benefits";
import MediaBlockGrid from "@/components/common/MediaBlockGrid";


export default function ConversionTool({ toolData }) {

    return (
        <ConversionLayout>
            <Head>
                <title>{toolData.page.seo.title}</title>
                <meta name="description" content={toolData.page.seo.description} />
                <meta property="og:description" content={toolData.page.seo.description} />
                <meta name="twitter:title" content={toolData.page.seo.title} />
                <meta property="og:title" content={toolData.page.seo.title} />
                <meta name="twitter:description" content={toolData.page.seo.description} />
            </Head>
            <div className="mb-20">
                <FileInput toolData={toolData} />
            </div>
            <section>
                <h2 className="text-center max-w-2xl mx-auto line-clamp-1">{toolData.page.section1.h2}</h2>
                {

                    toolData.page.section1.content.map((i, z) => (

                        <MediaBlock key={z}
                            title={i.h3}
                            orientation={z % 2 == 0 && 'left'}
                            linkEnabled={false}
                            image={z % 2 == 0 ? toolExplain : overview}
                            paragraph={i.p} />

                    ))
                }
            </section>
            <section>
                <h2 className=" text-center max-w-2xl mx-auto line-clamp-1">{toolData.page.section2.h2}</h2>
                <MediaBlock
                    title={toolData.page.section2.content[0].h3}
                    orientation="left"
                    linkEnabled={false}
                    image={logo}
                    paragraph={toolData.page.section2.content[0].p}
                />
                <MediaBlock
                    title={toolData.page.section2.content[1].h3}
                    orientation="right"
                    linkEnabled={false}
                    image={fileconvert}
                    paragraph={toolData.page.section2.content[1].p} />
            </section>
            <section>
                <MediaBlockGrid
                    title={toolData.page.benefits.h2}
                    content={
                        toolData.page.benefits.content
                    }
                />
            </section>
            <section className="py-8">
                <MediaBlock
                    title={toolData.page.whyChooseUs.h2}
                    linkHref="/login"
                    linkText="Convert Now"
                    paragraph={toolData.page.whyChooseUs.paragraph}
                    image={whyWe}
                />
            </section>

        </ConversionLayout>
    );
}

export async function getStaticPaths() {
    const paths = [];
    generalTools.map((i) => {
        i.tools.map((j) => {
            paths.push({
                params: {
                    category: j.url,
                    params: j.page.url
                }
            })
        })
    })

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {


    const toolData = await fetchToolData(params);
    return {
        props: {
            toolData,
        },
    };
}
// export async function getServerSideProps(context) {
//     const { params } = context;

//     console.log(params);

//     const toolData = await fetchToolData(params);
//     return {
//         props: {
//             toolData,
//         },
//     };
// }