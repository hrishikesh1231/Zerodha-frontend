import React from 'react'


const CreateTicket = () => {
  return (
    <div className='container p-5'>
      <h4 className='text-muted '>To create a ticket select a relevant topic</h4>
      <div className='row mt-5 text-muted'>
        <div className='col-4 '>
          <h5 style={{color:"black"}}>Account Opening</h5>
          <ul style={{color:"#377dd0"}}>
            <li>Residental individual</li>
            <li>Minor</li>
            <li>Non residental india</li>
            <li>Company, Partnership, HUF and LLP</li>
            <li>Glossary</li>
          </ul>
        </div>
        <div className='col-4'>
          <h5 style={{color:"black"}}>Your Zerodha Account</h5>
          <ul style={{color:"#377dd0"}}>
            <li>Your Profile</li>
            <li>Account modification</li>
            <li>Client Master Report (CMR) and <br/>Depository Participant (DP)</li>
            <li>Nomination</li>
            <li>Transfer and conversion of securities</li>
          </ul>
        </div>
        <div className='col-4'>
          <h5 style={{color:"black"}}>Kite</h5>
          <ul style={{color:"#377dd0"}} >
            <li>IPO</li>
            <li>Trading FAQs</li>
            <li>Margin Trading Facility (MTF) and Margins</li>
            <li>Charts and orders</li>
            <li>Alerts and Nudges</li> 
            <li>General</li> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
