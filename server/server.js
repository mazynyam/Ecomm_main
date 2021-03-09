import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import http from 'http'
import socketio from 'socket.io'
const { addUser, getUser, getUsersInChat, removeUser } = require('./users') 
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=>{
  socket.on('join', ({ name, room }, callback)=>{
    const { error, user } = addUser({ id:socket.id,  name, room})
    if(error) return callback(error)

    socket.emit('message', { user:'admin', text:`Hello , welcome to Kiriikou Chat Support`});
    socket.broadcast.to(user.room).emit('message', { user:'admin', text:`A new user has joined`});
    socket.join(user.room)
    callback()
  });

  socket.on('sendMessage', (message, callback)=>{
    const user = getUser(socket.id)
    io.to(user).emit('message', { user: user.name, text: message})
    callback()
  });

  socket.on('disconnect', ()=>{
    console.log('User left')
  })
} )

server.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
