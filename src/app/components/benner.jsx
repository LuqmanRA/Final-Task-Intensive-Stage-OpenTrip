import Image from "next/image"
import Gambar from '@/assets/gambar.jpg'

export default function banner(){
    return(
        <div className="relative">
            <Image src={Gambar} alt="gambar" className='w-full h-48 sm:h-auto brightness-50'/>
            <div className="absolute top-1/3 lg:left-36 left-12">
                <h1 className="font-semibold lg:text-5xl sm:text-4xl text-xl text-white lg:leading-snug leading-tight">NEVER STOP <br/> EXPLORING THE WORLD</h1>
            </div>
        </div>
    )
}