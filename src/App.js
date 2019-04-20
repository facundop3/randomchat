import React from 'react'
import styled from 'styled-components'
//Api
import { suscribeToMessages, sendMessage } from './API'

// Components
import { UserList } from './Components/BaseComponents'
import User from './Components/User'
import MessageForm from './Components/MessageForm'
import MessagesBox from './Components/MessagesBox'

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
  display: flex;
`
const RightBox = styled.div`
  background-color: grey;
  width: 20%;
  height: 90vh;
`;

class WebChat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messagesList: [],
      messageValue: ''
    }
    suscribeToMessages((newMessage)=> this.setState(prevState =>({
        messagesList: [...prevState.messagesList, newMessage]
      })
     )
    )
  }


  sendMessage =  ev =>{
    ev.preventDefault()
    console.log(this.state.messageValue)
    sendMessage(this.state.messageValue)
  }
  setMessageValue = ({target:{value}})=>{
    this.setState(prevState=> ({
      ...prevState,
      messageValue: value
    }))
  }

  render(){
    return (
      <MainContainer>
      <LeftBox>
        <MessagesBox messagesList={this.state.messagesList}/>
        <MessageForm  messageValue={this.state.messageValue} sendMessage={this.sendMessage} setMessageValue={this.setMessageValue}/>
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
}
export default WebChat