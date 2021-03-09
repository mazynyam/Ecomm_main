
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Icon from '@material-ui/core/Icon'
import {list} from './api-product.js'
import Products from './Products'
import { useHistory, useLocation} from 'react-router-dom';
import {
  CPagination
} from '@coreui/react'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
   
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
    
  
  },
  tileTitle: {
    verticalAlign: 'middle',
    lineHeight: 2.5,
    textAlign: 'center',
    fontSize: '1.35em',
     margin: '0 3px 0 5px',
    backgroundColor: '#17293d',
    
  },
  card: {
    margin: 'auto',
    marginTop: 20,
   
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    
    color:'#ACD523',
    
    fontSize: '2.0em',
    fontFamily:"Arial Black",
    fontWeight:"bolder",
   
    
  },
  now: {
    
    color:'#17293d',
    
    fontSize: '12px',
    fontFamily:"Arial",
    
    // marginTop: -19,
    // fontSize: 11,
  },
  icon: {
    verticalAlign: 'sub',
    color: '#ACD523',
    fontSize: '0.9em'
  },
  link: {
  
    cursor:'pointer',
    marginLeft:'0px',
    
  }
}))
export default function Categories(props){
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(props.categories[0])
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage) 
  const [skip, setSkip] = useState(5);

  const pageChange = newPage => {
    currentPage !==  setSkip(skip + newPage) 
  }
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list({
      category: props.categories[0]
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setProducts(data)
      }
    }) 
    currentPage !== page && setPage(currentPage)
    return function cleanup(){
      abortController.abort()
    }
  }, [currentPage, page])
 

  const listbyCategory = category => event => {
    setSelected(category)
    list({
      category: category
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setProducts(data)
      }
    })
  }

    return (
      <div>
        <Card className={classes.card}>
          <Typography type="title" className={classes.title}>
          Featured Products
          </Typography>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
              {props.categories.map((tile, i) => (
              <GridListTile key={i}  id="cattileTitle" style={{height:"50px", width:'276px',  backgroundColor: selected == tile? '#17293d':'#acd523',color: selected == tile? '#fff':'#17293d'}}>
                  <span className={classes.link} onClick={listbyCategory(tile)}> {tile} <Icon className={classes.icon}>{selected == tile && 'arrow_drop_down'}</Icon></span>
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Divider/>
          <Products products={products} searched={false}/>
        </Card>
        <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
      </div>
    )
}
Categories.propTypes = {
  categories: PropTypes.array.isRequired
}
