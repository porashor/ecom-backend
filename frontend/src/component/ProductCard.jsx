import React from 'react'
import { CiStar } from 'react-icons/ci'

const ProductCard = ({data}) => {
  console.log(data); 
  return (
    <div className='w-37.5 p-2 hover:shadow shadow-gray-500 space-y-1'>
        <img src={data?.image} className='w-35 aspect-square object-cover' alt="" />
        <h1 className='text-lg font-semibold'>{data?.title}</h1>
        <h1 className='text-sm font-bold'>{data?.price}</h1>
        <h1><CiStar/></h1>
        <button className='text-white bg-yellow-500 w-full py-2 rounded-lg font-semibold cursor pointer'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
