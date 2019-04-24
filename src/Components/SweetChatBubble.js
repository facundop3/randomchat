import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
    padding:.5em;
    border-radius: 20px;
    ${
      props => props.isLeft ?
        `border-bottom-left-radius: 0;
        background-color: #e6ecf0;
        color:#14171a;`
        :
        `border-bottom-right-radius: 0;
        background-color: #1da1f2;
        color: white;`
    }
`
const SweetChatBubble = props => {
    const {leftMessage} = props
    return (
      <Container isLeft={leftMessage}>
        Hello dude
      </Container>
    )
}

export default SweetChatBubble