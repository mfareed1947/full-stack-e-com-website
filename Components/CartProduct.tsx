"use client"
import { RootState } from "@/store/store"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import { urlForImage } from "@/sanity/lib/image"
import { Image as Iimage } from "sanity";
import { cartActions } from "@/store/slice/cartSlice";

const CartProduct = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch()
    const { AddToCart, removeFromCart, clearCart } = cartActions

    interface Product {
        name: string;
        _id: string;
        price: number;
        image: Iimage;
        quantity: number;
        totalPrice: number;
    }

    return (
        <div className=" w-7/12 h-full">
            <h2 className="text-2xl font-bold py-10">Shopping Cart</h2>
            {/* Product data */}
            <div>
                {
                    items.map(({ name, _id, price, image, quantity }) => (
                        <div key={_id} className="flex w-full gap-x-10">
                            {/* Image data */}
                            <div>
                                {image.map((image: Iimage) => (
                                    <div key={image.asset?._key} className="w-full h-56">
                                        <Image
                                            alt="image"
                                            src={urlForImage(image).url()}
                                            width={200}
                                            height={500}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Product others data */}
                            <div className="main-product w-full flex flex-col gap-y-2">
                                {/* name and delete button */}
                                <div className="flex justify-between items-center w-full">
                                    <h2 className="text-xl">{name}</h2>
                                    <button className="hover:bg-red-400 hover:text-white hover:shadow-lg transition-all 0.6s ease-out w-10 h-10 rounded-full flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="font-semibold">Dress</div>
                                <div className="font-semibold">Delivery Estimation</div>
                                <div className="font-semibold text-yellow-400">5 Working Days</div>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold text-lg">${price}</div>
                                    <div className="text-xl font-medium flex items-center space-x-4">
                                        <button onClick={() => dispatch(removeFromCart(_id))} className="p-2 h-10 w-10 rounded-full hover:bg-red-400 transition-all 0.5s ease-in-out hover:text-white hover:shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                            </svg>
                                        </button>
                                        <p>{quantity}</p>
                                        <button onClick={() => dispatch(AddToCart({ product: { name, _id, price, image }, quantity: 1 }))} className="p-2 h-10 w-10 rounded-full hover:bg-green-400 transition-all 0.5s ease-in-out hover:text-white hover:shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CartProduct
