import React from 'react'

const Team = () => {
  return (
    <div className='container p-5'>
      <div className='row border-top p-5 text-muted'>
        <div className='col-6 p-5'style={{lineHeight:"2rem",fontSize:"1.019rem"}}>
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className='col-6 p-5'style={{lineHeight:"2rem",fontSize:"1.019rem"}}>
          <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
          <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
        </div>
      </div>
      <div className='row p-5 pt-0 pb-0'>
        <div className='col-6 p-5 mt-4 text-center text-muted'>
          <img style={{borderRadius:"50%",width:"70%"}} src='media\images\nithinKamath.jpg'/>
          <p className='text-center mt-2 fs-4'>Nitin Kumar</p>
          <p>Founder,CEO</p>
        </div>
        <div className='col-6 p-5' style={{lineHeight:"2rem",fontSize:"1.019rem"}}>
          <h2 className='mb-5'>People</h2>
          <div className='text-muted'>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href='https://www.google.com' style={{textDecoration:"none",color:"#377dd0"}}> Homepage</a > / <a style={{textDecoration:"none",color:"#377dd0"}}>TradingQnA </a> / <a style={{textDecoration:"none",color:"#377dd0"}}>Twitter </a></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
