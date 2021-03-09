import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'

export default class ForgotPassword extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            showError:false,
            messageFromServer:''
        };
    }
    handleChange = name => event =>{
        this.setState({
            [name]: event.target.value,
        })
    };
    
     sendEmail =async( e) =>{
        e.preventDefault()
        if(this.state.email ===''){
            this.setState({
                showError:false,
                messageFromServer:''
            })
        }
        else{
           await fetch('/forgot-password',{ email: this.state.email})
          .then(response =>{
              console.log(response.data)
              if(response.data === 'email does not exit'){
                  this.setState({ showError: true,messageFromServer:''})
              } 
              else if(response.data === 'recovery email sent'){
                this.setState({ showError: false,messageFromServer:'recovery email sent'})
              }
          }  
          ).catch(err => {
              console.log(err.data)
          })
        }
    }
    render() {
        const { email, messageFromServer, showNullError, showError} =this.state;

        return (
            <div>
                <form onSubmit={this.sendEmail}>
                    <TextField
                     style={inputStyle}
                     id='email'
                     value={email} 
                     onChange={this.handleChange('email')}
                     placeholder='Email Address' />

                     <Button>Reset Password</Button>
                </form>
                {showNullError && (
                    <div>
                        <p>The email address cannot be null</p>
                    </div>
                )}
                {showError && (
                    <div>
                        <p>That email address isn't recognized. Please register a new account</p>
                    </div>
                )}
                {messageFromServer === 'recovery email sent' && (
                    <div>
                        <h3>Password Reset Email Successfully Sent!</h3>
                    </div>
                )}
                <Button>Home</Button>
            </div>
        );
    }
}
