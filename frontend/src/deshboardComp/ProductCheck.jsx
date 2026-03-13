import React from 'react'
import useProductZust from '../state/productZust'
const ProductCheck = () => {
  const {allProducts, getProducts} = useProductZust();
  React.useEffect(() => {
    getProducts()
  }, [])
  console.log(allProducts);
  return (
    <div>
      <h1 className='text-2xl font-bold py-3'>Products list</h1>
      <p>Here is all types of products that you can modify update and delete.</p>
      <ul>
        <li className='grid grid-cols-6 items-center bg-slate-300 py-2 justify-between text-xl font-semibold'>
          <p>Title</p>
          <p>Price</p>
          <p>Category</p>
          <p>Quantity</p>
          <p>Brand</p>
          <p>Badge</p>
        </li>
        {allProducts.map((product) => (
        <li className='grid grid-cols-6 py-1 border-b border-slate-300 items-center justify-between' key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.cetagory}</p>
          <p>{product.quantity}</p>
          <p>{product.brand}</p>
          <p>{product.badge}</p>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProductCheck
