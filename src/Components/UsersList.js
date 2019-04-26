import React from 'react'
import styled from 'styled-components'

import User from './User'

const Container = styled.ul`
  width: calc(100% - 2em);
  padding: 1em;
`
const UsersList = props =>{
  const {users, handleUserClick, filter} = props
  const matches = users.filter(({username}) => username && username.toLowerCase().includes(filter.toLowerCase()))
  return (
    <Container>
      {
        matches.length ? 
          matches.map(({username, id}) => 
                <User username={username} 
                      handleClick={handleUserClick} 
                      id={id}
                      key={id}
                      />)
          :
          <User username="No users" 
                faIcon="frown-open"
                iconColor="grey"
          />
      }
    </Container>
  )
}


export default UsersList