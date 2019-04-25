import React from 'react'
import SweetInput from './SweetInput'

const MessageForm = props => {
  const {sendMessage} = props
  return (
    <SweetInput 
      handleSubmit={sendMessage}
      cleanAfter
      placeholder="Input your message"
      bgColor="lightblue"
    />
  )
}

export default MessageForm