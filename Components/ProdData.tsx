import { FC } from "react"
import { Sora } from 'next/font/google'
import Button from "./shared/Button"
const sora = Sora({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ['latin-ext']
})



const ProdData: FC<{ item: any }> = ({ item }) => {
    return (
        <>
            <div key={item._id} className={`${sora.className} flex flex-col mt-10 gap-y-4`}>
                <h2 className="text-2xl text-black/80">{item.name}</h2>
                <div>
                    <p>SELECTED SIZE</p>
                    <div className="flex space-x-4 py-8">
                        <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">XS</div>
                        <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">S</div>
                        <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">M</div>
                        <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">L</div>
                        <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">XL</div>
                    </div>
                </div>
                <div className="text-xl font-medium flex items-center space-x-4">
                    <p>Quantity:</p>
                    <button className="p-2 h-10 w-10 rounded-full bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <p>{1}</p>
                    <button className="p-2 h-10 w-10 rounded-full bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Button content='Add to Cart'link='cart'/>
                    <h2 className="text-2xl font-bold">${item.price}.00</h2>
                </div>
            </div>
        </>
    )
}

export default ProdData
