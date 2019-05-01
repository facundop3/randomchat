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
  background: #e9ebee;
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
  const [privateChatsList, SetPrivateChatsList] = useState([])
  const [searchUserValue, setSearchUserValue] = useState('')
  const [hiddeLogin, setHideLogin] = useState(false)

  const closePrivatChat = id => {
    SetPrivateChatsList(privateChatsList.filter(elem => elem !== id))
  }

  const updateMessagesList = (messageToAdd) => {
    messagesList.push(messageToAdd)
    setMessageList([...messagesList])
  }

  const updateUsersList = (newUsersList) => {
    setUsersList(newUsersList)
  }

  const handleSearchUserChange = ({target:{value: username}}) => {
    setSearchUserValue(username)
  }

  useEffect(()=>{
    console.log("Suscribe to public messages")
    API.suscribeToMessages(updateMessagesList)
  }, [])

  useEffect(()=>{
    API.suscribeToUsers(updateUsersList)
  }, [usersList])

  const sendMessage =  messageValue =>{
    if(messageValue && /\S/.test(messageValue)){
      API.sendMessage(messageValue)
    }
  }

  const handleUserClick = user =>{
    if(! privateChatsList.includes(user.id)){
      privateChatsList.push(user.id)
      }
      SetPrivateChatsList([...privateChatsList])
  }
  const showPrivateChats = () =>{
   return  usersList.map(({id, username}) => <PrivateChat id={id} 
                                                          username={username}
                                                          handleClose={closePrivatChat}
                                                          key={id}/> ) 
  }
  
  return (
      <MainContainer>
        {
         showPrivateChats()
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