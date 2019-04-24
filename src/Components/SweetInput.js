import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const iconStyle = {
  position:"absolute", 
  padding: "5.5px",
  right: 0,
}

const InputText = styled.input`
  width: calc(100% - 1em);
  height: calc(100% - 1em);
  background-color: white;
  border: 1.5px solid grey;
  border-radius:5px;
  padding: 5.5px;
  outline: none;
`
const Container = styled.div`
    border-radius:5px;
    width: calc(100% - 1em);
    background-color: lightblue;
    padding:  .5em;
`


const SweetInput = ({iconColor="#2ca5e0", placeholder="", faIcon="paper-plane",handleSubmit, cleanAfter}) => {
  const [inputValue, setInputValue] = useState('')
  const handleInput = ({target:{value}}) => {
    setInputValue(value)
  }
  const handleClick = ev => ev.target.focus()
  const preventDefault = ev =>{
    ev.preventDefault()
    handleSubmit(inputValue)
    setInputValue(cleanAfter ? '' : inputValue)

  }
  return (
    <Container>
      <form onSubmit={preventDefault} style={{position:"relative"}}>
      <FontAwesomeIcon
        color={iconColor}
        icon={faIcon} 
        style={iconStyle}
        onClick={handleSubmit}
        />
        <InputText
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder={placeholder}
          onClick={handleClick}
        />
      </form>
    </Container>
  )
}

export default SweetInput