import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function VerifyEmail() {
    return (
        <div>
            <Typography>
                Thank you for verifying your account!
            </Typography>
           <Button>
            <Link to='/auth/signin'>Click here to Sign In</Link>
           </Button> 
        </div>
    )
}
