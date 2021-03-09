import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import InquiryItems from './InquiryItems'
import EnquiryCheckout from './EnquiryCheckout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  }
}))

export default function Inquiry () {
  const classes = useStyles()
  const [enquiryCheckout, setEnquiryCheckout] = useState(false)

  const showenquiryCheckout = val => {
    setEnquiryCheckout(val)
  }

    return (<div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <InquiryItems enquiryCheckout={enquiryCheckout}
                     setEnquiryCheckout={showenquiryCheckout}/>
        </Grid>
        {enquiryCheckout &&
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <EnquiryCheckout/>
            
          </Grid>}
        </Grid>
      </div>)
}
