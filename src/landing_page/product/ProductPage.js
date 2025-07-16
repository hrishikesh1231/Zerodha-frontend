import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <div>
        <Hero/>
        <RightSection/>
        <LeftSection name="Console"/> 
        {/* props */}
        <Universe/>
    </div>
  )
}

export default ProductPage
