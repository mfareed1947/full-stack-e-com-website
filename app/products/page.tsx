import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { Image as IImage } from "sanity"
const getProductData = async () => {
    const product = await client.fetch(`*[_type=="products"]{
        name,
        price,
        description,
        image,
          }`)
    return product
}
interface IProduct {
    name: string,
    price: number,
    description: string,
    image: IImage,
    category: {
        name: string
    }
}

const page = async () => {
    const data: IProduct[] = await getProductData()
    return (
        <>
            <div className="grid grid-cols-[auto,auto,auto]">
                {
                    data.map((item: any, id) => (
                        <div key={id}>
                            {
                                item.image.map((curr: any) => (
                                    <Image
                                        width={300}
                                        height={300}
                                        key={id} src={urlForImage(curr).url()} alt="products" />
                                ))
                            }
                            <h2>{item.name}</h2>
                            <h3>${item.price}</h3>
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}

export default page
