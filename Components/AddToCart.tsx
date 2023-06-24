"use client"
import { cartActions } from '@/store/slice/cartSlice'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

const AddToCart: FC<{ item: any }> = ({ item }) => {
    const { name, _id, price, image } = item;
    const [quant, setquant] = useState(1);
    const { AddToCart } = cartActions
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(AddToCart({ product: { name, _id, price, image }, quantity: quant }))
    }

    return (
        <>
            <div className="text-xl font-medium flex items-center space-x-4">
                <p>Quantity:</p>
                <button onClick={() => setquant(quant <= 1 ? 1 : quant - 1)} className="p-2 h-10 w-10 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </button>
                <p>{quant}</p>
                <button onClick={() => setquant(quant + 1)} className="p-2 h-10 w-10 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <div className="flex p-4 bg-black text-white space-x-2 font-medium shadow-md hover:scale-90 transition-all 0.6s ease-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <button onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
                <h2 className="text-2xl font-bold">${item.price}.00</h2>
            </div>
        </>
    )
}

export default AddToCart
