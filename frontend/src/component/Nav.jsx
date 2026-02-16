import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import navData from '../static data/nav.js';
import { Swiper, SwiperSlide } from "swiper/react";



const Nav = () => {

    const upperNavLinks = [
        {
            name: 'Track Order',
            url: 'track'
        },
        {
            name: "Bacame a Seller",
            url: 'seller'
        },
        {
            name: "Login",
            url: 'login'
        },
        {
            name: "Register",
            url: 'register'
        },
        {
            name: "Help & Support",
            url: 'help'
        }
    ];

  return (
    <div className='lighter-dark-background light text-xl sticky top-0 z-100'>
        {/* upper nav */}
        <div className='dark-background light text-sm flex justify-end py-2 border-b border-gray-600'>
            <ul className='flex gap-5'>
                {
                    upperNavLinks.map((link, index) => (
                        <li key={index}>
                            <a className='hover:opacity-80 active:opacity-80' href={`/${link.url}`}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        {/* main nav  */}
        <div className='dark-background'>
            <div className='w-[70%] mx-auto py-2 grid grid-cols-[1fr_5fr_1fr] items-center justify-center gap-5'>
                {/* logo */}
                <div>
                    <a href="/" className='text-3xl font-semibold'>
                        LOGO
                    </a>
                </div>
                {/* search */}
                <div className='flex items-center justify-center'>
                    <input type="text" className='light-background dark w-full py-1 px-3 outline-0 ' placeholder='Search here'/>
                    <button className='light  py-2 px-3 text-xl lighter-dark-background font-bold'><CiSearch/></button>
                </div>
                {/* cart */}
                <div className='flex items-center justify-center gap-2 text-3xl'><LuShoppingCart/></div>
            </div>
        </div>
        {/* navigation area  */}
        <div>
            <ul className='w-[70%] mx-auto py-2 text-sm font-semibold flex gap-5 overflow-x-auto'>
                <Swiper spaceBetween={2} slidesPerView={12}>
                {
                    navData.map((link, index) => (
                        <SwiperSlide key={index}>
                            <a className='hover:opacity-70 active:opacity-80' href={link.url}>{link.name}</a>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </ul>
        </div>
    </div>
  )
}

export default Nav


