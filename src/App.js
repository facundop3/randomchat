import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import API from './API'
import MessageForm from './Components/MessageForm'
import MessagesBox from './Components/MessagesBox'
import Login from './Components/Login'
import PrivateChat from './Components/PrivateChat'
import SearchUser from './Components/SearchUser'


import SimpleAppBar from './Components/SimpleAppBar'
import SimpleUsersList from './Components/SimpleUsersList'

const MainContainer = styled.div`
  height: 100vh;
  background: #e9ebee;
`
const AppContainer = styled.div`
/* Todo look for a better way of fixing the height */
  height: calc(100% - 64px);
  width: 100%;
  display: flex;
`

const LeftBox = styled.div`
  width: 80%;
  height: 90%;
  /* background-color: white; */
`
const RightBox = styled.div`
  background-color: #fff;
  width: 20%;
  height: 90%;
`;

const WebChat = props => {

  const [messagesList, setMessageList] = useState([])
  const [usersList, setUsersList] = useState([])
  const [privateChats, setPrivateChats] = useState({chatsIds:[]})
  const [searchUserValue, setSearchUserValue] = useState('')
  const [hiddeLogin, setHideLogin] = useState(false)

  const  updatePrivateChat = (newPrivateChat)=>{
    const {message,id} = newPrivateChat
    if(privateChats.chatsIds.includes(id)){
      if(privateChats.hasOwnProperty(id)){
        privateChats[id].messages = [...privateChats[id].messages, message]
      } else {
        privateChats[id] = {}
        privateChats[id].messages = [message]
      }
    } else {
      privateChats.chatsIds = [...privateChats.chatsIds, id]
      privateChats[id] = {}
      privateChats[id].messages = [message]
    }
    setPrivateChats({...privateChats})
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
    API.suscribeToMessages(updateMessagesList)
    API.suscribeToPrivateMessages(updatePrivateChat)
  }, [])

  useEffect(()=>{
    API.suscribeToUsers(updateUsersList)
  }, [usersList])

  useEffect(()=>{
  }, [privateChats])

  const sendMessage =  messageValue =>{
    if(messageValue && /\S/.test(messageValue)){
      API.sendMessage(messageValue)
    }
  }

  const toggleUserChatIsOpen = (listOfUsers, userId) =>{
    return listOfUsers.map(user =>{
      if(user.id === userId) {
        return {
          ...user,
          isOpen: ! user.isOpen
        }
      }
      return user
    })
  }

  const handleUserClick = (id) =>{
      setUsersList(toggleUserChatIsOpen(usersList, id))
  }
  const showPrivateChats = () =>{
   return  usersList.filter(({isOpen})=> isOpen).map(({id, username}) => <PrivateChat 
                                                                            id={id} 
                                                                            username={username}
                                                                            handleClose={handleUserClick}
                                                                            privateMessages={privateChats[id] && privateChats[id].messages}
                                                                            key={id}/> ) 
  }
  
  return (
      <MainContainer>
        <SimpleAppBar />
        <AppContainer>
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
          <SimpleUsersList users={usersList} filter={searchUserValue} handleUserClick={handleUserClick}/>
        </RightBox>
        </AppContainer>
    </MainContainer>
    )
}

export default WebChat