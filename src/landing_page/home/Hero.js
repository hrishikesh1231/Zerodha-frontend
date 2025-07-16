import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className='row text-center'>
            <img src="media/images/homeHero.png" className='mb-5'/>
            <h1 className='mt-5 mb-3'>Invest in everything</h1>
            <p className='mb-4 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link to="/signup">        
            <button onClick={() => window.scrollTo(0, 0)} className='btn btn-primary m-auto p-2 fs-5' style={{width:"200px",height:"50px"}}>Sign up for free</button>
             </Link>
        </div>
    </div>
  )
}

export default Hero
