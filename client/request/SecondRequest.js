import React, { Component } from 'react';
import FileUpload from '@material-ui/icons/AddPhotoAlternate';
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { Textarea } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { justifyContent } from '@material-ui/core';

import { flexWrap } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-evenly"

    },

    sellproduct: {
        fontSize: 70,
        
        marginLeft: 30,
        color: "#acd523",
        fontFamily: "Bitter",
        fontWeight: "bold"

    },
    

    textField: {
        marginLeft: theme.spacing(25),
        marginRight: theme.spacing(),
        width: 200,
       
        // // maxWidth: 600,
        //   margin: 'auto',
        textAlign: 'center',
       
        paddingBottom: theme.spacing(2)
    },
    textField2: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: 200,
      
        // // maxWidth: 600,
        //   margin: 'auto',
        textAlign: 'center',
        
        paddingBottom: theme.spacing(2)
    },
    buttonfield: {

        width: 150,
        height: 48,
        backgroundColor: "#acd523",
        '&:hover': {
            backgroundColor: fade('#acd523', 0.70),
            color: "#17293d"
        },
        margin: 'auto',

        textAlign: 'center',
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#17293d",
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
    },
    fieldbutt: {

        marginLeft: theme.spacing(15),


    },
    textField3: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: 200,
        // // maxWidth: 600,
        //   margin: 'auto',
        //  textAlign: 'center',

        
        paddingBottom: theme.spacing(2)
    },
    textField1: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        width: 200,
        // // maxWidth: 600,
        //   margin: 'auto',
        textAlign: 'center',
        
        paddingBottom: theme.spacing(2)
    },

    textarea: {
        marginLeft: theme.spacing(25),
        marginRight: theme.spacing(20),
        width: 200,
       


        textAlign: 'center',
        marginTop: theme.spacing(0),
        paddingBottom: theme.spacing(2),

    },
    boxfield: {

        marginBottom: 10,
        marginLeft: 150,
        marginRight: 200,
        borderColor: "#acd523",
       height:85,
        borderWidth:5
    },
    boxfield3: {
        // marginTop: 0,
        // marginBottom:70,
        margin:'auto',
        height:170
    },
    boxfield2: {

        marginBottom: 40,
        marginLeft: 150,
        marginRight: 200,
        borderColor: "#acd523",
        marginTop: 20,
        borderWidth:5
    },


}))
const SecondRequest = () => {

    const classes = useStyles();

    return (

        <>

            <Box borderBottom={1} className={classes.boxfield}>
                <Typography className={classes.sellproduct}>Sell</Typography>
            </Box>
            <div className={classes.boxfield3}>
            <form>
                <div className={classes.container}>
                    <div >
                        <TextField className={classes.textField} type="text" id="productName" name="productNam" label='Product Name(English)' required />

                        <TextField className={classes.textField} type="text" id="productlocalname" name="productlocalname" label='product name(local)' required />
                        <TextField
                            className={classes.textarea}
                            id="outlined-multiline-static"
                            label="Product Description *"
                            multiline
                            rows={9}
                            variant="outlined"
                        />
                    </div>

                    <div >


                        <TextField type="text" id="availableColors" name="availableColors" className={classes.textField1} label='Available colors' rows={3} required />

                        <TextField type="text" id="availableSizes" name="availableSizes" className={classes.textField1} label='Available sizes' rows={3} required />

                        <input className={classes.textField1} id="productimg" name="productimg" type="file" />
                        <label htmlFor="productimg" className={classes.textField1}  >
                            <Button variant="contained" color="#acd523" component="span">
                                Upload Product Images
                                <FileUpload />
                            </Button>
                        </label>
                        <TextField id="select" label="Category" select className={classes.textField1} required>
                        <MenuItem value="Others">Others</MenuItem>
                            <MenuItem value="Agriculture">Agriculture</MenuItem>
                            <MenuItem value="Natural Resources">Natural Resources</MenuItem>
                            <MenuItem value="Automobiles">Automobiles</MenuItem>
                            <MenuItem value="Beauty">Beauty</MenuItem>
                            <MenuItem value="Automobiles">Automobiles</MenuItem>

                            <MenuItem value="Electrical Appliances">Electrical Appliances</MenuItem>
                           
                            <MenuItem value="Food & Beverages">Food & Beverages</MenuItem>
                            <MenuItem value="Fashion & Clothing">Fashion & Clothing</MenuItem>
                            <MenuItem value="Home & Decor">Home & Decor</MenuItem>
                            
                            <MenuItem value="Phones & Computers">Phones & Computers</MenuItem>

                            


                        </TextField>

                    </div>

                    <div >

                        <TextField type="number" id="numberProduct" name="numberProduct" className={classes.textField3} label='Quantity Delivered' rows={3} required />

                        <TextField type="text" id="others" name="others" className={classes.textField3} label='Others' rows={3} required />

                        <input className={classes.textField3} id="videomp" name="videomp" type="file" />
                        <label htmlFor="videomp" className={classes.textField3}>
                            <Button variant="contained" color="#acd523" component="span">
                                Upload Product Videos
                                <FileUpload />
                            </Button>
                        </label>


                        <Button type="submit" color="#acd523" className={classes.buttonfield} component="span">
                            Submit Form.
                       </Button>

                    </div>
                </div>
            </form>

            
            <Box borderBottom={1} className={classes.boxfield2}>
                    </Box>
                    </div>
        </>

    );
}


export default SecondRequest;