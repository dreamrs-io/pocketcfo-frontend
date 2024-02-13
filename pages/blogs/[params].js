import wordpressApi from "@/api/WordpressApi";
import MainLayout from "@/layouts/MainLayout";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Service({ data }) {
    let blog = data[0]

    const {
        title,
        description,
        robots,
        og_locale,
        og_type,
        og_title,
        og_description,
        og_url,
        og_site_name,
        article_published_time,
        article_modified_time,
        og_image,
        author,
        twitter_card,
        twitter_misc,
    } = blog.yoast_head_json;


    return (

        <MainLayout>
            <Head >
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content={`${robots.index}, ${robots.follow}`} />
                <meta property="og:locale" content={og_locale} />
                <meta property="og:type" content={og_type} />
                <meta property="og:title" content={og_title} />
                <meta property="og:description" content={og_description} />
                <meta property="og:url" content={og_url} />
                <meta property="og:site_name" content={og_site_name} />
                <meta property="article:published_time" content={article_published_time} />
                <meta property="article:modified_time" content={article_modified_time} />
                {
                    og_image ?

                        og_image.map((img, index) => (
                            <React.Fragment key={index}>
                                <meta property="og:image" content={img.url} />
                                <meta property="og:image:width" content={img.width.toString()} />
                                <meta property="og:image:height" content={img.height.toString()} />
                                <meta property="og:image:type" content={img.type} />
                            </React.Fragment>
                        ))
                        :
                        <>
                            <meta property="og:image" content="https://www.pocketcfos.com/assets/ai-finance.svg" />
                            <meta property="og:image:width" content={1200} />
                            <meta property="og:image:height" content={600} />
                            <meta property="og:image:type" content="image/svg+xml" />
                        </>

                }
                <meta name="author" content={author} />
                <meta name="twitter:card" content={twitter_card} />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={'PocketCfo Team'} />
                <meta name="twitter:label2" content="Est. reading time" />
                <meta name="twitter:data2" content={twitter_misc['Est. reading time']} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "",
                        "publisher": {
                            "@type": "Organization",
                            "name": "PocketCfo's",
                            "url": "https://www.pocketcfos.com/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.pocketcfos.com/" + 'assets/icons/icon-72x72.png',
                                "width": 72,
                                "height": 72
                            }
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Terry Gu, CPA",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.gravatar.com/avatar/adcbda3ca3c6c5419b556ccd66d1212b?s=250&r=x&d=mp",
                                "width": 250,
                                "height": 250
                            },
                            "url": "https://www.pocketcfos.com/+'terry-gu-cpa",
                            "sameAs": []
                        },
                        "headline": title,
                        "url": "https://www.pocketcfos.com/blogs/" + blog.slug,
                        "datePublished": article_published_time,
                        "dateModified": article_modified_time,
                        "image": {
                            "@type": "ImageObject",
                            "url": blog.fimg_url ? blog.fimg_url : 'https://www.pocketcfos.com/assets/ai-finance.svg',
                            "width": 1200,
                            "height": 800
                        },
                        "keywords": 'Tax Returns',
                        "description": description,
                        "mainEntityOfPage": 'https://www.pocketcfos.com/blogs/' + blog.slug

                    })
                }}
                />


            </Head>

            <article className="p-4">
                <header>
                    <div className="max-w-4xl mx-auto mb-10 mt-20">
                        {/* <p className="text-secondary  text-xl font-semibold mb-1 ">{blog.primary_tag.name}</p> */}
                        <h1 className="">{blog.title.rendered}</h1>
                        <p className="mt-4 font-semibold line-clamp-2">{blog.excerpt.rendered}</p>
                        <div className="flex items-center mt-10 gap-2">
                            <div className="w-16 h-16  bg-gray-200 rounded-full border-primary border-2"></div>
                            <div className=" text-sm">
                                <p className=" ">Written by <span className="font-bold">PocketCfo Team </span> </p>
                                <p className=" ">Reviewed by <Link className="font-bold underline" href={'/terry-gu-cpa'}>Terry Gu, CPA</Link> </p>
                                <div className="flex gap-2">
                                    <time dateTime={article_published_time}>{moment(article_published_time).format('MMMM D, YYYY')}</time>
                                    <p className="font-bold">— {blog.yoast_head_json.twitter_misc["Est. reading time"]} read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="flex justify-center mb-10">
                        <Image src={blog.fimg_url ? blog.fimg_url : '/assets/ai-finance.svg'} width={1000} height={600} alt={blog.feature_image_alt} />
                    </figure>
                </header>

                <div className="max-w-4xl mx-auto mb-10 ">
                    <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} className="flex flex-col gap-4 blog-styles" />
                </div>
            </article>


        </MainLayout>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const data = await wordpressApi.getPostBySlug(params.params)
    if (data[0] == undefined) {
        return { notFound: true }
    }
    return { props: { data } }
}




