import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API from '../API'

import MessageForm from './MessageForm'
import DragAndDrop from './DragAndDrop'
import SweetChatBubble from './SweetChatBubble'

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
    background-color: white;
    border: 1px solid;
`

const ChatMessages = styled.div`
  height: 95%;
  width: calc(100% - calc(1em + 2px));
  margin: 0%;
  padding: .5em;
  overflow:scroll;
`
const MessagesBox = styled.div`
  height:80%;
`

const PrivateChat = props =>{
  const {userObject:{id, messages, username}, handleClose} = props
  const [isMinimized, setIsMinimized] = useState(false)
  const sendMessage = messageValue =>{
    if(messageValue && /\S/.test(messageValue)){
      const messageObj = {id, message: {content:messageValue, isOutbound:true}}
      API.sendPrivateMessage(messageObj)
    }
  }

  const handleMin = ev =>{
    setIsMinimized(!isMinimized)
  }
  const handleCloseClick = ()=>{
    handleClose(id)
  }
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
          onClick={handleCloseClick}
          />
        </div>
      </ChatHeadder>
      {

       !isMinimized && <MessagesBox>
                          <ChatMessages>
                            {messages && messages.map(({content, isOutbound}, index, list) => 
                                <SweetChatBubble 
                                  key={Date.now()+ index} 
                                  message={content} 
                                  isSecond={index && Boolean(isOutbound) === Boolean(list[index -1].isOutbound)} 
                                  isLeft={!isOutbound}/>
                              )}
                          </ChatMessages>

                          <MessageForm
                            cleanAfter
                            sendMessage={sendMessage} 
                          />
                        </MessagesBox>         
      }
    </Container>
  </DragAndDrop>
  
  )
}

export default PrivateChat