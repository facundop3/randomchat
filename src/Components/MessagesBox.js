import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: scroll;
`;
const UsernameLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
const MessagesBox = props => {
  const { messagesList } = props;
  return (
    <Container className="col-8">
      {messagesList.map(({ message, username }, index) => (
        <h1 key={Date.now() + index}>
          <UsernameLink>{username}: </UsernameLink>
          {message}
        </h1>
      ))}
    </Container>
  );
};

export default MessagesBox;
