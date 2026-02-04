import React from 'react'
import { CiStar } from 'react-icons/ci'

const ProductCard = () => {
  return (
    <div className='w-37.5 p-2 hover:shadow shadow-gray-500 space-y-1'>
        <img src="https://parashardaspro.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdythjh03y%2Fimage%2Fupload%2Fv1762194666%2Fskill%2Fnswd1snqbzcsuu4rhole.png&w=128&q=75" alt="" />
        <h1 className='text-lg font-semibold'>Product name</h1>
        <h1 className='text-sm font-bold'>Product price</h1>
        <h1><CiStar/></h1>
    </div>
  )
}

export default ProductCard
