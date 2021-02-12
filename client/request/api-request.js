const create = async (params, credentials, request, token) => {
    try {
      let response = await fetch('/api/orders/'+params.userId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
          },
          body: JSON.stringify({request: request, token:token})
        })
        return response.json()
      }catch(err) {
        console.log(err)
      }
  }
  const update = async (params, credentials, request) => {
    try {
      let response = await fetch('/api/request/status/' + params.requestId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(request)
      })
      return response.json()
    } catch(err){
      console.log(err)
    }
  }
  const cancelRequest = async (params, credentials, request) => {
    try {
      let response = await fetch('/api/request/'+params.requestId+'/cancel/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(request)
      })
      return response.json()
    }catch(err){
      console.log(err)
    }
  }
  
  const processCharge = async (params, credentials, request) => {
    try {
      let response = await fetch('/api/order/'+params.requestId+'/charge/'+params.userId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(request)
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const getStatusValues = async (signal) => {
    try {
      let response = await fetch('/api/order/status_values', {
        method: 'GET',
        signal: signal
      })
      return response.json()
    }catch(err) { 
      console.log(err)
    }
  }
  
  const listByUser = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/orders/user/'+params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
  }
  
  const read = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/order/' + params.requestId, {
        method: 'GET',
        signal: signal
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
export default {
    create,
    read,
    listByUser,
    getStatusValues,
    processCharge,
    cancelRequest,
    update,
    create
}