import React from 'react'

const Award = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src="media\images\largestBroker.svg"/>
            </div>
            <div className='col-6 p-5 mt-4'>
                <h1>Largest stock brocker in India</h1>
                <p className='mt-3 mb-5 text-muted'>2+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:</p>
                <div className="row mb-3 text-muted">
                    <div className="col-6 ">
                        <ul>
                            <li>
                            <p>Futures and Options</p>
                            </li>
                            <li>
                            <p>Commodity derivatives</p>
                            </li>
                            <li>
                            <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                            <p>Stocks & IPOs</p>
                            </li>
                            <li>
                            <p>Direct mutual funds</p>
                            </li>
                            <li>
                            <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img style={{width:"70%"}} src="media\images\pressLogos.png"/>
            </div>
        </div>
        
    </div>
  )
}

export default Award;
