const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "gdjh47rniof87gfjdnbgjbvh36fjbew4r7fnmbHI8rj0hygf",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/kiriikou-db',
  // mongoUri:"mongodb+srv://Phinehas:Phinehas86@cluster0.1gctm.mongodb.net/kiriikou-ecommerce?retryWrites=true&w=majority",
  stripe_connect_test_client_id: "",
  stripe_test_secret_key: "",
  stripe_test_api_key: "",
  sendgrid_api_key:'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',
  email_address:'info@kiriikou.com',
  SENDGRID_USERNAME:'lampteyphinehas70@gmail.com',
  SENDGRID_PASSWORD:'phinehaslamptey86',
  flutterwave_secret_key:"FLWSECK-9a66b5d4bdc1cd7843ebcea676538b4d-X",
  flutterwave_public:"FLWPUBK-eafd569ec9e65902a56bc2b7e054c863-X"
}

export default config
