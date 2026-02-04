import React from 'react'

const Headline = () => {
  return (
    <div className='w-[70%] mx-auto py-2'>
        <marquee behavior="scroll" direction="left" scrollamount="5">
            Hover to pause this message!
        </marquee>
    </div>
  )
}

export default Headline
