import React, {useState} from 'react'
import API from '../API'
import styled from 'styled-components'

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

const InputUsername = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 2em;
  text-align: center;
  font-size: 1em;
  border:0;
  outline: none;
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
      <LoginTitle>Enter your nickname</LoginTitle>
      <form onSubmit={handleSubmit}>
        <InputUsername value={inputValue} onChange={({target:{value}})=> setInputValue(value)} placeholder="Username"/>
      </form>
    </Container>
  )

}

export default Login