import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 90%;
    display: inline-block;
    width: 100%;
    padding: 0 .5em;
`
const MessagesBox = props=>{
  const { messagesList } = props
  return <Container>
    {
      messagesList.map(({message, username}) => <h1>{`${username}: ${message}`}</h1>)
    }
  </Container>
}

export default MessagesBox
