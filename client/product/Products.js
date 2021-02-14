import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
// import AddToCart from './../cart/AddToCart'
import AddToInquiry from './../cart/AddToInquiry'

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'left',
    padding: '0 8px'
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    width: '100%',
  
  },
  
  image: {
    height: '80%',
    
  },
  
}))

function Products(props){
  const classes = useStyles()
  const getGridListCols = () => {
   if (isWidthUp('lg', props.width)) {
      return 4;
    }
    if (isWidthUp('md', props.width)) {
      return 3;
    }
    return 2;
    
  }
    return (
      <div className={classes.root}>
      {props.products.length > 0 ?
        (<div className={classes.container}>
          <GridList cellHeight={200} className={classes.gridList} cols={getGridListCols()}>
          {props.products.map((product, i) => (
            <GridListTile key={i} id="imtile">
              <Link to={"/product/"+product._id}><img className={classes.image} src={'/api/product/image/'+product._id} alt={product.name} /></Link>
              <GridListTileBar id="mytilebar"
                title={<Link to={"/product/"+product._id} id="tileTitle">{product.name}</Link>}
                subtitle={<span id="priceTitle">$ {product.price}</span>}
                actionIcon={<span id="inqpr">{
                  <AddToInquiry item= {product} />}</span>
                }
              />
            </GridListTile>
          ))}
        </GridList></div>) : props.searched && (<Typography variant="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
      </div>)
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}
export default withWidth()(Products);
