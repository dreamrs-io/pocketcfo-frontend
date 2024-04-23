import UserLayout from "@/layouts/UserLayout";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Fragment, useEffect, useState } from "react";
import nextApi from "@/apis/InternalApi";
import { GET_SUBSCRIPTION_STATUS, } from "@/constants";
import moment from "moment";
import { toast } from "react-toastify";
import Modal from "@/components/common/Modal";
import { useFormik } from "formik";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Tooltip } from "react-tippy";
import { getServerAuthSession } from "./api/auth/[...nextauth]";


export default function Dashboard() {


    const [instances, setInstances] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getInstances() {

        await new Promise(resolve => setTimeout(resolve, 2000));
        const r = await nextApi.getInstances();
        setInstances(r.instances);
        setLoading(false);

    }

    useEffect(() => {
        getInstances();
    }, [])
    return (
        <UserLayout>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-extrabold">
                            Dashboard
                        </h1>
                        <p className="mt-3">Your Dashboard</p>
                    </div>
                    <div>
                        <h3>Mohid Meer</h3>
                    </div>
                </div>

                <div>
                    <Tab.Group>
                        <Tab.List className={`max-w-3xl mx-auto flex gap-4 items-center justify-center`}>
                            <Tab className={({ selected }) => `border-b-4 pb-1 outline-none font-bold text-gray-400 ${selected && '!text-blue-600 border-blue-600'}`}>Instances</Tab>
                            {/* <Tab className={({ selected }) => `border-b-4 pb-1 outline-none font-bold text-gray-400 ${selected && ' !text-blue-600 border-blue-600'}`}>Companies</Tab> */}

                        </Tab.List>
                        <Tab.Panels className={({ selected }) => `mt-10 outline-none`} >
                            <Tab.Panel>
                                <Instances instances={instances} loading={loading} />
                            </Tab.Panel>
                            <Tab.Panel>
                                <Companies />
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>

        </UserLayout>
    );
}

function Companies() {
    return (
        <div className=" max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-2 text-gray-800">
                <div className="p-4 border rounded-xl">
                    <p className="font-bold ">Comapny Name</p>
                    <p className="font-bold text-xs text-gray-500">Created 1 week ago</p>
                    <div className="flex justify-between items-center mt-4 ">
                        <button className=" text-xs text-green-500 flex items-center justify-center border py-2 px-4 rounded-md border-green-500 font-bold hover:bg-green-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>
                        <MdDelete size={24} className="text-red-600 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Instances({ instances, loading }) {


    return (
        <div className=" max-w-4xl mx-auto p-4  ">
            <div className="grid grid-cols-2 text-gray-800 gap-4 ">
                {

                    instances.map((i, z) => (

                        <SingleInstance i={i} key={z} />


                    ))
                }
                {
                    loading && <Loader />

                }
                <div className="p-4  rounded-xl   cursor-pointer hover:shadow-xl ">
                    <div className="flex justify-center flex-col items-center h-24 border-dashed border-2 rounded-xl ">

                        <div className="text-gray-400 text-center flex flex-col items-center">
                            <p>Add an Instance</p>
                            <MdAdd size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function SingleInstance({ i }) {

    let [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(true);

    }

    async function restartSubscription(){

        // if(!session){
        //     router.push('login');
        //     return;
        // }

        const checkout_session = await nextApi.restartSubscription(i._id);

        if (checkout_session.subscription?.url){
            window.location.href = checkout_session.subscription.url;
        }


    }

    async function accessAdmin() {
        if (!i.instance_aws_id){
            toast.warn('Please wait while we setup your instance we will notify you at your email',{autoClose: 3000 })
            return;
        }
        const redirect_url = await nextApi.redirectInstance({ id: i._id })

        if (redirect_url.url) {

            window.open(redirect_url.url, '_blank');

        }

    }

    useEffect(() => {
        if (!(i.subscription_status == 'active')) {
            toast.error('Your subscription is ' + i.subscription_status, {
                position: toast.POSITION.TOP_RIGHT
            })
            return;
        }

    })

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Details'}>
                <div className="mt-2 w-96">
                    <InstanceForm instance={i} setIsOpen={setIsOpen} />
                </div>
            </Modal>
            <div className="p-4 border rounded-xl cursor-pointer shadow-md transition-all  hover:shadow-2xl" onClick={() => { handleClick() }}>
                <div className="flex justify-between items-center">
                    <div className="">
                        <p className="font-bold ">{i.name}</p>
                        <p className="font-bold text-xs text-gray-500">{'Created ' + moment(i.createdAt).fromNow()}</p>
                    </div>
                    <div className="cursor-pointer flex gap-1 items-center ">
                        <GoDotFill className="" style={{ color: GET_SUBSCRIPTION_STATUS(i.subscription_status).color }} />
                        <p className="text-xs font-bold text-gray-500">{i.subscription_status.toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 ">
                    <Tooltip
                        // followCursor
                        html={<p className="text-xs">{GET_SUBSCRIPTION_STATUS(i.subscription_status).message}</p>}
                        position="bottom"
                        trigger="mouseenter"
                        arrow={true}

                    >
                        <button disabled={i.status == 1} onClick={(e) => { e.stopPropagation(); accessAdmin() }} className="disabled:cursor-not-allowed  text-xs text-blue-500 flex items-center justify-center border py-2 px-4 rounded-md border-blue-500 font-bold hover:bg-blue-500 transition-all duration-150 hover:text-white">
                            Access Admin
                        </button>


                    </Tooltip>
                    { i.subscription_status != 'active' &&
                        <button disabled={i.status == 1} onClick={(e) => { e.stopPropagation(); restartSubscription() }} className="disabled:cursor-not-allowed  text-xs text-yellow-500 flex items-center justify-center border py-2 px-4 rounded-md border-yellow-500 font-bold hover:bg-yellow-500 transition-all duration-150 hover:text-white">
                            Restart Subscription
                        </button>
                    }
                </div>
            </div>
        </>
    );

}

function Loader() {
    return (
        <div className="p-4 border rounded-xl cursor-pointer shadow-md transition-all  hover:shadow-2xl animate-pulse">
            <div className="flex justify-between items-center">
                <div className=" flex flex-col gap-1">
                    <p className="font-bold bg-gray-200 p-2 w-40 "></p>
                    <p className="bg-gray-200 p-2 w-28"></p>
                </div>
                <div className="cursor-pointer flex gap-1 items-center ">
                    <GoDotFill className="text-gray-200" />
                    <p className="text-xs font-bold bg-gray-200 p-1 w-24"></p>

                </div>
            </div>
            <div className="flex justify-between items-center mt-4 ">
                <button className=" text-xs bg-gray-200 p-4 py-2 px-4 rounded-md text-gray-200">
                    Access Admin
                </button>
                <MdDelete size={24} className="text-gray-200 cursor-pointer" />
            </div>
        </div>
    );
}

function InstanceForm({ instance, setIsOpen }) {


    const nameFormik = useFormik({
        initialValues: {
            id: instance._id,
            name: instance.name,
        },
        validate: name_validate,
        onSubmit: onNameSubmit
    })

    async function onNameSubmit(values) {
        const r = await nextApi.updateInstance(values);
        setIsOpen(false);
    }



    function name_validate(values) {

        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        }
        return errors;

    }

    return (

        <div>
            <form onSubmit={nameFormik.handleSubmit} className="flex justify-between items-center gap-2 ">
                <div className="my-4 w-full">
                    <label className="input-wrapper !text-xs">Name</label>
                    <input className={`input-box-sm  ${nameFormik.errors.name && nameFormik.touched.name ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}
                        type='text' id='name' placeholder="AZ Traders" {...nameFormik.getFieldProps('name')} />
                    {nameFormik.errors.name && nameFormik.touched.name ? <div className='mt-2 font-bold text-sm text-rose-500'>{nameFormik.errors.name}</div> : <></>}
                </div>

                <button
                    type="submit"
                    disabled={!nameFormik.dirty}
                    className=" disabled:cursor-not-allowed h-fit mt-5 px-4 py-2 inline-block rounded-md border border-transparent bg-blue-100 2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Update
                </button>


            </form>
            
        </div>



    )
}



export async function getServerSideProps(context) {

    const session = await getServerAuthSession(context.req, context.res);


    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: {


        }
    }

}
