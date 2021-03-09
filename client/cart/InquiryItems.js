import React, {useState} from 'react'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import cart from './cart-helper.js'
import {Link} from 'react-router-dom'
import { fade} from '@material-ui/core/styles';
import Footer from '../core/Footer'
import Menu from '../core/Menu'




const useStyles = makeStyles(theme => ({
  card: {
    margin: '24px 0px',
    padding: '16px 40px 60px 40px',
    backgroundColor: '#80808017'
  },
  title: {
    margin: theme.spacing(2),
    // color: theme.palette.openTitle,
    fontSize: '1.2em',
    color: "black",
  },
  price: {
    color: theme.palette.text.secondary,
    display: 'inline',

    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 0,
    width: 50
  },
  productTitle: {
    fontSize: '1.15em',
    marginBottom: '5px'
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.67)',
    padding: '8px 10px 0',
    cursor: 'pointer',
    display: 'inline-block'
  },
  cart: {
    width: '100%',
    display: 'inline-flex'
  },
  details: {
    display: 'inline-block',
    width: "100%",
    padding: "4px"
  },
  content: {
    flex: '1 0 auto',
    padding: '16px 8px 0px'
  },
  cover: {
    width: 160,
    height: 125,
    margin: '8px'
  },
  itemTotal: {
    float: 'right',
    marginRight: '40px',
    fontSize: '1.5em',
    // color: 'rgb(72, 175, 148)'
    color:' #17293d',
    
    
  
  },
  checkout: {
    float: 'right',
    margin: '10px'
  },
  total: {
    fontSize: '1.06em',
    color: 'rgb(53, 97, 85)',
    marginRight: '15px',
    fontWeight: '600',
    verticalAlign: 'bottom'
  },
  gtotal:{
    color:"#ACD523",
    fontFamily:"Arial Black",
    fontSize:"1.06em"
  },
  continueBtn: {
    marginLeft: '10px',
    color:' #acd523',
    '&:hover': {
      color: fade('#acd523', 0.25),
      },
  
  },
  itemShop: {
    display: 'block',
    fontSize: '0.90em',
    color: '#78948f'
  },
  removeButton: {
    fontSize: '0.8em',
    color:'#ACD523'
  },
  continueChk:{
backgroundColor:"#acd523",
fontFamily:"Arial Black",
fontSize:"12px",
'&:hover': {
  color: fade('#fff', 0.8),
  backgroundColor: fade('#acd523', 0.6),
 },
 
  },
  sendBtn:{
    backgroundColor:"#acd523",
    fontFamily:"Arial Black",
    fontSize:"12px",
    color:'#17293d',
    '&:hover': {
      color: fade('#fff', 0.8),
      backgroundColor: fade('#acd523', 0.6),
     },
     
      },
  loginChk:{
    
    color:' #acd523',
    '&:hover': {
      color: fade('#acd523', 0.25),
      },
    },
     
  continueShp:{

color:"#acd523",
fontFamily:"Arial Black",
fontSize:"12px"
  },
  
    
}));

export default function InquiryItems (props) {
  const classes = useStyles()
  const [enquiryItems, setEnquiryItems] = useState(cart.getCart())

  const handleChange = index => event => {
    let updatedEnquiryItems = enquiryItems
    if(event.target.value == 0){
        updatedEnquiryItems[index].quantity = 1
    }else{
        updatedEnquiryItems[index].quantity = event.target.value
    }
    setEnquiryItems([...updatedEnquiryItems])
    cart.updateCart(index, event.target.value)
  }

  const getTotal = () => {
    return enquiryItems.reduce((a, b) => {
        return a + (b.quantity*b.product.price)
    }, 0)
  }

  const removeItem = index => event =>{
    let updatedEnquiryItems = cart.removeItem(index)
    if(updatedEnquiryItems.length == 0){
      props.setEnquiryCheckout(false)
    }
    setEnquiryItems(updatedEnquiryItems)
  }

  const openEnquiryCheckout = () => {
    props.setEnquiryCheckout(true)
  }

    return (
    <>
    <Menu />
    <Card className={classes.card}>
      <Typography type="title" className={classes.title}>
        Make Inquiry
      </Typography>
      {enquiryItems.length>0 ? (<span>
          {enquiryItems.map((item, i) => {
            return <span key={i}><Card className={classes.cart}>
              <CardMedia
                className={classes.cover}
                image={'/api/product/image/'+item.product._id}
                title={item.product.name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Link to={'/product/'+item.product._id}><Typography type="title" component="h3" className={classes.productTitle} color="primary">{item.product.name}</Typography></Link>
                  <div>
                    <Typography type="subheading" component="h3" className={classes.price} color="primary">$ {item.product.price}</Typography>
                    <span className={classes.itemTotal}>${item.product.price * item.quantity}</span>
                    <span className={classes.itemShop}>Shop: {item.product.shop.business_name}</span>
                  </div>
                </CardContent>
                <div className={classes.subheading}>
                  Quantity: <TextField
                              value={item.quantity}
                              onChange={handleChange(i)}
                              type="number"
                              inputProps={{
                                  min:1
                              }}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              margin="normal"/>
                            <Button className={classes.removeButton} color="primary" onClick={removeItem(i)}>x Remove</Button>
                </div>
              </div>
            </Card>
            <Divider/>
          </span>})
        }
        <div className={classes.checkout}>
          <span className={classes.total}>Total: <span className={classes.gtotal}>${getTotal()}</span></span>
          {!props.enquiryCheckout && (auth.isAuthenticated()?
            <Button  className={classes.sendBtn} variant="contained" onClick={openEnquiryCheckout}>Send Inquiry Now</Button>
            :
            <Link to="/auth/signin" className={classes.loginChk}>
              <Button className={classes.continueChk}color="primary" variant="contained"><i className='fa fa-sign-in'></i>Sign in to send inquiry</Button>
            </Link>)}
          <Link to='/' className={classes.continueBtn}>
            <Button className={classes.continueShp} variant="contained">Continue Shopping</Button>
          </Link>
        </div>
      </span>) :
        <div>
        
            <Typography variant="subtitle1" component="h3" color="primary">No items inquired </Typography>
            <Link to='/' className={classes.continueBtn}>
                <Button className={classes.continueShp} variant="contained">Continue Shopping</Button>
            </Link>
         
        </div>
    }
    </Card>
    <Footer />
    </>
    )
}

InquiryItems.propTypes = {
  enquiryCheckout: PropTypes.bool.isRequired,
  setEnquiryCheckout: PropTypes.func.isRequired
}
