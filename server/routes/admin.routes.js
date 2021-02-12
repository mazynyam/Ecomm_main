import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import AdminBroMongoose from '@admin-bro/mongoose'
import User from './../models/userModel'
import {Order} from './../models/orderModel'
import Product from './../models/productModel'
import Request from './../models/requestModel'
import Shop from './../models/shopModel'
import Page from './../models/pageModel'
import kikLogo from './../../client/assets/images/kik.png'
import bcrypt from 'bcrypt'
import config from '../../config/config'


AdminBro.registerAdapter(AdminBroMongoose)
const user = User;
const order = Order
const product = Product;
const request = Request;
const shop = Shop;
const page = Page;
// RBAC functions
const canEditUsers = ({ currentAdmin, record }) => {
    return currentAdmin && (
      currentAdmin.role === 'admin'
      || currentAdmin._id === record.param('userId')
    )
  }
const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
// const editor = new Quill('#editor', custom)
const pageResourceOptions = {
    properties: {
      content: {
        type: 'richtext',
        custom: {
            modules: {
                toolbar: [['bold', 'italic'], ['link', 'image']],}
        },
      },
    },
  }
const AdminBroOptions ={
    resources:[{
        resource:user,
        options:{
            properties: {
                hashed_password: { isVisible: false },
                password: {
                  type: 'string',
                  isVisible: {
                    list: false, edit: true, filter: false, show: false,
                  },
                },
              },
              actions: {
                new: {
                after: async(response) =>{
                    if(response.record && response.record.errors){
                        response.record.errors.password = response.record.errors.hashed_password
                    }
                    return response
                },
                  before: async (request) => {
                    if(request.payload.record.password) {
                      request.payload.record = {
                        ...request.payload.record,
                        hashed_password: await bcrypt.hash(request.payload.record.password, 8),
                        password: undefined,
                      }
                    }
                    return request
                  },
                },
                edit: { isAccessible: canEditUsers },
                delete: { isAccessible: canModifyUsers },
                new: { isAccessible: canModifyUsers },
                
        }

    }  
    },
    { 
        resource:order,
        options:{}
     },
     {resource:product},
     {resource:request}, 
     {resource:shop},
     {resource:page, options: pageResourceOptions}
],
    databases:[],
    branding:{companyName:'Kirikou.com', logo:kikLogo, favicon:'./../../client/assets/images/favicon.ico'},
    rootPath:'/kiriikou-admin',
    logoutPath:'/kiriikou-admin/logout',
    loginPath:'/kiriikou-admin/signin',
    softwareBrothers: false
}
const adminBro = new AdminBro(AdminBroOptions)


// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookiePassword: config.jwtSecret,
//     cookieName:'kiriikou-ecommerce',
//     authenticate: async (email, password) => {
//         const user = await User.findOne({ email })
//         if (user ) {
//           const matched = await bcrypt.compare(password, user.hashed_Password)
//           if (matched) {
//             return user
//           }
//         }
//         return null
//       }, 
//     }, 
//     null,{resave:false, saveUninitialized:true}  
// )
const router = AdminBroExpress.buildRouter(adminBro)
export default router