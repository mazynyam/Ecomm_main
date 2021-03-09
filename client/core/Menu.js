import React, { useState, useEffect} from 'react';
// import PropTypes from 'prop-types'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
// import logo from './../assets/images/kik.png';
import logo from './../assets/images/kik.png';
import loggo from './../assets/images/ekiri.jpg';
import {  list, listCategories } from './../product/api-product'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
   
  },
  brp: {
    height:"63px",
    marginBottom:"0px",
    backgroundColor:"#17293d",
    borderWidth:"7px"
   
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  textColor:{
    listStyle:'none',
    color:' #acd523',
    textDecoration:"none",
    '&:hover': {
       color: fade('#acd523', 0.8),
       textDecorationColor:"#acd523",
    
       },
       marginRight:"0px",
  },
  signColor:{
    color:' #acd523',
   '&:hover': {
       color: fade('#acd523', 0.8),
       },
  },
  title: {
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
     color:' #acd523',
  },
  searchIcon: {
    color:' #acd523',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  namesh:{
    textDecorationColor:"#acd523",
   '&:hover': {
        textDecorationColor:"#acd523",
         },
  },
  mysh:{
    textDecorationColor:"#acd523",
    '&:hover': {
      textDecorationColor:"#acd523",
       },

  }
}));

const  isActive = (history, path) =>{
    if(history.location.pathname.includes(path))
    return { color: '#acd523',
  textDecoration:"none"}
    else{
        return { color: '#acd523',
        textDecorationColor:"none"}
    }
}
const isPartActive = (history, path) => {
    if (history.location.pathname.includes(path))
      return {color: '#acd523',
      textDecoration:"none"}
    else
      return {color: '#acd523',
      textDecoration:"none"}
    
}
/**
 * @todo implement User role on the appbar
 */


const Header = withRouter(({history}) =>{
  
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) =>{
        setCategories(data)
    })
    return function cleanup() {
      abortController.abort()
    }
  }, [])
  

  const [values, setValues] = useState({
    category: '',
    search: '',
    results: [],
    searched: false
    })
    const handleChange = name => event => {
      setValues({
        ...values, [name]: event.target.value,
      })
    }
    const search = () => {
      if(values.search){
        list({
          search: values.search || undefined, category: values.category
        }).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            setValues({...values, results: data, searched:true})
          }
        })
      }
    }
    const enterKey = (event) => {
      if(event.keyCode === 13){
        event.preventDefault()
        search()
      }
    }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    // const handleProfileMenuOpen = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      > 
               {
                auth.isAuthenticated() && (<span>
                  {auth.isAuthenticated().user.seller && (
                  <Link to="/seller/shops" className={classes.mysh}><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
                  <MenuItem >
                  <Link className={classes.namesh} to={"/user/" + auth.isAuthenticated().user._id}>
                  <IconButton color="inherit" style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>
                    <Badge  color="secondary">
                    <AccountCircle />
                    </Badge>
                  </IconButton>
                  </Link>
                  <p>Profile</p>
                </MenuItem>
                  <MenuItem onClick={() => {
                      auth.clearJWT(() => history.push('/'))
                    }}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    
                  >
                  <ExitToAppIcon />
                  </IconButton>
                  <p>Sign out</p>
                </MenuItem>
                     {/* <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                      
                    </IconButton> */}
                </span>)
              }
        

        {
            !auth.isAuthenticated() && (<span>
              <Link to="/user/signup">
                <Button style={isActive(history, "/user/signup")}>Sign up
                </Button>
              </Link>
              <Link to="/auth/signin">
                <Button style={isActive(history, "/auth/signin")}>Sign In
                </Button>
              </Link>
              <Link to="/business/register/new">
                <Button style={isActive(history, "/business/register/new")}>Connect to Kiriikou
                </Button>
              </Link>
            </span>)
          }
          

      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.brp}>
          <Toolbar>
                        
          <Typography className={classes.title} variant="h6" noWrap>
              <Link to='/' className={classes.textColor} id="bestft">
              <img src={logo} alt='Logo' height='50' className={classes.kiimg} />
              <img src={loggo} alt='Logo' height='50' id="kimg" />
              
              </Link>
            </Typography>
            
            
            {/* <Typography className={classes.title} variant="h6" noWrap>
              <Link to='/' className={classes.textColor} id="bestft">
              <img src={logo} alt='Logo' height='50' className={classes.kiimg} />
                Kiriikou.com
              </Link>
            </Typography> */}
            
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {
            !auth.isAuthenticated() && (<span>
              <Link to="/user/signup" className={classes.signColor}>
                <Button style={isActive(history, "/user/signup")}>Sign up
                </Button>
              </Link>
              <Link to="/auth/signin" className={classes.signColor}>
                <Button style={isActive(history, "/auth/signin")}>Sign In
                </Button>
              </Link>
              
            </span>)
          }
          {
                auth.isAuthenticated() && (<span>
                  {auth.isAuthenticated().user.seller && (<Link to="/seller/shops" className={classes.mysh}><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
                  
                  <Link  className={classes.namesh} to={"/user/" + auth.isAuthenticated().user._id}>
                    <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>{auth.isAuthenticated().user.name}</Button>
                  </Link>
                    <Button color="inherit" onClick={() => {
                      auth.clearJWT(() => history.push('/'))
                    }}>Sign out</Button>
                </span>)
              }
         
             
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );

})

export default Header;
