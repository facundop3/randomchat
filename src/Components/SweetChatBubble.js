import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
  ${
    props => props.isLeft ? 'justify-content: flex-start;': 'justify-content: flex-end;'  
  }
`
const MessageBody = styled.div`
    margin: .25em;
    padding:.5em;
    border-radius: 20px;
    display: inline-block;
    ${
      props => props.isLeft ?
        `border-bottom-left-radius: 0;
        background-color: #e6ecf0;
        color:#14171a;
            ${
              props.isSecond && "border-top-left-radius: 0;"
            }
        `
        :
        `border-bottom-right-radius: 0;
        background-color: #1da1f2;
        color: white;
        ${
          props.isSecond && "border-top-right-radius: 0;"
        }
        `
    }
`
const SweetChatBubble = props => {
    const {isLeft, message, isSecond} = props
    return (
      <Container isLeft={isLeft}>
        <MessageBody isLeft={isLeft} isSecond={isSecond}>
          {message}
        </MessageBody>
      </Container>
    )
}

export default SweetChatBubble