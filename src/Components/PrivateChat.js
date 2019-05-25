import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../API";

import MessageForm from "./MessageForm";
import DragAndDrop from "./DragAndDrop";
import SweetChatBubble from "./SweetChatBubble";

const ChatHeadder = styled.div`
  height: 2em;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(45deg, #662d8c, #ed1e79);
  color: white;
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  padding: 0.5em 1em;
`;
const Container = styled.div`
  height: ${props => (props.isMinimized ? "0vh" : "40vh")};
  position: absolute;
  display: block;
  z-index: 1;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

const ChatMessages = styled.div`
  height: 83%;
  width: 100%;
  margin: 0%;
  padding: 0.5em;
  overflow: scroll;
  box-sizing: border-box;
`;
const MessagesBox = styled.div`
  height: 91%;
  background-color: white;
`;

const PrivateChat = props => {
  const { id, username, handleClose, privateMessages } = props;
  // States
  const [isMinimized, setIsMinimized] = useState(false);
  const sendMessage = messageValue => {
    if (messageValue && /\S/.test(messageValue)) {
      const messageObj = {
        id,
        message: { content: messageValue, isOutbound: true }
      };
      API.sendPrivateMessage(messageObj);
    }
  };

  const handleMin = ev => {
    setIsMinimized(!isMinimized);
  };
  const handleCloseClick = () => {
    handleClose(id);
  };
  return (
    <DragAndDrop x={100} y={100}>
      <Container isMinimized={isMinimized}>
        <ChatHeadder>
          <span>{username}</span>
          <div>
            <FontAwesomeIcon
              icon={isMinimized ? "square" : "window-minimize"}
              onClick={handleMin}
              style={{ marginRight: ".5em" }}
            />
            <FontAwesomeIcon icon="times" onClick={handleCloseClick} />
          </div>
        </ChatHeadder>
        {!isMinimized && (
          <MessagesBox>
            <ChatMessages>
              {privateMessages &&
                privateMessages.map(({ content, isOutbound }, index, list) => (
                  <SweetChatBubble
                    key={Date.now() + index}
                    message={content}
                    isSecond={
                      index &&
                      Boolean(isOutbound) ===
                        Boolean(list[index - 1].isOutbound)
                    }
                    isLeft={!isOutbound}
                  />
                ))}
            </ChatMessages>

            <MessageForm cleanAfter sendMessage={sendMessage} />
          </MessagesBox>
        )}
      </Container>
    </DragAndDrop>
  );
};

export default PrivateChat;
