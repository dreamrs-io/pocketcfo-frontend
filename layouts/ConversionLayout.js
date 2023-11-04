import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Tools from '@/components/Tools'

const inter = Inter({ subsets: ['latin'] })

export default function ConversionLayout({children}) {
    return (
        <div className={` ${inter.className} transition-all duration-150 `}>
            <NavBar/>
            {children}
            <div className="border-t">
                <div className="max-w-7xl mx-auto my-10 p-2 lg:p-6">
                    <Tools/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
