import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
//Api
import API from './API'

// Components
import { UserList } from './Components/BaseComponents'
import User from './Components/User'
import MessageForm from './Components/MessageForm'
import MessagesBox from './Components/MessagesBox'
import Login from './Components/Login'
import PrivateChat from './Components/PrivateChat'
import SearchUser from './Components/SearchUser';

const MainContainer = styled.div`
  height: 100vh;
  background: #92b3e8;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftBox = styled.div`
  background-color: green;
  width: 80%;
  height: 90vh;
  overflow: hidden;
`
const RightBox = styled.div`
  background-color: grey;
  width: 20%;
  height: 90vh;
`;

const WebChat = props => {
  const [messagesList, setMessageList] = useState([])
  const [usersList, setUsersList] = useState([])
  const [privateMessagesList, setPrivateMessagesList] = useState([])
  const [messageValue, setMessageValue] = useState('')
  const [searchUserValue, setSearchUserValue] = useState('')
  const [hiddeLogin, setHideLogin] = useState(false)
  const [userId, setUserId] = useState('')

  const updateMessagesList = (messageToAdd) => {
    setMessageList(messagesList.concat(messageToAdd))
  }

  const updateUsersList = (newUsersList) => {
    setUsersList(newUsersList)
  }

  const updatePrivateMessagesList = (newPrivateMessafes)=>{
    setPrivateMessagesList(privateMessagesList.concat(newPrivateMessafes))
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
    API.suscribeToPrivateMessages(updatePrivateMessagesList)
  }, [privateMessagesList])

  const sendMessage =  ev =>{
    ev.preventDefault()
    API.sendMessage(messageValue)
    setMessageValue('')

  }
  const handleChange = ({target:{value}})=>{
      setMessageValue(value)
  }

  const handleUserClick = id =>{
    console.log(id)
    setUserId(id)
  }

  return (
      <MainContainer>
        {
         userId && <PrivateChat userObject={usersList.find(({id})=> id === userId)}/>
        }
        {
         privateMessagesList.map(userObj=>  {
           console.log(userObj)
         return <PrivateChat userObject={userObj}/>
        }) 
        }
       { 
         !hiddeLogin &&  <Login setHideLogin={setHideLogin}/>
       }
      <LeftBox>
        <MessagesBox messagesList={messagesList}/>
        <MessageForm  messageValue={messageValue} sendMessage={sendMessage} handleChange={handleChange}/>
      </LeftBox>
      <RightBox>
        <SearchUser handleChange={handleSearchUserChange} inputValue={searchUserValue}/>
        <UserList>
          {
            usersList.filter(({username}) => 
              username.toLowerCase().includes(searchUserValue.toLowerCase())).map(({username, id})=> 
                <User username={username} handleClick={handleUserClick} id={id}/>)
          }
        </UserList>
      </RightBox>
    </MainContainer>
    )
}

export default WebChat