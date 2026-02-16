import React from 'react'
import useProductStore from '../state/productZust'
import ProductUpDesc from './ProductUpDesc'

const ProductUpload = () => {
    const {title, desc, cetagory, brand, price, quantity, image,  badge, setImage, setTitle, setDesc, setCetagory, setBrand, setPrice, setQuantity, setBadge, uploadProduct} = useProductStore()
    console.log(image)
  return (
    <div>
        <h1 className='text-xl font-semibold border-b border-gray-500 pb-2'>Create product</h1>
        <div className='w-full bg-white p-5 rounded-lg space-y-2 grid grid-cols-2 gap-2 '>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-gray-500 p-2 rounded-md' type="text" placeholder='Product name'/>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className='border border-gray-500 p-2 rounded-md' type="number" placeholder='Product price'/>
            <select placeholder='Product catagory' onChange={(e)=>setCetagory(e.target.value)} name="catagory" id="">
                <option value="0">--Select a cetagory--</option>
                <option value="computer">Computer</option>
                <option value="computer">Computer</option>
            </select>
            <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} className='border border-gray-500 p-2 rounded-md' type="number" placeholder='Product quantity'/>
            <input value={brand} onChange={(e)=>setBrand(e.target.value)} className='border border-gray-500 p-2 rounded-md' type="text" placeholder='Product brand'/>
            <select name="badge" id="" onChange={(e)=>setBadge(e.target.value)}>
                <option value="available">--Select a badge--</option>
                <option value="available">Available</option>
                <option value="available">Upcomming</option>
            </select>

            <input onChange={(e)=>setImage(e.target.files[0])} className='border border-gray-500 p-2 rounded-md' type="file" placeholder='Product image'/>
            <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className='border border-gray-500 p-2 rounded-md col-span-2' type="text" placeholder='Product description'/>
            <button className='bg-slate-600 text-white px-3 py-2 rounded-md last:col-span-2' onClick={(e)=>uploadProduct(e, title, price, cetagory, quantity, brand, badge, image, desc)}>Create</button>
        </div>
        <ProductUpDesc/>
    </div>
  )
}

export default ProductUpload
