import openSocket from 'socket.io-client'
const  socket = openSocket('http://localhost:3030')

function suscribeToMessages(callback) {
  socket.on('new-message', newMessage => callback(newMessage))
}

function sendMessage(newMessage){
  socket.emit('new-message', newMessage)
}
export default { suscribeToMessages, sendMessage }