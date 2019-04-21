import React from 'react'
import styled from 'styled-components'

const Avatar = styled.div`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  background-size: cover;
  margin-right: 1em;
  ${
    props => props.img &&
    `background-image: url(${props.img});`
  }
`
const Container = styled.li`
  display: flex;
`
const User = props => {
  const{img, username, handleClick, id} = props
  const startPrivateChat = ()=>{
    handleClick({id, username})
  }
  return (
    <Container onClick={startPrivateChat}>
      <Avatar img={img}/>
      <p>{username}</p>
    </Container>
  )
}

export default User