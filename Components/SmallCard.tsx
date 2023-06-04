"use client"

import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { FC } from "react"
const SmallCard: FC<{ item: any }> = ({ item }) => {

  const handleAddToCart = async () => {

    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,

      })

    })
    const results = await res.json()
    console.log(results)
  }

  return (
    <>
      <div key={item.name}>
        {
          item.image.map((curr: any) => (
            <Image
              width={300}
              height={300}
              key={item.name} src={urlForImage(curr).url()} alt="products" />
          ))
        }
        <h2>{item.name}</h2>
        <h3>${item.price}</h3>
        <button onClick={() => handleAddToCart()} className="p-4 bg-blue-400 text-white">add to Cart</button>
      </div>
    </>
  )
}

export default SmallCard
