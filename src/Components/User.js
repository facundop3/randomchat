import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from './Badge'
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
  border: .5px solid grey;
  border-radius: 8px;
  padding: .5em;
  margin: .25em;
`
const UsernameP = styled.p`
    margin: 1em;
`
const User = props => {
  const{img, username, handleClick, id, faIcon="user-astronaut", iconColor="#95ca3e"} = props
  const startPrivateChat = ()=>{
    handleClick && handleClick(id)
  }
  return (
    <Container onClick={startPrivateChat}>
      {
       img? 
        <Avatar img={img}/> 
        :
        <FontAwesomeIcon
          icon={faIcon}
          color={iconColor}
        />
      }
      <UsernameP>{username}</UsernameP>
      {
        // id && <Badge number={10} />
      }
    </Container>
  )
}

export default User