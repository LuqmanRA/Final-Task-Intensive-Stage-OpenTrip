import Link from "next/link"
import Image from "next/image"
import Img from "@/assets/imgregister.jpg"
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="sm:relative p-14 sm:p-0">
        <div className="hidden sm:inline">
          <Image src={Img} alt="gambar" width={1000} height={1000} className="w-full h-screen xl:h-auto brightness-75" />  
        </div>
        <div className="bg-gray-50 sm:absolute lg:top-32 top-24 sm:left-14 left-1 px-7 py-12 border-t-red-500 border-t-4">
          <h1 className="text-gray-900 font-medium text-2xl mb-10">Choose Registration</h1> 
          <Link href="/register/user">
            <button type="button" className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register as User</button> 
          </Link>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
            or
            </span>
          </div>
          <Link href="/register/hoster">
            <button type="button" className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register as Hoster</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}