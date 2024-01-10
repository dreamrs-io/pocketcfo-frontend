import Image from "next/image";
import heroImg from '@/public/assets/hero.svg'
import { useRef } from "react";
export default function Home(){


    const handleMouseClick = (event) => {

        const mouseX = event.clientX;
        const mouseY = event.clientY;
        console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
        
        
    

    }
    return(
        <div className="border border-black w-[500px] h-[500px] " onClick={handleMouseClick}>
            <Image src={heroImg}   width={900} alt="svgart"   className="" />
        </div>

    );
}