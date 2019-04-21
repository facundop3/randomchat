import React, {useState} from 'react'
import styled from 'styled-components'

import API from '../API'

import MessageForm from './MessageForm'
import DragAndDrop from './DragAndDrop'

const ChatHeadder= styled.div`
  height: 1em;
  width: calc(100% - 2em);
  background-color: rebeccapurple;
  color: white;
  justify-content: space-between;
  display:flex;
  padding: .5em 1em;
`
const Container = styled.div`
    height: 40vh;
    width: 30vw ;
    position: absolute;
    display: block;
    background-color: grey;
`

const ChatMessages = styled.p`
  height: calc(90% - 1em);
  width: calc(100% - 1em);
  margin: 0%;
  padding: .5em;
`

const PrivateChat = props =>{
  const {userObject:{id, messages, username}} = props
  const [messageValue, setMessageValue] = useState('')
  const handleClose = ev =>{
    console.log("Close it")
  }
  const handleChange = ev=>{
    setMessageValue(ev.target.value)
  }

  const sendMessage = ev =>{
    ev.preventDefault()
    const messageObj = {id, message: messageValue}
    API.sendPrivateMessage(messageObj)
    setMessageValue('')
  }
  const MessageText = styled.p`
    display: block;
  `
  return (
    
    <DragAndDrop x={100} y={100} >
    <Container>
      <ChatHeadder> 
        <span>{username}</span>
        <span onClick={handleClose}>Close</span>
      </ChatHeadder>
      <ChatMessages>
       {messages && messages.map(message => <MessageText>{message}</MessageText>)}
      </ChatMessages>

      <MessageForm
        messageValue={messageValue} 
        handleChange={handleChange}
        sendMessage={sendMessage} />
    </Container>
  </DragAndDrop>
  )
}

export default PrivateChat