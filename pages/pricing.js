import nextApi from "@/apis/InternalApi";
import ConversionLayout from "@/layouts/ConversionLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Pricing() {
    const [tenure, setTenure] = useState('monthly');
    const { data: session, } = useSession();
    const router = useRouter();

    async function checkout(priceId) {

        if(!session){
            router.push('login');
            return;
        }


        const checkout_session = await nextApi.getCheckoutSession(priceId);

        if (checkout_session.subscription?.url){
            window.location.href = checkout_session.subscription.url;
        }


    }




    return (
        <ConversionLayout>
            <Head>
                <title>PocketCFO | Pricing</title>
                <meta name="description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta property="og:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <meta name="twitter:title" content='pricing' />
                <meta property="og:title" content='pricing' />
                <meta name="twitter:description" content='Our team of seasoned financial experts is dedicated to providing you with the guidance and support you need to navigate the complexities of the financial world' />
                <link rel="canonical" href='https://www.pocketcfos.com/pricing' />

            </Head>
            <div className="mx-auto max-w-6xl my-12">
                <h2 className="text-center mb-4">Pocket CFO&apos;s That Fits Your Budget </h2>
                <div className="flex justify-center">
                    {/* <button className={`px-4 py-2 border rounded-sm text-sm font-semibold ${tenure == 'monthly' ? 'bg-blue-200' : ''}`} onClick={() => { setTenure('monthly') }}>Monthly</button> */}
                    {/* <button className={`px-4 py-2 border rounded-sm text-sm font-semibold ${tenure == 'yearly' ? 'bg-blue-200' : ''}`} onClick={() => { setTenure('yearly') }}>Yearly (20% off)</button> */}
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 transition-all duration-200 my-10 max-w-4xl mx-auto">
                    <div className="p-4 bg-gray-100 rounded-md w-full ">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Startup</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-4xl font-light">${tenure == 'yearly' ? Math.floor(48 * 12 - ((48 * 12) * 0.20)) : 48}<span className="text-sm text-gray-400">/{tenure}</span></p>
                            <div className="flex justify-center my-8">
                                <button onClick={() => { checkout(process.env.NEXT_PUBLIC_STRIPE_PLAN_1) }} className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm font-bold">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>Essential Financial Management: Access core accounting tools to manage your finances effectively.</li>
                                <li>Daily/Weekly Message Limit: Interact with the GPT AI Assistant for financial updates and report generation with a set number of messages per day/week, ensuring quality over quantity</li>
                                <li>Automated Expense Tracking: Simplify expense recording and categorization with automation.</li>
                                <li>Basic Reporting: Generate standard financial reports such as profit and loss statements and balance sheets.</li>
                                <li>Tax Compliance Tools: Stay compliant with tax regulations with tools designed to streamline the tax preparation process..</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md w-full">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Growth</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <p className="text-4xl font-light">${tenure == 'yearly' ? Math.floor(88 * 12 - ((88 * 12) * 0.20)) : 88}<span className="text-sm text-gray-400">/{tenure}</span></p>
                            <div className="flex justify-center my-8">
                                <button onClick={() => { checkout(process.env.NEXT_PUBLIC_STRIPE_PLAN_2) }} className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm font-bold">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>Cloud-Based Document Storage: Keep your financial documents organized and accessible in the cloud.</li>
                                <li>Comprehensive Accounting Suite: Leverage a full suite of accounting features for in-depth financial management.</li>
                                <li>Cash Flow Insights: Get detailed insights into your cash flow to better manage and predict financial needs.</li>
                                <li>Unlimited AI Messages: Enjoy unrestricted interactions with the GPT AI Assistant for on-demand financial record updates and bespoke report generation.</li>
                                <li>Priority AI Learning: Benefit from a system that learns from your business patterns for more personalized assistance.</li>
                            </ul>

                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md w-full">
                        <div className="flex items-center justify-between border-b">
                            <p className="font-bold text-xl">Team</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between items-center">
                                <p className="text-4xl font-light">${tenure == 'yearly' ? Math.floor(188 * 12 - ((188 * 12) * 0.20)) : 188}<span className="text-sm text-gray-400">/{tenure}</span></p>
                            </div>
                            <div className="flex justify-center my-8">
                                <button onClick={() => { checkout(process.env.NEXT_PUBLIC_STRIPE_PLAN_3) }} className="btn bg-blue-700 text-white font-semibold text-sm max-w-fit focus:ring-2 ring-blue-400">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm font-bold">Features</p>
                            <ul className="list-disc text-sm ml-4 mt-2">
                                <li>Multi-User Collaboration: Allow your team to work together with multi-user access to the accounting platform.</li>
                                <li>Advanced Permissions: Control what each team member can see and do with advanced user permissions.</li>
                                <li>Team-Oriented AI Interaction: Enable your team to collectively interact with the GPT AI Assistant for collaborative financial management.</li>
                                <li>Custom Report Builder: Create custom reports with a drag-and-drop builder to meet the specific needs of your business.</li>
                                <li>Dedicated Support: Receive dedicated support from financial experts for both the platform and tax-related inquiries.</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </ConversionLayout>
    );
}
