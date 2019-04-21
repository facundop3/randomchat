import React from 'react'
import styled from 'styled-components'

const InputSearch =  styled.input`
  width: 100%;
`;


const SearchUser = props =>{

  const {handleChange, inputValue} = props
  return (
    <InputSearch  
      value={inputValue}
      onChange={handleChange}
      placeholder="Search user"/>
  )
}

export default SearchUser