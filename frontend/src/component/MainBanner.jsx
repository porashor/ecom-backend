import React from 'react'
import BannerSlider from './BannerSlider'

const MainBanner = () => {
  return (
    <div>
        <div className='w-[70%] mx-auto grid grid-cols-[4fr_1fr] items-center gap-1'>
            <div className='relative w-full overflow-hidden'>
                <BannerSlider/>
            </div>
            <div className='w-full h-full mid-light-background'>
              No offter yet
            </div>
        </div>
    </div>
  )
}

export default MainBanner
