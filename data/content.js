import { RiFileWord2Fill } from "react-icons/ri";
import { BiMerge, BiPurchaseTag } from "react-icons/bi";
import { PiFileJpgBold } from "react-icons/pi";
import { MdBrokenImage, MdPictureAsPdf } from "react-icons/md";


import { CgMenuGridR } from "react-icons/cg";
import { FaFileInvoiceDollar, FaMoneyBillAlt } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { MdAccountBalance } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const generalTools = [

    {
        id:1,
        title:'Convert To Tax Returns',
        tools:[
            { 
                id:1,
                name:'Income Statement',
                icon:<FaMoneyBillAlt />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-return',
                page:{
                    title:'Income Statement',
                    subtitle:'We Do Tax returns',
                    url:'income-statement',
                    bg:'bg-red-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:'',
                       
                    }

                },
            },
            { 
                id:1,
                name:'Balance Sheet',
                icon:<MdBrokenImage />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
                url:'tax-returns',
                page:{
                    title:'Balance Sheet',
                    subtitle:'We Do Tax returns',
                    url:'balance-sheet',
                    bg:'bg-blue-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Cash Flow Statement',
                icon:<FaMoneyBillTransfer/>,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'tax-returns',
                page:{
                    title:'Cash Flow Statement',
                    subtitle:'We Do Tax returns',
                    url:'cash-flow-statement',
                    bg:'bg-green-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Balance Statements',
                icon:<MdAccountBalance />,
                color:'text-yellow-600',
                bg:'hover:bg-yellow-600',
                url:'tax-returns',
                page:{
                    title:'Balance Statements',
                    subtitle:'We Do Balance Statements',
                    url:'balance-statements',
                    bg:'bg-yellow-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Receipts',
                icon:<HiOutlineReceiptTax />,
                color:'text-indigo-600',
                bg:'hover:bg-indigo-600',
                url:'tax-returns',
                page:{
                    title:'Receipts',
                    subtitle:'We Do Receipts',
                    bg:'bg-indigo-600',
                    url:'receipts',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Invoicing and Billing',
                icon:<FaFileInvoiceDollar/>,
                color:'text-cyan-600',
                bg:'hover:bg-cyan-600',
                url:'tax-returns',
                page:{
                    title:'Invoicing and Billing',
                    subtitle:'We Do Invoicing and Billing',
                    url:'invoicing-billing',
                    bg:'bg-cyan-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Purchase Orders',
                icon:<BiSolidPurchaseTag />,
                color:'text-teal-600',
                bg:'hover:bg-teal-600',
                url:'tax-returns',
                page:{
                    title:'Purchase Orders',
                    subtitle:'We Do Purchase Orders',
                    bg:'bg-teal-600',
                    url:'purchase-orders',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Payroll Records',
                icon:<TbReportMoney/>,
                color:'text-orange-600',
                bg:'hover:bg-orange-600',
                url:'tax-returns',
                page:{
                    title:'Payroll Records',
                    subtitle:'We Do Payroll Records',
                    url:'payroll-records',
                    bg:'bg-orange-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
        ]
    },
    {
        id:1,
        title:'Convert to Financial Statements',
        tools:[
            { 
                id:1,
                name:'Tax Returns and Filings',
                icon:<HiOutlineClipboardDocumentList/>,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'financial-statements',
                page:{
                    title:'Tax Returns and Filings',
                    subtitle:'We Do Tax Returns and Filings',
                    url:'tax-returns-filings',
                    bg:'bg-red-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Balance Statements',
                icon:<MdBrokenImage/>,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
                url:'financial-statements',
                page:{
                    title:'Balance Statements',
                    subtitle:'We Do Balance Statements',
                    url:'balance-statements',
                    bg:'bg-blue-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Receipts',
                icon:<HiOutlineReceiptTax/>,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Receipts',
                    subtitle:'We Do Receipts',
                    bg:'bg-green-600',
                    url:'receipts',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Invoicing and Billing',
                icon:<FaFileInvoiceDollar />,
                color:'text-yellow-600',
                bg:'hover:bg-yellow-600',
                url:'financial-statements',
                page:{
                    title:'Invoicing and Billing',
                    subtitle:'We Do Invoicing and Billing',
                    url:'invoicing-billing',
                    bg:'bg-yellow-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Purchase Orders',
                icon:<BiPurchaseTag />,
                color:'text-indigo-600',
                bg:'hover:bg-indigo-600',
                url:'financial-statements',
                page:{
                    title:'Purchase Orders',
                    subtitle:'We Do Purchase Orders',
                    bg:'bg-indigo-600',
                    url:'purchase-orders',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            { 
                id:1,
                name:'Payroll Records',
                icon:<TbReportMoney />,
                color:'text-cyan-600',
                bg:'hover:bg-cyan-600',
                url:'financial-statements',
                page:{
                    title:'Payroll Records',
                    subtitle:'We Do Payroll Records',
                    url:'payroll-records',
                    bg:'bg-cyan-600',
                    fileIcon:'',
                    seo:{
                        title:'',
                        description:'',
                        image:''
                    }

                },
            },
            
        ]
    },
   
]

const footerMenus = [

    {
        id:1,
        title:'Solutions',
        links:[
            { id:1, title:'Education', href:'#' },
            { id:2, title:'Invovation', href:'#' },
       
        ]
        
    },
    {
        id:2,
        title:'Company',
        links:[
            { id:1, title:'Education', href:'#' },
            { id:2, title:'Invovation', href:'#' },
         
        ]
        
    },
    {
        id:3,
        title:'Product',
        links:[
            { id:1, title:'Education', href:'#' },
            { id:2, title:'Invovation', href:'#' },
       
        ]
        
    },
    {
        id:4,
        title:'Apps',
        links:[
            { id:1, title:'Education', href:'#' },
            
        ]
        
    },

]

const socialMedia = {

    facebook:'#',
    youtube:'#',
    insta:'#',
    twitter:'#',
    linkden:'#',
}


const sectionTools = [

    {
        id:1,
        title:'PDF To Word',
        subtitle:'Convert PDF To Editable Document',
        href:'#',
        icon:<RiFileWord2Fill className="text-blue-600" size={40}/>,
      
    },
    {
        id:2,
        title:'Merge PDF',
        subtitle:'Combine Multiple PDFs into one document',
        href:'#',
        icon:<BiMerge className="text-purple-600" size={40}/>,
        
    },
    {
        id:3,
        title:'JPG To PDF',
        subtitle:'Combine Multiple PDFs into one document',
        href:'#',
        icon:<PiFileJpgBold className=" text-yellow-600" size={40}/>

    },
    {
        id:4,
        title:'Sign PDF',
        subtitle:'Create your Signature and sign document',
        href:'#',
        icon:<MdPictureAsPdf className="text-red-600" size={40}/>,
      
    },
    {
        id:5,
        title:'Merge PDF',
        subtitle:'Combine Multiple PDFs into one document',
        href:'#',
        icon:<BiMerge className="text-purple-600" size={40}/>,
        
    },
    {
        id:6,
        title:'JPG To PDF',
        subtitle:'Combine Multiple PDFs into one document',
        href:'#',
        icon:<PiFileJpgBold className=" text-yellow-600" size={40}/>

    },
]







export {
    sectionTools,generalTools,footerMenus,socialMedia
}