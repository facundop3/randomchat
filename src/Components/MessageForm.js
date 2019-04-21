import React from 'react'
import styled from 'styled-components'

const InputMessage = styled.input`
  width: calc(100% - 2em);
  height: calc(100% - 2em);
  border:0;
  padding: 1em;
`;
const MessageContainer = styled.form`
  height: 10%;
  width: 100%;
  z-index: 2;
`;
const MessageForm = props => {
  const {sendMessage, messageValue, handleChange} = props
  const handleClick = ev => ev.target.focus()
  return (
    <MessageContainer onSubmit={sendMessage}>
      <InputMessage 
        onClick={handleClick}
        type="text" 
        placeholder="Input your message" 
        onChange={handleChange} 
        value={messageValue}/>
    </MessageContainer>
  )
}

export default MessageForm