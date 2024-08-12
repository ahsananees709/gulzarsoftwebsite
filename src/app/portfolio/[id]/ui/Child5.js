import React from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    return (
        <div className='flex flex-col mx-4 sm:mx-10 md:mx-20 mt-10 sm:mt-16 h-full rounded-3xl items-center justify-center gap-3 py-10 sm:py-16 bg-[#2176FF] text-center'>
            <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
                Ready To Step Into The World
            </p>
            <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
                Of Next-Gen Fintech Solutions?
            </p>
            <button 
                onClick={() => router.push('/contact')} 
                className="text-black font-semibold bg-yellow-300 py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-[#FFC800] mt-5"
            >
                Talk To Us Today!
            </button>
        </div>
    )
}
