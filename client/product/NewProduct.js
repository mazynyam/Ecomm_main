import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import auth from './../auth/auth-helper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-product.js'
import {Link, Redirect} from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import { fade} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  menu: {
    width: 200,
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: "#acd523",
    fontFamily:"Arial Black",
    fontSize: '1.2em'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
 
  submitcancl: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
  
    
    textDecorationColor:"white",
  '&:hover': {
       textDecorationColor:"#17293d",
       
       },
  },
  submitme:{
    margin: 'auto',
    marginBottom: theme.spacing(2),
    backgroundColor:'#17293d',
    '&:hover': {
      backgroundColor: fade('#17293d',1.0),
    },
    color:"white"
     },
  
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  },
  upvideo:{
    backgroundColor:'#acd523'
  }

}))

export default function NewProduct({match}) {
  const classes = useStyles()
  const [values, setValues] = useState({
      name: '',
      description: '',
      image: '',
      video:'',
      category: '',
      quantity: '',
      price: '',
      sku:'',
      redirect: false,
      error: '',
  })
  const jwt = auth.isAuthenticated()
  const handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    setValues({...values,  [name]: value })
  }
  const clickSubmit = () => {
    let productData = new FormData()
    values.name && productData.append('name', values.name)
    values.description && productData.append('description', values.description)
    values.image && productData.append('image', values.image)
    values.video && productData.append('video', values.video)
    values.category && productData.append('category', values.category)
    values.quantity && productData.append('quantity', values.quantity)
    values.price && productData.append('price', values.price)
    values.sku && productData.append('sku', values.sku)

    create({
      shopId: match.params.shopId
    }, {
      t: jwt.token
    }, productData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error: '', redirect: true})
      }
    })
  }

    if (values.redirect) {
      return (<Redirect to={'/seller/shop/edit/'+match.params.shopId}/>)
    }
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            New Product
          </Typography><br/>
          <input accept="image/*" onChange={handleChange('image')} className={classes.input} id="icon-button-file" type="file"/>
          <label htmlFor="icon-button-file">
            <Button variant="contained" className={classes.upvideo} component="span">
              Upload Image or Video
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}>{values.image || values.video ? values.image.name || values.video.name : ''}</span><br/>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="2"
            value={values.description}
            onChange={handleChange('description')}
            className={classes.textField}
            margin="normal"
          /><br/>
          <TextField
              id="category"
              select
              label="Select category"
              className={classes.textField}
              value={values.category}
              onChange={handleChange('category')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal">
              <MenuItem value={'Agriculture'}>
                Agriculture
              </MenuItem>
              <MenuItem value={'Food & Beverages'}>
                Food & Beverages
              </MenuItem>
              <MenuItem  value={'Art & Craft'}>
                Art & Craft
              </MenuItem>
              <MenuItem value={' Beauty'}>
                Beauty
              </MenuItem>
              <MenuItem value={'Home & Decor'}>
                Home & Decor
              </MenuItem>
              <MenuItem value={'Electrical Appliances'}>
                Electrical Appliances
              </MenuItem>
              <MenuItem value={'Automobiles'}>
                Automobiles
              </MenuItem>
              <MenuItem value={'Phones & Computers'}>
                Phones & Computers
              </MenuItem>
              <MenuItem value={'Fashion & Clothing'}>
                Fashion & Clothing
              </MenuItem>
              <MenuItem value={'Natural Resources'}>
               Natural Resources
              </MenuItem>
             
        </TextField>
          {/* <TextField id="category" label="Category" className={classes.textField} value={values.category} onChange={handleChange('category')} margin="normal"/><br/> */}
          
          <TextField id="quantity" label="Quantity" className={classes.textField} value={values.quantity} onChange={handleChange('quantity')} type="number" margin="normal"/><br/>
          <TextField id="price" label="Price" className={classes.textField} value={values.price} onChange={handleChange('price')} type="number" margin="normal"/><br/>
          <TextField id="sku" label="Sku" className={classes.textField} value={values.sku} onChange={handleChange('sku')} type="text" margin="normal"/><br/>
          {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submitme}>Submit</Button>
          <Link to={'/seller/shop/edit/'+match.params.shopId} className={classes.submitcancl}><Button variant="contained">Cancel</Button></Link>
        </CardActions>
      </Card>
    </div>)
}
