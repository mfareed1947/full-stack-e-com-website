import Image from 'next/image'
import React from 'react'
import Button from './shared/Button'

const Hero = () => {
    return (
        <div className='flex w-full max-w-[1500px] px-20 mx-auto gap-x-40'>
            {/* image right side div */}
            <div className='w-1/3 flex justify-center pt-16 items-start flex-col gap-y-6'>
                <div className='bg-sky-200 text-blue-800 font-bold px-4 py-2 rounded-lg'>
                    sale 70%
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-gray-900">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 text-2xl text-gray-500 [&:not(:first-child)]:mt-6">
                    Anyone can beat you but no one can beat your outfit as long as you wear
                    Dine outfits.
                </p>
                <Button content='Start Shopping' link='products' />
                <div className='flex space-x-4'>
                    <Image src={'/Featured1.webp'} alt='featured' width={300} height={300} />
                    <Image src={'/Featured2.webp'} alt='featured' width={300} height={300} />
                    <Image src={'/Featured3.webp'} alt='featured' width={300} height={300} />
                    <Image src={'/Featured4.webp'} alt='featured' width={300} height={300} />
                </div>
            </div>
            {/* image right side div */}
            <div className='w-1/2 flex justify-end items-center h-full'>
                <div className='bg-pink-100 h-full w-full rounded-full'>
                    <Image src={'/header.webp'} alt='header' width={900} height={900} />
                </div>
            </div>
            {/*  */}
        </div >
    )
}

export default Hero
