import React from 'react'
import DeshNav from '../deshboardComp/DeshNav'
import ProductPage from '../deshboardComp/ProductPage';

const Deshboard = () => {
  const [deshboard, setDeshboard] = React.useState('orders');
  console.log(deshboard);
  return (
    <div className='flex '>
      <DeshNav setDeshboard={setDeshboard}/>
      <div className='w-full'>
        {deshboard === 'Products' ? <ProductPage/> : deshboard === 'Orders' ? <h1>jhk</h1> : deshboard === 'Customers' ? <h1>jhkgbb</h1> : deshboard === 'Analytics' ? <h1>ghfjh</h1> : deshboard === 'Settings' ? <h1>ghfjkgjhgjkjh</h1> : <h1>ghfjkgjhgjkjh</h1>}
      </div>
    </div>
  )
}

export default Deshboard
