import React from 'react'
import useUserFunc from '../state/userFunc'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignIn = ({setIsLogIn}) => {
  const {error1, loading, name,email,password,setName,setEmail,setPassword,register} = useUserFunc();
  return (
    <div className=' flex items-center justify-center  font-bold w-full fixed inset-0 z-100 scroll-auto backdrop-blur-sm bg-black/30'>
        {/* loger card */}
        <div className={`w-75 p-5 rounded-lg shadow-lg ${error1 ? 'bg-red-200' : 'bg-white'}`}>
          <div className=' border-b border-gray-500 pb-2 flex items-center justify-between'>
            <h1 className='text-2xl'>SignIn</h1>
          <button className='text-xl' onClick={()=>setIsLogIn(3)}>x</button>
          </div>
          <form className='py-5'>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full name' className='w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center' onClick={(e)=>register(e,name,email,password)} >{loading ? <span className='animate-spin'><AiOutlineLoading3Quarters/></span> : 'Register'}</button>
            <p>Already have an account? <button onClick={()=>setIsLogIn(0)} className='text-blue-500 cursor-pointer'>LogIn</button></p>
          </form>
        </div>
    </div>
  )
}

export default SignIn
