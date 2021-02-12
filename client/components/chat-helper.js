const chat = {
    addItem(item, cb) {
    let chat = []
    if (typeof window !== "undefined") {
      if (localStorage.getItem('chat')) {
        chat = JSON.parse(localStorage.getItem('chat'))
      }
      chat.push({
        name: item,
        room: item
      })
      localStorage.setItem('chat', JSON.stringify(chat))
      cb()
    }
  },
  getItem(){
      if(typeof window !== 'undefined'){
          if(localStorage.getItem('chat')){
              return JSON.getItem('chat')
          }
      }
      return []
  }
}
export default chat;