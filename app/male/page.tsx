import SmallCard from "@/Components/SmallCard"
import { client } from "@/sanity/lib/client"
import { Image as IImage } from "sanity"

const getProductData = async () => {
  const product = await client.fetch(`*[_type=="products" && category->name =="Male"]{
      name,
      _id,
      price,
      description,
      image,
        }`)
  return product
}
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

const page = async () => {
  const data: IProduct[] = await getProductData()
  return (
    <>
      <div className="grid grid-cols-4 mx-auto w-full max-w-[1500px] pt-10 pl-[70px] gap-x-5 gap-y-5">
        {
          data.map((item: any, id) => (
            <SmallCard key={id} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default page
