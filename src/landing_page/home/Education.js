import React from 'react'

const Education = () => {
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media\images\education.svg'/>
        </div>  
        <div className='col-6 p-4 mt-5'>
          <h1 className='mb-4'>Free and open market education</h1>  
          <p className='text-muted mt-3 fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className='text-muted mt-3 fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' style={{textDecoration:"none"}}>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
        </div>  
      </div>      
    </div>
  )
}

export default Education
