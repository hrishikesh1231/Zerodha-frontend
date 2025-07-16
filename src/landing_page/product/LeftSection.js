import React from 'react'

const LeftSection = ({name}) => {
  return (
    <div className='container'>
      <div className='row p-5'>
        
        <div className='col-5 p-5 pb-0 mt-5' style={{lineHeight:"2rem",fontSize:"1.019rem"}}>
          <h1 className='mb-5'>{name}</h1>
          <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
          <p style={{color:"#377dd0"}}>Learn more <i class="fa-solid fa-arrow-right"></i></p>
         
        </div>
        <div className='col-7 p-5 pt-0 pb-0'>
          <img style={{width:"90%"}} src='media\images\console.png'/>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
