import openSocket from 'socket.io-client'
const  socket = openSocket('http://192.168.1.48:3030')

function suscribeToMessages(callback) {
  socket.on('new-message', newMessage => callback(newMessage))
}

function sendMessage(newMessage){
  socket.emit('new-message', newMessage)
}

function registerUser(userName){
  socket.emit('new-username', userName)
}
export default { suscribeToMessages, sendMessage, registerUser }