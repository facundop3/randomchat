import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
`

const ChatMessages = styled.div`
  height: calc(90% - 1em);
  width: calc(100% - 1em);
  margin: 0%;
  padding: .5em;
  background-color: grey;
`

const PrivateChat = props =>{
  const {userObject:{id, messages, username}} = props
  const [isMinimized, setIsMinimized] = useState(false)
  const handleClose = ev =>{
    console.log("Close it")
  }
  const sendMessage = messageValue =>{
    const messageObj = {id, message: messageValue}
    API.sendPrivateMessage(messageObj)
  }

  const handleMin = ev =>{
    console.log('Min please')
    setIsMinimized(!isMinimized)
  }
  const MessageText = styled.p`
    display: block;
  `
  return (
    
    <DragAndDrop x={100} y={100} >
    <Container>
      <ChatHeadder> 
        <span>{username}</span>
        <div>
          <FontAwesomeIcon
          icon="window-minimize"
          onClick={handleMin}
          style={{marginRight: ".5em"}}
          />
          <FontAwesomeIcon
          icon="times"
          onClick={handleClose}
          />
        </div>
      </ChatHeadder>
      {

       !isMinimized && <div>
                          <ChatMessages>
                            {messages && messages.map(message => <MessageText key={Date.now()}>{message}</MessageText>)}
                          </ChatMessages>

                          <MessageForm
                            cleanAfter
                            sendMessage={sendMessage} 
                          />
                        </div>         
      }
    </Container>
  </DragAndDrop>
  )
}

export default PrivateChat