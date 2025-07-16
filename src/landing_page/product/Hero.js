import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
      <div className='row text-center p-5'>
        <h1 style={{fontSize:"3rem",opacity:"0.9"}} className=' mb-3'>Zerodha Products</h1>
        <p className='text-muted fs-5'>Sleek, modern, and intuitive trading platforms</p>
        <p style={{fontSize:"1rem"}} className='text-muted'>Check out our<a style={{textDecoration:"none",color:"#377dd0"}}> investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  )
}

export default Hero
