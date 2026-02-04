import React from 'react'
import Nav from './component/Nav'
import "swiper/css";
import MainBanner from './component/MainBanner';
import Headline from './component/Headline';
import SaleBoard from './component/SaleBoard';
import MainCatagory from './component/MainCatagory';

const App = () => {
  return (
    <div className='light-background dark'>
      <Nav/>
      <MainBanner/>
      <Headline/>
      <SaleBoard do={false} headline={"Flash sale"}/>
      <SaleBoard do={true} headline={"Best seller"}/>
      <MainCatagory/>
    </div>
  )
}

export default App
