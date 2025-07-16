import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
      <div className='row p-5 text-center'>
        <h1 style={{fontSize:"3rem"}}>charges</h1>
        <p className='fs-4 text-muted'>List of all chargrs and taxes</p>
      </div>
      <div className='row p-5'>
          <div className='text-center col-4'>
            <img style={{width:"16rem"}}src='media\images\pricing0.svg'/>
            <h3>Free equity delivery</h3>
            <p className='fs-6 text-muted' >All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='text-center col-4'>
            <img style={{width:"16rem"}} src='media\images\intradayTrades.svg'/>
            <h3>Intraday and F&O trades</h3>
            <p className='fs-6 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='text-center col-4'>
            <img style={{width:"16rem"}}src='media\images\pricing0.svg'/>
            <h3>Free direct MF</h3>
            <p className='fs-6 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
      </div>
    </div>
  )
}

export default Hero
