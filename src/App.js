import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
//Api
import API from './API'

// Components
import UserList from './Components/UsersList'
import MessageForm from './Components/MessageForm'
import MessagesBox from './Components/MessagesBox'
import Login from './Components/Login'
import PrivateChat from './Components/PrivateChat'
import SearchUser from './Components/SearchUser'

const MainContainer = styled.div`
  height: 100vh;
  background: #e6ecf0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftBox = styled.div`
  width: 80%;
  height: 90%;
  background-color: white;
`
const RightBox = styled.div`
  background-color: #e9ebee;
  width: 20%;
  height: 90%;
`;

const WebChat = props => {
  const [messagesList, setMessageList] = useState([])
  const [usersList, setUsersList] = useState([])
  const [privateChatsObj, SetPrivateChatsObj] = useState({})
  const [searchUserValue, setSearchUserValue] = useState('')
  const [hiddeLogin, setHideLogin] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  const closePrivatChat = id => {
    delete privateChatsObj[id]
    SetPrivateChatsObj({...privateChatsObj})
  }
  const updateMessagesList = (messageToAdd) => {
    setMessageList(messagesList.concat(messageToAdd))
  }

  const updateUsersList = (newUsersList) => {
    setUsersList(newUsersList)
  }

  const  updatePrivateChatsList = (newPrivateChat)=>{
    if(privateChatsObj[newPrivateChat.id]){
      privateChatsObj[newPrivateChat.id].messages.push(newPrivateChat.message)
      SetPrivateChatsObj({...privateChatsObj})
    } else {
      privateChatsObj[newPrivateChat.id] = {
        messages: [newPrivateChat.message],
        username: newPrivateChat.username,
        id: newPrivateChat.id
      }
      SetPrivateChatsObj({...privateChatsObj})
      handleUserClick(newPrivateChat)
    }
  }

  const handleSearchUserChange = ({target:{value: username}}) => {
    setSearchUserValue(username)
  }

  useEffect(()=>{
    API.suscribeToMessages(updateMessagesList)
  }, [messagesList])

  useEffect(()=>{
    API.suscribeToUsers(updateUsersList)
  }, [usersList])

  useEffect(()=>{
    API.suscribeToPrivateMessages(updatePrivateChatsList)
  }, [privateChatsObj])

  const sendMessage =  messageValue =>{
    if(messageValue && /\S/.test(messageValue)){
      API.sendMessage(messageValue)
    }
  }

  const handleUserClick = user =>{
    setSelectedUser(user)
    if(! privateChatsObj[user.id]){
      privateChatsObj[user.id] = {
        messages: [],
        username: user.username,
        id: user.id
      }
      SetPrivateChatsObj(privateChatsObj)
    }
  }

  return (
      <MainContainer>
        {
         Object.keys(privateChatsObj).map(chatId=> privateChatsObj[chatId] && <PrivateChat userObject={privateChatsObj[chatId]}  handleClose={closePrivatChat} key={chatId}/>) 
        }
       { 
         !hiddeLogin &&  <Login setHideLogin={setHideLogin}/>
       }
      <LeftBox>
        <MessagesBox messagesList={messagesList}/>
        <MessageForm  sendMessage={sendMessage} />
      </LeftBox>
      <RightBox>
        <SearchUser handleChange={handleSearchUserChange} inputValue={searchUserValue}/>
        <UserList users={usersList} filter={searchUserValue} handleUserClick={handleUserClick}/>
      </RightBox>
    </MainContainer>
    )
}

export default WebChat