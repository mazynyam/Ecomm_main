import config from '../../config/config'
import auth from './auth-helper'
import kik from './../assets/images/kik.png'
import User from './../../server/models/userModel'
const user = new User()

const Config = {
    public_key:`${config.flutterwave_secret_key}`,
    tx_ref:Date.now(),
    redirect_url:"https://webhook.site/ddeb50a2-163e-4847-b50d-2c44fd180558",
    amount: "20",
    currency:'USD',
    payment_options:'card, ghanamobilemoney',
    customer:{
      email:`${user.email}`,
      phonenumber:`${user.phone}`,
      name:`${user.name}`
    },
    customizations:{
      title:'Business Registration',
      description:'Payment for business registration',
      logo:kik
    }
  };
export default Config;