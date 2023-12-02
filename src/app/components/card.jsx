import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs"
import Content from '@/app/components/content'

export default function card(){
    return (
        <>
            <div className='mt-14'>
                <div className='sm:flex justify-between px-10 mb-5'>
                    <div>
                        <h1 className='text-xl mb-3 sm:mb-0 sm:text-3xl font-bold'>Destinasi Populer</h1>
                    </div>
                    <Link href='#'>
                        <p className='hover:text-red-500 flex gap-2 text-sm sm:text-base'>LIHAT LIBURAN LAINNYA 
                        <BsArrowRight className='text-2xl' />
                        </p>
                    </Link>
                </div>
                <div className='flex overflow-auto sm:grid lg:grid-cols-4 sm:grid-cols-3 px-10 gap-5'>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
            <div className='mt-14'>
                <div className='sm:flex justify-between px-10 mb-5'>
                    <div>
                        <h1 className='text-xl mb-3 sm:mb-0 sm:text-3xl font-bold'>Vitamin Sea</h1>
                    </div>
                    <Link href='#'>
                        <p className='hover:text-red-500 flex gap-2 text-sm sm:text-base'>LIHAT LIBURAN LAINNYA 
                        <BsArrowRight className='text-2xl' />
                        </p>
                    </Link>
                </div>
                <div className='flex overflow-auto sm:grid lg:grid-cols-4 sm:grid-cols-3 px-10 gap-5'>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
            <div className='mt-14'>
                <div className='sm:flex justify-between px-10 mb-5'>
                    <div>
                        <h1 className='text-xl mb-3 sm:mb-0 sm:text-3xl font-bold'>Naik Naik ke Puncak Gunung</h1>
                    </div>
                    <Link href='#'>
                        <p className='hover:text-red-500 flex gap-2 text-sm sm:text-base'>LIHAT LIBURAN LAINNYA 
                        <BsArrowRight className='text-2xl' />
                        </p>
                    </Link>
                </div>
                <div className='flex overflow-auto sm:grid lg:grid-cols-4 sm:grid-cols-3 px-10 gap-5'>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
            <div className='mt-14 mb-32'>
                <div className='sm:flex justify-between px-10 mb-5'>
                    <div>
                        <h1 className='text-xl mb-3 sm:mb-0 sm:text-3xl font-bold'>Menyatu Dengan Alam</h1>
                    </div>
                    <Link href='#'>
                        <p className='hover:text-red-500 flex gap-2 text-sm sm:text-base'>LIHAT LIBURAN LAINNYA 
                        <BsArrowRight className='text-2xl' />
                        </p>
                    </Link>
                </div>
                <div className='flex overflow-auto sm:grid lg:grid-cols-4 sm:grid-cols-3 px-10 gap-5'>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        </>
        
    )
}