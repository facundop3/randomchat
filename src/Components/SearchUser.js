import React from 'react'
import TextField from "@material-ui/core/TextField";
const SearchUser = props =>{

  const {handleChange, inputValue} = props

  return   <TextField
              id="standard-name"
              label="Search"
              value={inputValue}
              onChange={handleChange}
              margin="normal"/>
  
}

export default SearchUser