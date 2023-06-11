import Image from "next/image"
import { FC } from "react"
import { urlForImage } from "@/sanity/lib/image"

const ImagesCollection: FC<{ item: any }> = ({ item }) => {
    return (
        <div className="flex space-x-8">
            {
                item.image.map((image: any) => (
                    <div key={image._id} className="">
                        <Image
                            alt="image"
                            src={urlForImage(image).url()}
                            width={100}
                            height={100}
                        />
                    </div>
                ))
            }
            {
                item.image.map((image: any) => (
                    <div key={image} className="">
                        <Image
                            alt="image"
                            src={urlForImage(image).url()}
                            width={550}
                            height={500}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ImagesCollection
