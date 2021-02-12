import mongoose from 'mongoose'
const ShopSchema = new mongoose.Schema({
    business_name:{
        type:String,
        required: true,
        trim:true
    },
    business_site_url:{
        type:String,
        trim:true
    },
    
    country_of_business:{
        type:String,
        required: true,
        trim:true
    },
    region_of_business:{
        type:String,
        required: true,
        trim:true
    },
    city_of_business:{
        type:String,
        required: true,
        trim:true
    },
    zip:{
        type:String,
        trim:true
    },
    business_mobile:{
        type:String,
        required: true,
        trim:true
    },
    business_mobile_contact:{
        type:String,
        trim:true
    },
    business_email:{
        type:String,
        required: true,
        trim:true
    },
    is_business_registered:{
        type:Boolean,
        default:false
    },
    busines_certificate:{
        data:Buffer,
        contentType:String
    },
    identity_card_front:{
        data:Buffer,
        contentType:String
    },
    identity_card_back:{
        data:Buffer,
        contentType:String
    },
    image:{
        data:Buffer,
        contentType:String
    },
    rate: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    comments: [{
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
    }],
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    paid_for_service :{ type: Boolean, default:false},
    owner:{ type: mongoose.Schema.ObjectId, ref: 'User'}
});
export default mongoose.model('Shop', ShopSchema)
