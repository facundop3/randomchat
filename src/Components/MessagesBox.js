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
      messagesList.map(({message, username}, index) => <h1 key={Date.now()+ index}>{`${username}: ${message}`}</h1>)
    }
  </Container>
}

export default MessagesBox
