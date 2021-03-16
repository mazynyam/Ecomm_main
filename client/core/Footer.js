import React from 'react';
import logo from './../assets/images/kik.png';
import {Link, withRouter} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
//  import Chat from './../components/Chat'

const useStyles = makeStyles((theme) => ({
hotext:{
        color:' #acd523',
        listStyle:'none',
        '&:hover': {
           color: fade('#acd523', 0.8),
           },
      },

}));
function Footer() {
    const classes = useStyles();
    return(
        // <>
        // <Chat />
        <div className="footer bg-dark py-5">
        <div className="footer-container grids grid-3">
            <div>
            <Link to='/'className={classes.hotext} id="textColor">
                <img src={logo} alt='Logo' height='50'  />
            </Link>
            <address>
                GM-083-9194. <br />
                No. 2 Information Center Road, <br />
                Adenta,  Accra - Ghana <br />
                <i className='fas fa-phone'> +233551111855</i>
            </address>
                <p>&copy; Copyright { new Date().getUTCFullYear() } </p>
            <h4>Kiriikou.com</h4>
            </div>
            <nav>
                <ul style={{listStyleType:'none', color:'#acd523'}}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="http://m.facebook.com/kiriikoudotcom" target='_blank'><i className="fa fa-facebook fa-2x"></i></a>
                <a href="http://instagram.com/kiriikoudotcom"  target='_blank'><i className="fa fa-instagram fa-2x"></i></a>
                <a href="http://twitter.com/KiriikouC?s=08" target='_blank'><i className="fa fa-twitter fa-2x"></i></a>
                <a href="http://t.me/kiriikou_dotcom" target='_blank'><i className="fa fa-telegram fa-2x"></i></a>
            </div>
            {/* <div className="button">
                <div className="myForm" >
                    <button className="floating-btn" id='myForm' onClick={()=>document.getElementById("myForm").style.display = "block"} >
                        <i className="fas fa-comments 4x"></i>
                    </button>
                </div>
            </div> */}
        </div>
    </div>


   
//  </>
            )
    }



export default Footer;