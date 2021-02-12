import React from 'react';
import ListProducts from './product/ListProducts';
import Home from './core/Home';
import Users from './user/Users'
import Admin from './admin/Admin'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './auth/PrivateRoute'
import NewShop from './shop/Shops'
import Shops from './shop/MyShops'
import MyShops from './shop/Shop'
import Shop from './shop/EditShop'
import EditShop from './product/NewProduct'
import NewProduct from './product/EditProduct'
import EditProduct from './product/Product'
import Product from './cart/Inquiry'
import Inquiry from './user/StripeConnect'
import StripeConnect from './order/ShopOrders'
import ShopOrders from './order/Order'
import Order from './request/PlaceARequestForm'
import PlaceARequestForm from './components/VerifyEmail'
import VerifyEmail from './admin/Login'
import Login from './admin/TheContent'
import Register from './views/pages/register/Register'

// const Cart = React.lazy(()=> import('./cart/Cart'))

const routes = [
  {path:'/', exact:true, name:'Home', component:Home},
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/user/signup', exact: true, name: 'Sign Up', component: Signup },
  { path: '/auth/signin', exact: true, name: 'Sign In', component: Signin },
  { path: '/user/:userId', exact: true, name: 'User Details', component: Profile },
  { path: '/user/edit/:userId', exact: true, name: 'Edit Profile', component: EditProfile },
  { path: '/place-request/get-started', exact: true, name: 'Place Request', component: PlaceARequestForm },
  { path: '/inquiry', exact: true, name: 'User Details', component: Inquiry },
  { path: '/product/:productId', exact: true, name: 'User Details', component: Product },
  { path: '/admin/products/all', exact: true, name: 'User Details', component: ListProducts },
  { path: '/shops/all', exact: true, name: 'User Details', component: Shops },
  { path: '/admin/shops/all', exact: true, name: 'User Details', component: Shops },
  { path: '/shops/:shopId', exact: true, name: 'User Details', component: Shop },
  { path: '/verify-email', exact: true, name: 'User Details', component: VerifyEmail },
  { path: '/order/:orderId', exact: true, name: 'User Details', component: Order },
  { path: '/make-inquiry/:orderId', exact: true, name: 'User Details', component: Order },
  { path: '/seller/orders/:shop/:shopId', exact: true, name: 'User Details', component: ShopOrders },
  { path: '/seller/shops', exact: true, name: 'User Details', component: MyShops },
  { path: '/business/register/new', exact: true, name: 'User Details', component: NewShop },
  { path: '/seller/shop/edit/:shopId', exact: true, name: 'User Details', component: EditShop },
  { path: '/seller/:shopId/products/new', exact: true, name: 'User Details', component: NewProduct },
  { path: '/seller/:shopId/:productId/edit', exact: true, name: 'Edit Product', component: EditProduct },
  { path: '/seller/stripe/connect', exact: true, name: 'User Details', component: StripeConnect },
  { path: '/auth/admin/signin', exact: true, name: 'Admin Login', component: Login },
  { path: '/auth/admin/register', exact: true, name: 'Admin Registration', component: Register },
  { path: '/admin', exact: true, name: 'User Details', component: Admin },
];

export default routes;
