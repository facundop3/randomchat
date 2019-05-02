import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
`

function SearchUser(props) {
  const {handleChange, inputValue} = props
  return (
    <Container>
      <TextField
        id="standard-name"
        label="Search user"
        value={inputValue}
        style={{ width: "100%" }}
        onChange={handleChange}
        margin="normal"
      />
    </Container>
  )
}

export default SearchUser
