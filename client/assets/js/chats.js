$(function(){
    var socket = io.connect('http://localhost:4000');
    var message = $("#message");
    var username = $("#username")
    var send_message = $("#send_message")
    var chat = $("#chat")

    send_message.on('click', function(){
        socket.emit('new_message', {message:message.val()})
    })
    socket.on("new_message", (data)=>{
        console.log(data)
        chat.append(<p class='message'>${data.username} : ${data.message} </p>)
    })
    message.bind("keypress", ()=>{
        socket.emit('typing')
    })
    socket.on("typing", (data)=>{
        feedback.html(<p><i>${data.username} is typing a message...</i></p>)
    } )
})