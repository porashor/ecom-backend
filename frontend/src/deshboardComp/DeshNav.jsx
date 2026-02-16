import React from 'react'

const DeshNav = ({setDeshboard}) => {
    const deshboardLinks = [ 'Orders', 'Products', 'Customers', 'Analytics', 'Settings'];
  return (
    <div className='dark-background light sticky top-0 w-70 h-screen'>
      {/* header  */}
      <div className='text-3xl font-bold w-full h-20 flex items-center justify-center border-b border-slate-600'>
        Administration
      </div>
      <div>
        {
            deshboardLinks && deshboardLinks.map((item, index)=>(
                <button onClick={()=>setDeshboard(item)} key={index} className='w-full flex items-center justify-center border-b border-slate-600 cursor-pointer text-2xl font-semibold py-2'>
                    {item}
                </button>
            ))
        }
      </div>
    </div>
  )
}

export default DeshNav
