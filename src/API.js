import openSocket from "socket.io-client";
const socket = openSocket("https://randombla.herokuapp.com/");

function suscribeToMessages(callback) {
  socket.on("new-message", newMessage => callback(newMessage));
}

function sendMessage(newMessage) {
  socket.emit("new-message", newMessage);
}

function sendPrivateMessage(messageObj) {
  socket.emit("new-private-message", messageObj);
}

function suscribeToPrivateMessages(callback) {
  socket.on("new-private-message", newPrivateMessages =>
    callback(newPrivateMessages)
  );
}

function registerUser(username) {
  socket.emit("new-username", username);
}

function suscribeToUsers(callback) {
  socket.on("all-users", usersList => {
    callback(usersList);
    console.log(usersList);
  });
}

export default {
  suscribeToMessages,
  sendMessage,
  registerUser,
  suscribeToUsers,
  sendPrivateMessage,
  suscribeToPrivateMessages
};
