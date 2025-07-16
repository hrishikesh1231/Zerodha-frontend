import React from 'react'

const Hero = () => {
  return (
    <div style={{backgroundColor:"#387ed1"}} className='container-fluid '>
      <div className='row '>
        <div style={{color:"#ffff",padding:"3rem 10rem 0rem 10rem"}} className='d-flex justify-content-between '>
          <h5>Support portal</h5>
          <p style={{textDecoration:"underline"}}>Track ticket</p>
        </div>
      </div>
      <div style={{color:"#ffff",padding:"2rem 9rem"}} className='row'>
        <div className='col-7'>
          <h4 className='mb-5'>Search for an answer or browse help topics to create a ticket</h4>
          <input className='form-control mb-4' style={{width:"80%"}} placeholder='eg: How do i active F&Q'/>
          <a style={{textDecoration:"underline",fontSize:"1.1rem",marginRight:"1rem"}}>Track account opening</a>
          <a style={{textDecoration:"underline",fontSize:"1.1rem",marginRight:"1rem"}}>track segment Activation</a>
          <a style={{textDecoration:"underline",fontSize:"1.1rem",marginRight:"1rem"}}>Intraday margins</a>
          <a className='mb-3' style={{textDecoration:"underline",fontSize:"1.1rem",marginRight:"1rem"}}>kite user manual</a>
        </div>
        <div className='col-5'>
          <div className='row'>
              <h4>Featured</h4>
              <ul style={{paddingLeft:"2rem"}}>
                <li style={{listStyle:"number"}}>Quarterly Settlement of Funds - July 2025</li>
                <li style={{listStyle:"number"}}>Exclusion of F&O contracts on 8 securities from August 29, 2025</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
