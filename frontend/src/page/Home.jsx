import React from 'react'
import MainBanner from '../component/MainBanner'
import Headline from '../component/Headline'
import SaleBoard from '../component/SaleBoard'
import MainCatagory from '../component/MainCatagory'
import useProductStore from '../state/productZust'
const Home = () => {
  const {getProducts, allProducts} = useProductStore();
  React.useEffect(()=>{
    getProducts();
  },[])
  console.log(allProducts);
  return (
    <div>
      <MainBanner/>
      <Headline/>
      {/* <SaleBoard do={false} headline={"Flash sale"}/>
      <SaleBoard do={true} headline={"Best seller"}/> */}
      <SaleBoard data={allProducts} do={true} headline={"Shop saller"}/>
      <MainCatagory/>
    </div>
  )
}

export default Home
