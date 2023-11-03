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
        title:'Convert & Compress',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
        ]
    },
    {
        id:2,
        title:'Split & Merge',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
        ]
    },
    {
        id:3,
        title:'Convert & Compress',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
        ]
    },
    {
        id:4,
        title:'Split & Merge',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
        ]
    },
    {
        id:4,
        title:'Split & Merge',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
            },
        ]
    },
    {
        id:4,
        title:'Split & Merge',
        tools:[
            { 
                id:1,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-red-600',
                bg:'hover:bg-red-600',
            },
            { 
                id:2,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-blue-600',
                bg:'hover:bg-blue-600',
            },
            { 
                id:3,
                name:'Compress PDF',
                icon:<CgMenuGridR />,
                color:'text-green-600',
                bg:'hover:bg-green-600',
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