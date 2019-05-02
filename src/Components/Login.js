import React from 'react'
import API from '../API'
import styled from 'styled-components'

import SweetInput from './SweetInput'

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1em;
  position: absolute;
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.4);
`
const LoginTitle = styled.h1`
  text-align: center;
`
const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Login = props => {

  const handleSubmit = inputValue => {
    if(inputValue && /\S/.test(inputValue)){
      API.registerUser(inputValue) 
      props.setHideLogin(true)
    }
  }

  return (
    <Wrapper>

    <Container>
      <LoginTitle>Chat as a guest</LoginTitle>
      <SweetInput 
        placeholder="Sally Ride"
        handleSubmit={handleSubmit}
        faIcon="user-astronaut"
        iconColor="#95ca3e"
      />
    </Container>
    </Wrapper>
  )

}

export default Login