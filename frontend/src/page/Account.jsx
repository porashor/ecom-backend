import React from 'react'
import user from "../../public/user.png"
import UserSideNav from '../component/userSideNav'
import UpdateProfile from '../component/UpdateProfile'
import useUserFunc from '../state/userFunc'
const Account = () => {
    const [select, setSelect] = React.useState(0);
    const {getUserInfo, accounted, logOut} = useUserFunc();
    React.useEffect(()=>{
        getUserInfo();
    },[])
    console.log(accounted);
  return (
    <div className='w-[80%] mx-auto grid grid-cols-[1fr_3fr_1fr] gap-4'>
      {/* account load here  */}
         <div className='bg-white rounded-lg p-4 my-5 shadow-md'>
            <div className='w-full flex items-center justify-center '>
                <img src={accounted.image ? accounted.image : user} alt="asdf" className='w-36 py-2 rounded-full'/>
            </div>
            <p className='text-gray-600 mb-2'>Name: {accounted?.username}</p>
            <p className='text-gray-600 mb-2'>Email: {accounted?.email}</p>
            <p className='text-gray-600 mb-2'>Phone: {accounted?.phone}</p>
            <p className='text-gray-600 mb-2'>Address: {accounted?.address}</p>
            <p className='text-gray-600 mb-2'>Total spand: {accounted?.total_spent}</p>
            <p className='text-gray-600 mb-2'>Payment Method: {accounted.payment ? "yes" : "no" }</p>
            <button onClick={logOut} className='bg-red-500 text-center w-full text-white rounded py-1 font-semibold cursor-pointer'>Log Out</button>
         </div>
         <div className='my-5 bg-white p-4 rounded-xl shadow-md'>
            {select === 0 && <div>orders</div>}
            {select === 1 && <UpdateProfile/>}
            {select === 2 && <div>change</div>}
            {select === 3 && <div>logout</div>}
         </div>
        <UserSideNav select={select} setSelect={setSelect}/>
    </div>
  )
}

export default Account
