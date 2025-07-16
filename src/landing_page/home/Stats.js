import React from 'react'

const Stats = () => {
  return (
    <div className='container p-4 mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <h1 className='mb-5'>Trust with confidence</h1>
          <div className=''>
            <h3 className='fs-4'>Customer-first always</h3>
            <p className='text-muted mt-3' >That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div>
            <h3  className='fs-4 '>No spam or gimmicks</h3>
            <p className='text-muted mt-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          </div>
          <div>
            <h3  className='fs-4'>The Zerodha universe</h3>
            <p className='text-muted mt-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
          </div>
          <div>
            <h3  className='fs-4'>Do better with money</h3>
            <p className='text-muted mt-3'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className='col-6 p-5'>
          <img style={{width:"90%"}} src="media/images/ecosystem.png"/>
          <div className='d-flex justify-content-evenly'>
            <a href='' style={{textDecoration:"none"}}>Exprore our product <i class="fa-solid fa-arrow-right"></i></a>
            <a href=''style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;
