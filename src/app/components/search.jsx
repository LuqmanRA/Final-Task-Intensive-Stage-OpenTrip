'use client'

import { Datepicker } from 'flowbite-react'

export default function search(){
    return(
        <div className="sm:flex sm:justify-center gap-2 shadow p-4">
            <input type="text" placeholder="Search" className="outline-none border bg-gray-50 focus:ring-black focus:border-black border-gray-300 rounded-lg sm:px-2 sm:py-1 w-full sm:w-96 px-1 text-black mb-2 sm:mb-0" /> 
            <Datepicker autoHide={false} className='mb-2 sm:mb-0'></Datepicker>
            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-600 font-semibold rounded-lg text-lg sm:px-7 px-4 py-1 sm:py-0">Cari</button>
        </div>
    )
}