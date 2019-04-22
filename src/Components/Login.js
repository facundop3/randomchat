import React, {useState} from 'react'
import API from '../API'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1em;
  position: absolute;
`
const LoginTitle = styled.h1`
  text-align: center;
`

const InputUsername = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 2em;
  text-align: center;
  font-size: 1em;
`

const Login = props => {

  const [inputValue, setInputValue] = useState('')
  const handleSubmit = ev => {
    ev.preventDefault();
    if(inputValue){
      API.registerUser(inputValue) 
    }
    props.setHideLogin(true)
  }

  return (
    <Container>
      <LoginTitle>Enter your username</LoginTitle>
      <form onSubmit={handleSubmit}>
        <InputUsername value={inputValue} onChange={({target:{value}})=> setInputValue(value)} placeholder="Username"/>
      </form>
    </Container>
  )

}

export default Login