import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({children}) {
    return (
        <div className={` ${inter.className} transition-all duration-150 `}>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}
