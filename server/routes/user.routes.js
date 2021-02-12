import express from 'express'
import userCtrl from '../controllers/userController'
import authCtrl from '../controllers/authController'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create, userCtrl.verifyEmail, userCtrl.sendEmail)
router.route('/main-admin')
  .get(authCtrl.requireSignin, userCtrl.read, userCtrl.list)
  .post(userCtrl.create)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update, userCtrl.stripe_auth)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
router.route('/api/stripe_auth/:userId')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.stripe_auth, userCtrl.update)
router.route('/forgot').post(userCtrl.resetPassword )
router.param('userId', userCtrl.userByID)

export default router
