import React from 'react'


const RightSection = () => {
  return (
    <div className='container border-top'>
      <div className='row p-5'>
        <div className='col-7 p-5 pb-0'>
          <img src='media\images\kite.png'/>
        </div>
        <div className='col-5 p-5 pb-0' style={{lineHeight:"2rem",fontSize:"1.019rem"}}>
          <h1 className='mb-5'>Kite</h1>
          <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite</p>
          <p>experience seamlessly on your Android and iOS devices.</p>
          <div className='row'>
            <div className='col-6'>
              <p style={{color:"#377dd0"}}>Try demo  <i class="fa-solid fa-arrow-right"></i></p>
              <img src='media\images\googlePlayBadge.svg'/>

            </div>
            <div className='col-6'>
              <p style={{color:"#377dd0"}}>Learn more  <i class="fa-solid fa-arrow-right"></i></p>
              <img src='media\images\appstoreBadge.svg'/>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default RightSection
