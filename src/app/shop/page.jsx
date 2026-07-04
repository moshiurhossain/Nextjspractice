import Navbar from '@/components/Navbar'
import React from 'react'

const page =async () => {
  const data = await fetch('https://dummyjson.com/products')
  const {products} = await data.json()
  console.log(products)

  return (
  
    <div >
        <h1>Shop page</h1>
        {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default page