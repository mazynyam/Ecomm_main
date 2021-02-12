const signin = async (user) => {
    try {
      let response = await fetch('/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
const sendEmail = async(user)=>{
  try{
    let response = await fetch('/api/users',{
      method: 'POST',
      url: req.headers.host,
      body:JSON.parse(user)
    })
    return await response.json()
  }
  catch(error){
    console.log(error)
  }
}
const adminSignin = async (user) => {
    try {
      let response = await fetch('/auth/admin/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const signout = async () => {
    try {
      let response = await fetch('/auth/signout/', { method: 'GET' })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {
    signin,
    adminSignin,
    signout,
     sendEmail
  }