import React, {useState} from 'react'
import styled from 'styled-components'

const InputSearch =  styled.input``;


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