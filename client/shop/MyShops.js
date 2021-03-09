import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import {listByOwner} from './api-shop.js'
import {Redirect, Link} from 'react-router-dom'
import DeleteShop from './DeleteShop'
import { fade} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px` ,
    color: "#ACD523",
    fontSize: '1.2em',
    fontFamily:"Arial Black"
  },
  addButton:{
    float:'right'
  },
  leftIcon: {
    marginRight: "8px"
  },
  newSell:{
    backgroundColor:'#17293d',
    '&:hover': {
      backgroundColor: fade('#17293d',1.0),
    },
    color:"white"
     },

       linkSell:{
        backgroundColor:'#17293d',
      
        textDecorationColor:"white",
      '&:hover': {
           backgroundColor: fade('#17293d'),
           textDecorationColor:"white",
           
           },
          },
           submitview: {
            
         textDecorationColor:"white",
          '&:hover': {
               textDecorationColor:"#17293d",
               },
          },

  
}))

export default function MyShops(){
  const classes = useStyles()
  const [shops, setShops] = useState([])
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listByOwner({
      userId: jwt.user._id
    }, {t: jwt.token}, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true)
      } else {
        setShops(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  const removeShop = (shop) => {
    const updatedShops = [...shops]
    const index = updatedShops.indexOf(shop)
    updatedShops.splice(index, 1)
    setShops(updatedShops)
  }

    if (redirectToSignin) {
      return <Redirect to='/auth/signin'/>
    }
    return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          My Shops
          <span className={classes.addButton}>
            <Link to="/business/register/new" className={classes.linkSell}>
              <Button className={classes.newSell} variant="contained">
                <Icon className={classes.leftIcon}>add_box</Icon>  New Shop
              </Button>
            </Link>
          </span>
        </Typography>
        <List dense>
        {shops.map((shop, i) => {
            return   <span key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                </ListItemAvatar>
                <ListItemText primary={shop.business_name} secondary={shop.description}/>
                { auth.isAuthenticated().user && auth.isAuthenticated().user._id == shop.owner._id &&
                  (<ListItemSecondaryAction>
                    <Link to={"/seller/orders/" + shop.business_name+ '/'+shop._id} className={classes.submitview}>
                      <Button aria-label="Orders" className={classes.submitview}>
                        View Orders
                      </Button>
                    </Link>
                    <Link to={"/seller/shop/edit/" + shop._id}>
                      <IconButton aria-label="Edit" color="primary">
                        <Edit/>
                      </IconButton>
                    </Link>
                    <DeleteShop shop={shop} onRemove={removeShop}/>
                  </ListItemSecondaryAction>)
                }
              </ListItem>
              <Divider/>
            </span>})}
        </List>
      </Paper>
    </div>)
}