import openSocket from 'socket.io-client'
const  socket = openSocket('http://192.168.1.48:3030')

function suscribeToMessages(callback) {
  socket.on('new-message', newMessage => callback(newMessage))
}

function sendMessage(newMessage){
  socket.emit('new-message', newMessage)
}

function sendPrivateMessage(messageObj){
  socket.emit('new-private-message', messageObj)
}

function suscribeToPrivateMessages(callback){
  socket.on('new-private-message', newPrivateMessages => callback(newPrivateMessages))
}

function registerUser(userName){
  socket.emit('new-username', userName)
}

function suscribeToUsers(callback){
  socket.on('all-users', usersList =>{ 
    callback(usersList)
    console.log(usersList)
  })
}

export default { suscribeToMessages,
                 sendMessage, 
                 registerUser, 
                 suscribeToUsers,
                 sendPrivateMessage,
                 suscribeToPrivateMessages }