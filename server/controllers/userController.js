import User from '../models/userModel'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'
import request from 'request'
import config from '../../config/config'
import stripe from 'stripe'
import sgmail from '@sendgrid/mail'
import crypto from 'crypto'

import {signin} from './../../client/auth/api-auth'

const sgMail = require('@sendgrid/mail')

const myStripe = stripe(config.stripe_test_secret_key)
sgmail.setApiKey(config.sendgrid_api_key)
const create = async (req, res) => {
  const user = new User(req.body)
    try {
      await user.save()
      return res.status(200).json({
        message: "Successfully signed up!"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}
const sendEmail = async(req, res, next)=>{
  const msg = {
    from:`${config.email_address}`,
    to:user.email,
    subject:'Kiriikou - Verify your email',
    text:`Thank you for registering with us.
    Please click on the link to verify your account.
    http://${req.headers.host}/verify-email?${token.emailToken}`,
    html:`
    <h1>Hello ${user.name}</h1>
    <p>
    Thank you for registering with us.
    Please click on the link to verify your account.
    http://${req.headers.host}/verify-email?${user.emailToken}
    </p>
    `
    }
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
const resetPassword = async(req, res, next)=>{
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      
      let msg = {
        to: user.email,
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
      (async()=>{
        try {
          await sgmail.send(msg)
          res.json({'success':`A Password Reset sent to ${user.email} `})
          done(err, 'done')
          res.redirect('/')
        } catch (error) {
          console.log(error)
          res.json({'error': 'Something went wrong, Please contact support@kiriikou.com'})
          req.redirect('/')
        }
      })();
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
}
const verifyEmail = async(req, res, next)=>{
  try {
    const user = await User.findOne({ emailToken: req.query.token })
    if(!user){
      res.json({'error': 'Token is invalid, Please contact for assistance'})
      // return res.redirect('/')
    }
    user.emailToken = null;
    user.isVerified = true;
    await user.save()
    signin(user).then((data) => {
      if (!data) {
        next()
      } else {
        const redirectUrl = req.session.redirectTo || '/';
        res.redirect(redirectUrl)
      }
    })

  } catch (error) {
    console.log(error)
  }
}
/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    await user.save()
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }

}

const remove = async (req, res) => {
  try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const isSeller = (req, res, next) => {
  const isSeller = req.profile && req.profile.seller
  if (!isSeller) {
    return res.status('403').json({
      error: "User is not a seller"
    })
  }
  next()
}

const  Admin = (req, res, next)=>{
  const isAdmin = req.profile && req.profile.seller
  if(!isAdmin){
    return res.status('403').json({
      error: 'You are not an Admin' 
    })
  }
  next()
}

const stripe_auth = (req, res, next) => {
  request({
    url: "https://connect.stripe.com/oauth/token",
    method: "POST",
    json: true,
    body: {client_secret:config.stripe_test_secret_key,code:req.body.stripe, grant_type:'authorization_code'}
  }, (error, response, body) => {
    //update user
    if(body.error){
      return res.status('400').json({
        error: body.error_description
      })
    }
    req.body.stripe_seller = body
    next()
  })
}

const stripeCustomer = (req, res, next) => {
  if(req.profile.stripe_customer){
      //update stripe customer
      myStripe.customers.update(req.profile.stripe_customer, {
          source: req.body.token
      }, (err, customer) => {
        if(err){
          return res.status(400).send({
            error: "Could not update charge details"
          })
        }
        req.body.order.payment_id = customer.id
        next()
      })
  }else{
      myStripe.customers.create({
            email: req.profile.email,
            source: req.body.token
      }).then((customer) => {
          User.update({'_id':req.profile._id},
            {'$set': { 'stripe_customer': customer.id }},
            (err, order) => {
              if (err) {
                return res.status(400).send({
                  error: errorHandler.getErrorMessage(err)
                })
              }
              req.body.order.payment_id = customer.id
              next()
            })
      })
  }
}

const createCharge = (req, res, next) => {
  if(!req.profile.stripe_seller){
    return res.status('400').json({
      error: "Please connect your Stripe account"
    })
  }
  myStripe.tokens.create({
    customer: req.order.payment_id,
  }, {
    stripeAccount: req.profile.stripe_seller.stripe_user_id,
  }).then((token) => {
      myStripe.charges.create({
        amount: req.body.amount * 100, //amount in cents
        currency: "usd",
        source: token.id,
      }, {
        stripeAccount: req.profile.stripe_seller.stripe_user_id,
      }).then((charge) => {
        next()
      })
  })
}

// const payWithFlutterwave = (req, res, next)=>{
//   request({
//     url:"https://api.flutterwave.com/v3/payments",
//     method:"POST",
//     headers:`Bearer ${config.flutterwave_secret_key}`,
//     json:true,
//     body:{}
//   })
// }
export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  isSeller,
  Admin,
  stripe_auth,
  stripeCustomer,
  createCharge,
  verifyEmail,
  resetPassword,
  sendEmail
}
