import React from 'react'

const page = async ({params}) => {
    const {id} = await params 
    if(id.length == 1){
        return
        <div>Dynamic contact page: {id[1]}</div>
    }else if(id.length == 2){
        return
        <div>{id[1]}------{id[2]}</div>
    } 
  return (
    <div>Dynamic contact page: {id}</div>
  )
}

export default page