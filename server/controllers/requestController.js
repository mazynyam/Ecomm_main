import Request from '../models/requestModel'
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res) => {
  try {
    req.body.order.user = req.profile
    const request = new Request(req.body.request)
    let result = await request.save()
    res.status(200).json(result)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const getStatusValues = (req, res) => {
    res.json(Request.schema.path('status').enumValues)
  }
  
  const requestByID = async (req, res, next, id) => {
    try {
      let request = await Request.findById(id).populate('products.product', 'name quantity').populate('products.shop', 'name').exec()
      if (!request)
        return res.status('400').json({
          error: "Request not found"
        })
      req.request = request
      next()
    } catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  const listByUser = async (req, res) => {
    try{
      let requests = await Request.find({ "user": req.profile._id })
          .sort('-created')
          .exec()
      res.json(requests)
    } catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

  const update = async (req, res) => {
    try {
      let request = await Request.update({'products._id':req.body.requestId}, {'$set': {
          'products.$.status': req.body.status
      }})
        res.json(request)
    } catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  const read = (req, res) => {
    return res.json(req.request)
  }


export default {
    create,
    listByUser,
    requestByID,
    getStatusValues,
    read,
    update,
    
}