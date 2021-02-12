// import sgmail from '@sendgrid/mail'

const cart = {
    itemTotal() {
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          return JSON.parse(localStorage.getItem('cart')).length
        }
      }
      return 0
    },
    addItem(item, cb) {
      let cart = []
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.push({
          product: item,
          quantity: 1,
          shop: item.shop._id
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        cb()
      }
    },
    updateCart(itemIndex, quantity) {
      let cart = []
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart[itemIndex].quantity = quantity
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    },
    getCart() {
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          return JSON.parse(localStorage.getItem('cart'))
        }
      }
      return []
    },
    removeItem(itemIndex) {
      let cart = []
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.splice(itemIndex, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      return cart
    },
    emptyCart(cb) {
      if (typeof window !== "undefined") {
        localStorage.removeItem('cart')
        cb()
      }
    },
    // sendInquiryMessage(){
    //   let cart = []
    //   if (typeof window !== "undefined") {
    //     if (localStorage.getItem('cart')) {
    //       cart = JSON.parse(localStorage.getItem('cart'))
    //     }
    //   }
    //   const msg = {
    //     from:`${config.email_address}`,
    //     to:user.email,
    //     subject:'Kiriikou - Order Receipt',
    //     text:`Thank you for your order on Kiriikou.com.
    //     ${checkoutDetails.products}`,
    //     html:`
    //     <h1>Hello ${user.name}</h1>
    //     <p>
    //     Thank you for registering with us.
    //     Please click on the link to verify your account.
    //     http://${req.headers.host}/verify-email?${user.emailToken}
    //     </p>
    //     `
      
    //     }
    //   sgmail.send(msg)
    // }
  }
  
  export default cart
