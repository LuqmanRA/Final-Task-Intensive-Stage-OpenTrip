import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import Badge from '@/assets/Google Play.svg'
import Badge2 from '@/assets/App Store.svg'
import Icon from '@/assets/twiter.svg'
import Icon2 from '@/assets/instagram.svg'
import Icon3 from '@/assets/youtube.svg'
import Link from 'next/link'
import '../globals.css'

export default function footer(){
    return (
        <>
            <div className="grid grid-rows-5 sm:flex sm:justify-around py-10 shadow bg-gray-100">
                <div className="flex justify-center sm:justify-normal sm:inline">
                    <Image src={Logo} alt="logo" />
                </div> 
                <div>
                        <h1 className='text-lg text-center sm:text-start'>Company</h1>
                        <ul className="flex sm:inline-block sm:justify-normal justify-between mt-2 sm:mt-5 text-sm px-3 sm:px-0">
                            <li className="pb-3"><Link href="#">About</Link></li>
                            <li className="pb-3"><Link href="#">Press</Link></li>
                            <li className='pb-3'><Link href="#">Careers</Link></li>
                            <li className='pb-3'><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg text-center sm:text-start'>Support</h1>
                        <ul className="flex sm:inline-block sm:justify-normal justify-between mt-2 sm:mt-5 text-sm px-3 sm:px-0">
                            <li className="pb-3"><Link href="#">Help Center</Link></li>
                            <li className="pb-3"><Link href="#">Terms of service</Link></li>
                            <li className='pb-3'><Link href="#">Legal</Link></li>
                            <li className='pb-3'><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div> 
                    <div>
                        <h1 className='text-lg text-center sm:text-start'>Kerja sama</h1>
                        <ul className="flex sm:inline-block sm:justify-normal justify-center gap-5 mt-2 sm:mt-5 text-sm">
                            <li className="pb-3"><Link href="#">Daftar Jadi Hoster</Link></li>
                            <li className="pb-3"><Link href="#">Hoster Terdaftar</Link></li>
                        </ul>
                    </div> 
                    <div>
                        <h1 className='text-lg text-center sm:text-start'>Get the App</h1>
                        <div className='flex justify-center gap-2'>
                            <Link href="#"><Image src={Badge} alt="" width={120} height={120}/></Link>
                            <Link href="#"><Image src={Badge2} alt="" width={120} height={120} /></Link>
                        </div>
                    </div> 
            </div>
            <div className='flex justify-between items-center sm:px-14 px-5 h-20 bg-black'>
                <p className='text-slate-100 text-sm'>© 2020 OPENTRIP. All rights reserved</p>
                <div className='flex gap-2'>
                <Link href='#'><Image src={Icon2} alt="icon" width={35} height={35} /></Link>
                <Link href='#'><Image src={Icon} alt="icon" width={35} height={35} /></Link>
                <Link href='#'><Image src={Icon3} alt="icon" width={35} height={35} /></Link>
                </div>
            </div>
        </>
    )
}