import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Blogs = ({ blogs }) => {
    return (
        <div>
            <h1 className="p-6 text-center">Our Blogs</h1>
            <div className="">
                <div className="max-w-7xl mx-auto mt-16 mb-16 grid grid-cols-4 gap-4">
                    {
                        blogs.map((i) => (

                            <Article key={i.id} blog={i} />

                        ))
                    }

                </div>
                {
                    blogs.length == 0 &&

                    <h3 className="text-center text-gray-500">No blogs at the moment</h3>
                }
            </div>
        </div>
    );
};


function Article({ blog }) {
    return (

        <article className="border shadow-xl hover:border-transparent transition-all duration-200 cursor-pointer group overflow-hidden rounded-md" onClick={() => { window.pathname = 'blogs/' + blog.slug }} >
            <div className="h-[200px] relative  overflow-hidden  ">
                <Image src={blog.fimg_url ? blog.fimg_url : '/assets/ai-finance.svg'} width={700} height={100} alt={'adad'} className=" bg-cover group-hover:brightness-75  group-hover:scale-110 transition-all duration-300 " />
            </div>
            <header className="p-4 bg-white mt-2  flex flex-col gap-2 h-full  ">
                <h2 className="font-semibold line-clamp-2 text-xl">{blog.title.rendered}</h2>
                <p className="text-sm line-clamp-2">{blog.excerpt.rendered}</p>
                <Link href={'blogs/' + blog.slug} className="font-semibold mt-2 text-black underline underline-offset-2 group-hover:text-primary duration-300">Read More</Link>
                <p className="text-right text-sm ">
                    <time dateTime={blog.yoast_head_json.article_published_time} >{moment(blog.yoast_head_json.article_published_time).format('MMMM D, YYYY')}</time>
                </p>
            </header>
        </article>

    );

}
export default Blogs;