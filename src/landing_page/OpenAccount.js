import React from 'react'

import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className='container text-center'>
      <div className='row'>
            <h1 className='mt-5 mb-3 fs-2'>Open a Zerodha account</h1>
            {/* <h1 className='mt-5 mb-3 fs-2'></h1> */}
            <p className='mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/signup"> 
            <button  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary m-auto p-2 fs-5' style={{width:"200px",height:"50px"}}>Sign up for free</button>
            </Link>
      </div>
    </div>
  )
}

export default OpenAccount
