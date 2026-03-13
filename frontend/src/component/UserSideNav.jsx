import React from 'react'

const userSideNav = ({select, setSelect}) => {
    
    const userSideNav = [
        'My Orders',
        'Update Profile',
        'Change Password',
        'Logout'
    ]
  return (
    <div className='my-5 bg-white shadow-md rounded-xl p-2'>
      {/* btn load here  */}
        {userSideNav.map((item, index) => (
            <button key={index} onClick={(e)=>setSelect(index)} className={`w-full text-left px-4 py-2  hover:bg-slate-100 border-b border-slate-200 ${select === index ? " bg-slate-100": 'bg-white'}`}>{item}</button>
        ))}
    </div>
  )
}

export default userSideNav
