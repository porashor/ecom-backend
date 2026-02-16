import React from 'react'
import ProductUpload from './ProductUpload'
import ProductUpdate from './ProductUpdate';
import ProductDelete from './ProductDelete';
import ProductCheck from './ProductCheck';

const ProductPage = () => {
    const [open, setOpen] = React.useState(0);
  return (
    <div className='py-5 px-10 w-full'>
        {/* product page header  */}
        <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-semibold'>Product overviews</h1>
            <p className='text-lg text-slate-500'>Set product, create, update, delete and manage products.</p>
        </div>
        {/* product nav  */}
        <div className='flex gap-5 py-5'>
            <button onClick={()=>setOpen(0)} className={open === 0 ? 'bg-slate-600 text-white px-3 py-2 rounded-md' : 'bg-slate-300 text-slate-600 px-3 py-2 rounded-md'}>Create</button>
            <button onClick={()=>setOpen(1)} className={open === 1 ? 'bg-slate-600 text-white px-3 py-2 rounded-md' : 'bg-slate-300 text-slate-600 px-3 py-2 rounded-md'}>Update</button>
            <button onClick={()=>setOpen(2)} className={open === 2 ? 'bg-slate-600 text-white px-3 py-2 rounded-md' : 'bg-slate-300 text-slate-600 px-3 py-2 rounded-md'}>Delete</button>
            <button onClick={()=>setOpen(3)} className={open === 3 ? 'bg-slate-600 text-white px-3 py-2 rounded-md' : 'bg-slate-300 text-slate-600 px-3 py-2 rounded-md'}>Check</button>
        </div>
        {/* product list  */}
        <div className='w-full bg-white p-5 rounded-lg space-y-2'>
            {open === 0 && <ProductUpload/>}
            {open === 1 && <ProductUpdate/>}
            {open === 2 && <ProductDelete/>}
            {open === 3 && <ProductCheck/>}
        </div>
    </div>
  )
}

export default ProductPage
