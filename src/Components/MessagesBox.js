import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 95%;
    display: inline-block;
    width: 100%;
    padding: 0 .5em;
    overflow: scroll;
`
const UsernameLink = styled.a`
    text-decoration: none;
    color: #0366d6;
`
const MessagesBox = props=>{
  const { messagesList } = props
  return <Container>
    {
      messagesList.map(({message, username}, index) => <h1 key={Date.now()+ index}><UsernameLink>{username}: </UsernameLink>{message}</h1>)
    }
  </Container>
}

export default MessagesBox
