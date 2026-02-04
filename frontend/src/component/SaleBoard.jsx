import React from 'react'
import ProductCard from './ProductCard'

const SaleBoard = ({headline, data}) => {
  return (
    <div className='w-[70%] mx-auto py-5'>
      {/* upper header  */}
      <div className=''>
        <h1 className='text-xl font-semibold'>{headline}</h1>
        <div className='w-full bg-white'>
            {/* //headline  */}
            <div className='py-2 flex justify-between items-center border-b border-gray-400 px-5'>
                <h1 className='text-xl dark font-semibold'>On sale now!</h1>
                {/* btn  */}
                <button className='border border-gray-500 px-3 py-2 text-xl font-semibold'>Shop all products</button>
            </div>
            {/* //product list  */}
            <div className='flex justify-between gap-1 py-2'>
                {/* //card load here  */}
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SaleBoard
