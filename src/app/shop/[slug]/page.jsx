import React from 'react'
export async function generateMetadata({params}) {
    const {slug} = await params
    const data = await fetch(`https://dummyjson.com/products/${slug}`)
    const product = await data.json()
    console.log(product)
    console.log(slug)

    return {
        title: product.title,
        description: product.description,
    }
}

const page = async ({params}) => {
    const {slug} = await params
  return (
    <div>Dynamic page</div>
  )
}

export default page