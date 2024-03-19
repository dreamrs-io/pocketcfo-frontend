import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function UserLayout({children}) {
    return (
        <div className={` ${inter.className} transition-all duration-150  `}>
            <NavBar/>
            <div className='max-w-7xl mx-auto h-[60vh] border-2 border-dashed rounded-xl p-8 mt-32 '>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
