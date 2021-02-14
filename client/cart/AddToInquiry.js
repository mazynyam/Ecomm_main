import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DisabledCartIcon from '@material-ui/icons/RemoveShoppingCart'
import cart from './cart-helper.js'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  iconButton: {
    width: '28px',
    height: '28px',
    color:'#ACD523'
  },
// inquire: {
// color:'#ACD523',
//     display:"block",
//  },
  disabledIconButton: {
    color: '#7f7563',
    width: '28px',
    height: '28px'
  }
}))

export default function AddToCart(props) {
  const classes = useStyles()
  const [redirect, setRedirect] = useState(false)

//   const addToCart = () => {
//     cart.addItem(props.item, () => {
//       setRedirect({redirect:true})
//     })
//   }
  const makeInquiry = () =>{
    cart.addItem(props.item, ()=>{
      setRedirect ({redirect: true})
    })
  }
    if (redirect) {
      return (<Redirect to={'/inquiry'}/>)
    }
    return (<span>
      {props.item.quantity >= 0 ?
        <IconButton id="inquire"  onClick={makeInquiry}>
         
          <Typography id="myinquire"> Contact Supplier</Typography>
         </IconButton> :
         <IconButton disabled={true} color="secondary" dense="dense">
           <DisabledCartIcon className={props.cartStyle || classes.disabledIconButton}/>
        </IconButton>} 
      
      </span>)
}

AddToCart.propTypes = {
  item: PropTypes.object.isRequired,
  cartStyle: PropTypes.string
}