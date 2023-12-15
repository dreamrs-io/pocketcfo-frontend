import { RiFileWord2Fill } from "react-icons/ri";
import { BiMerge } from "react-icons/bi";
import { PiFileJpgBold } from "react-icons/pi";
import { MdPictureAsPdf } from "react-icons/md";

import usersIcon from '@/public/assets/billionUsers.svg'
import bussiness from '@/public/assets/bussiness.svg'
import encryption from '@/public/assets/encryption.svg'
import partners from '@/public/assets/partners.svg'
import support from '@/public/assets/support.svg'

import { CgMenuGridR } from "react-icons/cg";

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


const reasons = [

    {
        id:1,
        icon:usersIcon,
        title:'People Trust Us',
        subtitle:'Over a billion users have used our service to simplify their work with digital documents.'

    },
    {
        id:2,
        icon:bussiness,
        title:'Businesses Trust Us',
        subtitle:'We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.'

    },
    {
        id:3,
        icon:partners,
        title:'Our Partners Trust Us',
        subtitle:'Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.'

    },
    {
        id:4,
        icon:support,
        title:'24/7 Customer Support',
        subtitle:'Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.'

    },
    {
        id:5,
        icon:encryption,
        title:'256-Bit TLS Encryption',
        subtitle:'Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.'

    },
    {
        id:6,
        icon:usersIcon,
        title:'Security Standards',
        subtitle:'Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.'

    },
]

const generalTools = [

    {
        id:1,
        title:'Convert To Tax Returns',
        tools:[
            { 
                id:1,
                name:'Income Statement',
                icon:<CgMenuGridR />,
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
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Balance Sheet',
                    subtitle:'We Do Tax returns',
                    url:'balance-sheet',
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
                name:'Cash Flow Statement',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Cash Flow Statement',
                    subtitle:'We Do Tax returns',
                    url:'cash-flow-statement',
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
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Balance Statements',
                    subtitle:'We Do Balance Statements',
                    url:'balance-statements',
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
                name:'Receipts',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Receipts',
                    subtitle:'We Do Receipts',
                    bg:'bg-red-600',
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
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Invoicing and Billing',
                    subtitle:'We Do Invoicing and Billing',
                    url:'invoicing-billing',
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
                name:'Purchase Orders',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Purchase Orders',
                    subtitle:'We Do Purchase Orders',
                    bg:'bg-red-600',
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
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
                url:'tax-returns',
                page:{
                    title:'Payroll Records',
                    subtitle:'We Do Payroll Records',
                    url:'payroll-records',
                    bg:'bg-red-600',
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
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Tax Returns and Filings',
                    subtitle:'We Do Tax Returns and Filings',
                    url:'tax-returns-filings',
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
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Balance Statements',
                    subtitle:'We Do Balance Statements',
                    url:'balance-statements',
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
                name:'Receipts',
                icon:<CgMenuGridR />,
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
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Invoicing and Billing',
                    subtitle:'We Do Invoicing and Billing',
                    url:'invoicing-billing',
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
                name:'Purchase Orders',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Purchase Orders',
                    subtitle:'We Do Purchase Orders',
                    bg:'bg-green-600',
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
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
                url:'financial-statements',
                page:{
                    title:'Payroll Records',
                    subtitle:'We Do Payroll Records',
                    url:'payroll-records',
                    bg:'bg-green-600',
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







export {
    sectionTools,reasons,generalTools,footerMenus,socialMedia
}