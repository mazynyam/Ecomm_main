import React from 'react'
import {  Typography } from '@material-ui/core'

function RequestForQuotation() {
    return (
        <div  className="rfq-quotation" data-spm="rfq">
            <div className="rfq-content">
            <div className="title-info">
                <h2>PLACE A REQUEST</h2>
                <span className='alert alert-sucess'>Special Service</span>          
            
            <div className='rfq-banner'>
                <section className="cloud my-2 py-2">
                    <div className='container grids'>
                        <div className='text-center' > 
                            <Typography  component="h2">Can't find your preferred item?</Typography>
                            <Typography component="h4">Kiriikou will outsource and procure the items ourselves <br /> 
                            and ship to you wherever you are. <br />
                            Click the button next to get Started <i className='fa fa-arrow-right 8x'></i>
                            </Typography>
                        </div>
                    <a  href='/place-request/get-started'  className='btn btn-dark'>Request Quotation</a>
                    </div>
                </section>
            </div>
            </div>
            </div>
        </div>
    )
}

export default RequestForQuotation
