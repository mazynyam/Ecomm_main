import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import auth from './../auth/auth-helper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-shop'
import {Link, Redirect} from 'react-router-dom'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: 'auto'
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle,
      fontSize: '1em'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px'
    }
  }))

export default function NewBusiness(){
    const classes = useStyles()
    const [values, setValues] = useState({
        currentStep:1,
        business_name:'',
        region_of_business:'',
        city_of_business:'',
        business_mobile:'',
        business_mobile_contact:'',
        country_of_business:'',
        business_email:'',
        is_business_registered:false,
        business_certificate:'',
        identity_card_front:'',
        identity_card_back:'',
        redirect: false,
        error: '',
        image:'',
        open:false
    })
    const jwt = auth.isAuthenticated();

    const handleChange = name => event => {
      const value = name === 'image'
        ? event.target.files[0]
        : event.target.value
      setValues({...values,  [name]: value })
    }
    const handleBusinessCert = name => e =>{
      const pic = name === 'business_certificate' ? e.target.files[0] : e.target.pic
      setValues({...values, [name]: pic})
    }
    const handleIdCardFront = name => e =>{
      const pic = name === 'identity_card_front' ? e.target.files[0] : e.target.pic
      setValues({...values, [name]: pic})
    }
    const handleIdCardBack = name => e =>{
      const pic = name === 'identity_card_back' ? e.target.files[0] : e.target.pic
      setValues({...values, [name]: pic})
    }

    const handleCheck = (event, checked) => {
        setValues({...values, 'is_business_registered': checked})
      }
      const logoUrl = values.id
          ? `/api/shops/logo/${values.id}?${new Date().getTime()}`
          : '/api/shops/defaultphoto'
    const clickSubmit = () => {
        let businessData  = new FormData()
        values.image && businessData.append('image', values.image)
        values.business_name && businessData.append('business_name', values.business_name)
        values.region_of_business && businessData.append('region_of_business', values.region_of_business)
        values.city_of_business && businessData.append('city_of_business', values.city_of_business)
        values.business_mobile && businessData.append('business_mobile', values.business_mobile)
        values.business_mobile_contact && businessData.append('business_mobile_contact', values.business_mobile_contact)
        values.country_of_business && businessData.append('country_of_business', values.country_of_business)
        values.business_email && businessData.append('business_email', values.business_email)
        values.is_business_registered && businessData.append('is_business_registered', values.is_business_registered)
        values.business_certificate && businessData.append('business_certificate', values.business_certificate)
        values.identity_card_front && businessData.append('identity_card_front', values.identity_card_front)
        values.identity_card_back && businessData.append('identity_card_back', values.identity_card_back)
        create({
           userId: jwt.user._id
        }, {
            t: jwt.token
        }, businessData).then((data) => {
            if(data){
                setValues({ ...values, error: data.error})
            }
            else{
                setValues({...values, error:'', redirect: true})
            }
        })
    }
 
   
    
  
    if(values.redirect){
        return <Redirect to={'/seller/shops'} /> 
    }
    return (
        <div>
        <Card className={classes.card}>
            <CardContent>
                <Typography type='headline' component='h2' className={classes.title}>New Shop Registration</Typography>
                <Avatar src={logoUrl} className={classes.bigAvatar}/><br/>
              <input accept="image/*" onChange={handleChange('image')} className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <Button variant="contained" color="default" component="span">
                  Upload Logo
                  <FileUpload/>
                </Button>
              </label> <span className={classes.filename}>{values.image ? values.image.name : ''}</span><br/>
              
                <TextField type="text" id="business_name" name="business_name" label='Business Name' className={classes.textField}
                            value={values.business_name}
                            onChange={handleChange('business_name')}
                             required />
                
               
                <TextField type="text" id="region_of_business" name="region_of_business" label='Region' className={classes.textField}
                            value={values.region_of_business}
                            onChange={handleChange('region_of_business')} required />
               
               
                    <TextField type="text" id="city_of_business" name="city_of_business" label='City' className={classes.textField}
                            value={values.city_of_business}
                            onChange={handleChange('city_of_business')} required />
                
                
                    <TextField type="text" id="business_mobile" name="business_mobile" label='Business Contact' className={classes.textField}
                            value={values.business_mobile}
                            onChange={handleChange('business_mobile')} required />
                
                
                    <TextField type="text" id="business_mobile_contact" name="business_mobile_contact" label='Business Alt Contact' className={classes.textField}
                            value={values.business_mobile_contact}
                            onChange={handleChange('business_mobile_contact')}  />
                
                
                    <TextField type="text" id="country_of_business" name="country_of_business" label='Country' className={classes.textField}
                            value={values.country_of_business}
                            onChange={handleChange('country_of_business')} required />
               
                
                    <TextField type="email" id="business_email" name="business_email" label='Business Email' className={classes.textField}
                            value={values.business_email}
                            onChange={handleChange('business_email')} required />
                            <br />
                <Typography>Is Business Registered?</Typography>
                <FormControlLabel
                    control={
                    <Switch classes={{
                                        checked: classes.checked,
                                        bar: classes.bar,
                                    }}
                            checked={values.is_business_registered}
                            onChange={handleCheck}
                    />}
                    label={values.is_business_registered ? 'Registered' : 'Not Registered'}
                />
                { values.is_business_registered === true && (
                    <div>
                        <input accept="image/*" onChange={handleBusinessCert('business_certificate')} className={classes.input} id="icon-button-file-one" type="file" />
                        <label htmlFor="icon-button-file-one">
                            <Button variant="contained" color="secondary" component="span">
                            Upload Business Certificate
                            <FileUpload/>
                            </Button>
                        </label> <span className={classes.filename}>{values.business_certificate ? values.business_certificate.name : ''}</span><br/>
                    </div>
                )
                }
                {
                    !values.is_business_registered && (
                        <div>
                            <input accept="image/*" onChange={handleIdCardFront('identity_card_front')} className={classes.input} id="icon-button-file-two" type="file" />
                            <label htmlFor="icon-button-file-two">
                                <Button variant="contained" color="secondary" component="span">
                                Upload an ID Card Front
                                <FileUpload/>
                                </Button>
                            </label> <span className={classes.filename}>{values.identity_card_front ? values.identity_card_front.name : ''}</span><br/>
                         
                         <input accept="image/*" onChange={handleIdCardBack('identity_card_back')} className={classes.input} id="icon-button-file-three" type="file" />
                              <label htmlFor="icon-button-file-three">
                                  <Button variant="contained" color="secondary" component="span">
                                  Upload an ID Card Back
                                  <FileUpload/>
                                  </Button>
                              </label> <span className={classes.filename}>{values.identity_card_back ? values.identity_card_back.name : ''}</span><br/>
  
                      </div>
                    )
                }
                
                 <br/> 
                 {
                    values.error && (<Typography component="p" color="error">
                    <Icon color="error" className={classes.error}>error</Icon>
                    {values.error}
                    </Typography>)
                }
               
            </CardContent>
            <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                    <Link to='/seller/shops' className={classes.submit}><Button variant="contained">Cancel</Button></Link>     
            </CardActions>

        </Card>
        <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Business Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/seller/shops">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Go to Dashboard
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
        </div>
        )

}