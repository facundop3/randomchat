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
  const [messageValue, setMessageValue] = useState('')
  const [hiddeLogin, setHideLogin] = useState(false)
  const updateList = (messageToAdd) => {
    setMessageList(messagesList.concat(messageToAdd))
  }

  useEffect(()=>{
    API.suscribeToMessages(updateList)
  }, [messagesList])

  const sendMessage =  ev =>{
    ev.preventDefault()
    API.sendMessage(messageValue)
    setMessageValue('')

  }
  const handleChange = ({target:{value}})=>{
      setMessageValue(value)
  }

  return (
      <MainContainer>
       { 
         !hiddeLogin &&  <Login setHideLogin={setHideLogin}/>
       }
      <LeftBox>
        <MessagesBox messagesList={messagesList}/>
        <MessageForm  messageValue={messageValue} sendMessage={sendMessage} handleChange={handleChange}/>
      </LeftBox>
      <RightBox>
        <UserList>
          <User username="Facup3" img="https://images.pexels.com/photos/2122170/pexels-photo-2122170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
          <User username="Facup3" img="https://images.pexels.com/photos/2122170/pexels-photo-2122170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
          <User username="Facup3" img="https://images.pexels.com/photos/2122170/pexels-photo-2122170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
        </UserList>
      </RightBox>
    </MainContainer>
    )
}

export default WebChat