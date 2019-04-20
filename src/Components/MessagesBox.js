import React from 'react'

const MessagesBox = props=>{
  const { messagesList } = props
  return <div>
    {
      messagesList.map(message => <h1>{message}</h1>)
    }
  </div>
}

export default MessagesBox
