import mongoose from 'mongoose'

const RequestSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  customer_email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  phone:{
    type:String,
    trim: true,
    required:'Phone is rquired'
  },
  product_name:{
    type:String,
    trim:true,
    required:'Product name is required'
  },
  quantity: Number,
  status: {type: String,
    default: 'Not processed',
    enum: ['Not processed' , 'Processing', 'Shipped', 'Delivered', 'Cancelled']},
  delivery_address: {
    street: {type: String, required: 'Street is required'},
    city: {type: String, required: 'City is required'},
    state: {type: String},
    zipcode: {type: String, required: 'Zip Code is required'},
    country: {type: String, required: 'Country is required'}
  },
  payment_type:{
      type:String,
      default:'Card',
      enum:['Cash','Bank Transfer', 'Mobile Money', 'Card']
  },
  image:{
    data:Buffer,
    contentType:String
  },
  payment_id: {},
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

const Request = mongoose.model('Request', RequestSchema)

export default Request
