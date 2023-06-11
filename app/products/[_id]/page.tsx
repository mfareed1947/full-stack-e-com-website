import ImagesCollection from "@/Components/ImagesCollection"
import Overview from "@/Components/Overview"
import ProdData from "@/Components/ProdData"
import { client } from "@/sanity/lib/client"
import { Image as IImage } from "sanity"

interface IProduct {
    name: string,
    _id: string,
    price: number,
    description: string,
    image: IImage,
    category: {
        name: string
    }
}
const page = async ({ params }: any) => {
    const id = params._id;

    const getProductData = async (id: any) => {
        // console.log(id)
        const product = await client.fetch(`*[_type=="products" && _id=="${id}"]{
            name,
            _id,
            price,
            description,
            image,
              }`)
        return product
    }
    const data: IProduct[] = await getProductData(id);
    return (
        <>
            {
                data.map((item: any, id) => (

                    <div className="bg-[#FCFCFC]" key={id}>
                        {/* content Related div */}
                        <div className="flex mx-auto px-20 pt-10">
                            <div>
                                <ImagesCollection item={...item} />
                            </div>
                            <div className="flex ml-4">
                                <ProdData item={item} />
                            </div>
                        </div>
                        {/*overview and product information */}
                        <div>
                            <Overview />
                        </div>

                    </div>
                ))
            }
        </>
    )
}

export default page
