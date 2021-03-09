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
        <Grid item xs={6} sm={6}>
          <InquiryItems enquiryCheckout={enquiryCheckout}
                     setEnquiryCheckout={showenquiryCheckout}/>
        </Grid>
        {enquiryCheckout &&
          <Grid item xs={6} sm={6}>
              <EnquiryCheckout/>
            
          </Grid>}
        </Grid>
      </div>)
}
