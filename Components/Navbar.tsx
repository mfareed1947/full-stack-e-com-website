import Image from "next/image"
import NavContent from "./NavContent"
import Link from "next/link"


export const Navbar = () => {
    return (
        <nav className="flex justify-between h-20 px-20 py-6 max-w-[1500px] mx-auto">
            <div className="cursor-pointer">
                <Link href={'/'}><Image src={'/Logo.webp'} alt="logo" width={150} height={150} /></Link>
            </div>
            <div className="max-md:hidden">
                <NavContent />
            </div>
            <div className="flex space-x-4">
                <div className="p-3 bg-gray-100 rounded-full h-11 w-h-11 relative cursor-pointer hover:scale-90 transition-all 0.6s ease-in">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="bg-red-400 w-6 h-6 rounded-full absolute -top-2 right-0 p-2 text-white flex justify-center items-center">
                        0
                    </span>
                </div>
                <div className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}