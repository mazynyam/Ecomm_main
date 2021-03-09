import crypto from 'crypto'
import User from '../models/userModel'
const sgMail = require('@sendgrid/mail')
import config from '../../config/config'
module.exports = (app)=>{
    app.post('/forgot-password', (req, res)=>{
        if(req.body.email ===''){
            res.status(400).send('email required');
          }
          User.findOne({
            where:{
              email:req.body.email
            },
          }).then((user)=>{
            if(user === null){
              console.error('email not found')
              res.status(403).send('email not found')
            }
            else{
              const token = crypto.randomBytes(20).toString('hex');
              user.update({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() = 360000
              })
            }
          })
          
          let msg = {
            to: `${user.email}`,
            from: `${config.email_address}`,
            subject: 'Kiriikou Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              'http://' + req.headers.host + '/reset/' + token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            html:`<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
              Please click on the following link, or paste this into your browser to complete the process:\n\n
              http://' ${req.headers.host}/reset/${ token }\n\n
              If you did not request this, please ignore this email and your password will remain unchanged.\n'</p>`
          };
          sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent')
            })
            .catch((error) => {
            console.error(error)
            })
    })
}
