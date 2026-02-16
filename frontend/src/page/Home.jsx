import React from 'react'
import MainBanner from '../component/MainBanner'
import Headline from '../component/Headline'
import SaleBoard from '../component/SaleBoard'
import MainCatagory from '../component/MainCatagory'
const Home = () => {
  return (
    <div>
      <MainBanner/>
      <Headline/>
      <SaleBoard do={false} headline={"Flash sale"}/>
      <SaleBoard do={true} headline={"Best seller"}/>
      <MainCatagory/>
    </div>
  )
}

export default Home
