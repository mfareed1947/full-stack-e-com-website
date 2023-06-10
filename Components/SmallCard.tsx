"use client"

import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { FC } from "react"
import Link from 'next/link'

const SmallCard: FC<{ item: any }> = ({ item }) => {

  // const handleAddToCart = async () => {

  //   const res = await fetch("/api/cart", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       product_id: item._id,

  //     })

  //   })
  //   const results = await res.json()
  //   console.log(results)
  // }

  return (
    <>
      <div className="ml-4" key={item.name}>
        {
          item.image.map((curr: any) => (
            <Link href={`/products/${item._id}`} key={curr}>
              <Image
                width={270}
                height={270}
                className="max-h-[270px] object-cover object-top "
                key={item.name} src={urlForImage(curr).url()} alt="products" />
            </Link>
          ))
        }
        <h2 className="font-bold text-gray-800 text-xl py-2">{item.name}</h2>
        <h3 className="font-bold text-gray-600 text-xl pb-2">${item.price}</h3>
      </div>
    </>
  )
}

export default SmallCard
