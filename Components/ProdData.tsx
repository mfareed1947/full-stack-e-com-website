import { FC } from "react"
import { Sora } from 'next/font/google'
import AddToCart from "./AddToCart"
const sora = Sora({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ['latin-ext']
})

const sizes = ["XS", "S", "M", "L", "XL"];


const ProdData: FC<{ item: any }> = ({ item }) => {
    return (
        <>
            <div key={item._id} className={`${sora.className} flex flex-col mt-10 gap-y-4`}>
                <h2 className="text-2xl text-black/80">{item.name}</h2>
                <div>
                    <p>SELECTED SIZE</p>
                    <div className="flex space-x-4 py-8">
                        {sizes.map((size) => (
                            <div key={size} className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 hover:shadow-lg hover:bg-white font-bold text-lg">{size}</div>
                        ))
                        }
                    </div>
                </div>
                <AddToCart item={item} />
            </div>
        </>
    )
}

export default ProdData
