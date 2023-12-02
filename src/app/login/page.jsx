import Link from "next/link"
import Logo from '@/assets/logo.svg'
import Image from "next/image"
import Img from "@/assets/Imagelogin.jpg"

export default function Home() {
  return (
    <>
      <section className="sm:flex">
        <div className="hidden sm:inline-block sm:px-0 sm:py-0 sm:w-1/2 sm:h-screen">
          <Image src={Img} className="sm:mb-0 w-full h-full sm:h-screen brightness-75" />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto h-screen">
          <Link
            href="/"
            className="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-40 h-8 mr-2"
              src={Logo}
              alt="logo"
            />
          </Link>
          <div className="w-full px-5">
            <div className="space-y-4 md:space-y-6">
              <form className="space-y-4 md:space-y-6" action="/">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "
                    placeholder="username"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <div className="flex items-center gap-8 sm:gap-5 justify-between">
                  <Link
                    href="#"
                    className="text-sm font-medium text-red-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                  <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-red-500 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}