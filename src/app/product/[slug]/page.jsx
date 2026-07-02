import React from 'react'

const page =  async ({params}) => {
    console.log(params)
    const {slug} = await params
    console.log(slug)
    
    return (
    <div>Dynamic page: {slug}</div>
  )
}

export default page