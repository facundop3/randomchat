import React from 'react'
import styled from 'styled-components'

const InputMessage = styled.input`
  width: calc(100% - 2em);
  height: calc(100% - 2em);
  border:0;
  padding: 1em;
`;
const MessageContainer = styled.form`
  height: 3em;
  width: 100%;
  align-self: flex-end;
`;
const MessageForm = props => {
  const {sendMessage, messageValue, handleChange} = props
  return (
    <MessageContainer onSubmit={sendMessage}>
      <InputMessage type="text" 
        placeholder="Input your message" 
        onChange={handleChange} 
        value={messageValue}/>
    </MessageContainer>
  )
}

export default MessageForm