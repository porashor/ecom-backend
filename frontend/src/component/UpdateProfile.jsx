import React from 'react'
import useUserFunc from '../state/userFunc';
const UpdateProfile = () => {
    const {phone, address, image, setPhone, setAddress, setImage, updateUser, loading} = useUserFunc();
  return (
    <div>
        <h1 className='text-xl font-semibold'>Update your information.</h1>
        <form onSubmit={(e)=>updateUser(e, phone, address, image)} className='py-2 px-5 flex flex-col gap-4'>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Enter phone' className='w-full py-2 focus:ring-2 rounded-md outline-0 ring-cyan-400'/>
            <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='Address' className='w-full py-2 focus:ring-2 rounded-md outline-0 ring-cyan-400'/>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder='Address' className='w-full py-2 focus:ring-2 rounded-md outline-0 ring-cyan-400'/>
            <button type='submit' className='px-4 py-2 bg-cyan-500 text-white rounded-md mt-2'>
                {loading ? 'Updating...' : 'Update'}
            </button>
        </form>
    </div>
  )
}

export default UpdateProfile
