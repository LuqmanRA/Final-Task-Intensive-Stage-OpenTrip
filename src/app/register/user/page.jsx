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
        <form className="space-y-4 md:space-y-6 bg-gray-50 sm:absolute lg:top-32 sm:top-24 sm:left-14 px-7 py-12 border-t-red-500 border-t-4 sm:w-96"  action="/">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-500">Username</label>
            <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " required="" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500">Password</label>
            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " required=""/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " required="" />
          </div>
          <button type="submit" className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
        </form>
      </div>
      <Footer />
    </>
  )
}