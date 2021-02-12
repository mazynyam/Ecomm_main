import express from 'express'
import requestController from './../controllers/requestController'
import authCtrl from '../controllers/authController'
import userCtrl from '../controllers/userController'

const router = express.Router()


router.route('/api/requests/:userId')
  .post(authCtrl.requireSignin, userCtrl.stripeCustomer,  requestController.create)
router.route('/api/requests/user/:userId')
  .get(authCtrl.requireSignin, requestController.listByUser)
router.route('/api/requests/status_values')
  .get(requestController.getStatusValues)
router.route('/api/request/:shopId/cancel/:productId')
  .put(authCtrl.requireSignin, requestController.update )

router.route('/api/request/:requesId/charge/:userId/:shopId')
  .put(authCtrl.requireSignin,  userCtrl.createCharge, requestController.update)

router.param('userId', userCtrl.userByID)
router.param('requestId', requestController.requestByID)

export default router

