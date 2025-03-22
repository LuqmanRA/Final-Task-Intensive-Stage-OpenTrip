import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <div className="shadow sm:py-5 py-2 lg:px-20 px-5">
      <div className="flex justify-between items-center">
        <div className="sm:flex gap-5">
          <Link
            href="/"
            className="hover:underline hover:text-red-500 focus:underline font-medium sm:text-lg"
          >
            <p>Beranda</p>
          </Link>
          <Link
            href="/destinasi"
            className="hover:underline hover:text-red-500 focus:underline font-medium sm:text-lg"
          >
            <p>Destinasi</p>
          </Link>
        </div>
        <div>
          <Image
            src={Logo}
            width={150}
            height={150}
            alt="Logo"
            className="w-28 sm:w-40"
          />
        </div>
        <div className="sm:flex gap-3">
          <div className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md">
            <Link
              href="/login"
              className="font-semibold text-red-500 sm:text-lg"
            >
              <button>test</button>
            </Link>
          </div>
          <div className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md hidden sm:inline">
            <Link
              href="/register"
              className="font-semibold text-white sm:text-lg"
            >
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
