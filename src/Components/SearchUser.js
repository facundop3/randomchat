import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

function SearchUser(props) {
  const { handleChange, inputValue, labelText } = props;
  return (
    <Container>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search an user"
          aria-label={labelText}
          aria-describedby="basic-addon1"
          value={inputValue}
          onChange={handleChange}
          margin="normal"
        />
      </div>
    </Container>
  );
}

export default SearchUser;
