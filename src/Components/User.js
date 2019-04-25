import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Avatar = styled.div`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  background-size: cover;
  margin-right: 1em;
  background-image: url(${({img})=>img});
`
const Container = styled.li`
  display: flex;
  align-items: center;
`
const UsernameP = styled.p`
    margin-left: 1em;
`
const User = props => {
  const{img, username, handleClick, id} = props
  const startPrivateChat = ()=>{
    handleClick({id, username})
  }
  return (
    <Container onClick={startPrivateChat}>
      {
       img? 
        <Avatar img={img}/> 
        :
        <FontAwesomeIcon
          icon="user-astronaut"
          color="#95ca3e"
        />
      }
      <UsernameP>{username}</UsernameP>
    </Container>
  )
}

export default User