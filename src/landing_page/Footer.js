import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5' style={{backgroundColor:"#fbfbfb"}}>
      <hr/>
      <div className='d-flex justify-content-evenly p-4 mb-3'>
        <div className='col-2'>
          <img className='mb-4' style={{width:"50%"}} src='media\images\logo.svg'/>
          <p style={{fontSize:"15px"}} className='text-muted '>© 2010 - 2025, Zerodha Broking Ltd.<br/>All rights reserved.</p>
        </div>
        <div className='lists'>
          <h3>Account</h3>
          <ul className='p-0 text-muted' style={{listStyle:"none"}}>
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerilization</li>
            <li>Funt transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Support</h3>
          <ul className='p-0 text-muted' style={{listStyle:"none"}}>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint</li>
            <li>Status of your compliant</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Company</h3>
          <ul className='p-0 text-muted' style={{listStyle:"none"}}>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerotha Cares</li>
            <li>Zerotha.tech</li>
            <li>Open source</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Quick links</h3>
          <ul className='p-0 text-muted' style={{listStyle:"none"}}>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculator</li>
            <li>Market</li>
            <li>Sectors</li>
          </ul>
        </div>
      </div>
      <p className=' text-muted mb-3' style={{fontSize:"11px",lineHeight:"25px",paddingLeft:"8rem",paddingRight:"8rem"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

<br/>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br/>

Smart Online Dispute Resolution | Grievances Redressal Mechanism <br/>

Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br/>

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br/>

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
<div className='d-flex justify-content-center mb-3 text-muted'>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>NSE</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>MCX</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}} >Term & conditions</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>Policies & procedures</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}} >Privacy policy</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>Disclosure</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>For iventors attension</a>
    <a className='items text-body-secondary' style={{textDecoration:"none",marginRight:"2rem"}}>Invester character</a>
</div>
    </div>
  )
}

export default Footer;
