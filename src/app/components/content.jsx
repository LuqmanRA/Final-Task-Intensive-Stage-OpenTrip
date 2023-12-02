import Image from "next/image"
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Card from '@/assets/card.jpg'

export default function content(){
    return (
        <div className="bg-white border border-gray-200 shadow">
            <Image src={Card} alt="card" className="" />
            <div className="w-64 sm:w-full p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Gunung Bromo</h5>
                    <p className="mb-2 font-normal text-gray-700">Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku</p>
                    <div className='flex justify-between'>
                        <p className="font-bold text-red-500">Rp 2.000.000 <span className='font-normal text-gray-700'>/ Orang </span></p>
                        <p className="flex items-center gap-1"><FaStar className='text-yellow-300'/> 4.5</p>
                    </div>
            </div>
            <Link href='/destinasi/detail'>
            <div className="flex justify-center px-5 pb-3">
                    <button className="focus:outline-none text-white bg-red-500 hover:bg-red-600 font-semibold text-base w-full py-2">Pesan Sekarang</button>
            </div>
            </Link>
            
        </div>
    )
    
}