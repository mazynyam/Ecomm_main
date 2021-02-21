import React from 'react'

// import { SpaOutlined } from '@material-ui/icons'
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { Grid, Typography } from '@material-ui/core'
import logoquote from './../assets/images/logoquote.jpg';



const useStyles = makeStyles(theme => ({
quote: {
 textDecorationColor:"#17293d",
    color:"#17293d",
    '&:hover': {
        backgroundColor:fade("#acd523",0.7),
        textDecorationColor:"#17293d",
        },
       
    backgroundColor:"#acd523",
    fontWeight:"bolder",
    fontSize:"17px",
    fontFamily:"Gill Sans"
    
  },
  quotebtn: {
    textDecorationColor:"#17293d",
    backgroundColor:"#acd523",
    '&:hover': {
        backgroundColor: fade('#acd523', 0.8),
        textDecorationColor:"#17293d",
        },
   
    height:"50px",
   
},
specservice: {
    fontSize:"15px",
   },

   quoteservice: {
  
 backgroundColor:"#17293d",
    '&:hover': {
        backgroundColor: "#17293d",
       },
   color:"#fff",
    height:"80px",
    margin:"auto",
     },
}))

function RequestForQuotation() {
    const classes = useStyles()
    return (
        <div  className="rfq-quotation" data-spm="rfq">
            <div className="rfq-content">
            <div className="title-info">
            <img src={logoquote} alt="Logo" width="205px" height="190px" id="logq"/>
           
                <h3 id="prq">PLACE A REQUEST</h3>
               
                {/* <span className='alert alert-sucess'>Special Service</span>  */}
                <Button className={classes.quoteservice} >
                <span className={classes.specservice}>Special Service</span> 
                            </Button>         
           
            <div className='rfq-banner'>
                <section className="cloud my-2 py-2">
                    <div className='container grids'>
                        <div className='text-center' > 
                        <Grid item  xs={12} sm={12} md={12} lg={12} xl={8}>
                            <Typography  component="h2">Can't find your preferred item?</Typography>
                            <Typography component="h4">Kiriikou will outsource and procure the items ourselves <br /> 
                            and ship to you wherever you are. <br />
                            Click the button next to get Started <i className='fa fa-arrow-right 8x'></i>
                            </Typography>
                            </Grid>
                        </div>
                        {/* <Button id="butcolor"><a  href='/place-request/get-started' >Request Quotation</a></Button> */}
                        <Button className={classes.quotebtn}>
                        <a href='/place-request/get-started'><span className={classes.quote}>Request Quotation</span></a>
                            </Button>
                    </div>
                </section>
            </div>
            </div>
            </div>
       </div>
    )
}

export default RequestForQuotation;
