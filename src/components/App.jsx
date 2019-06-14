import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import { tokenUrl, instanceLocator } from '../config'
import ChatForm from './ChatForm';
import ChatMessageList from './ChatMessageList';
import ChatChannel from './ChatChannel';
import NewChannel from './NewChannel';

class App extends Component {
  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    roomId: null
  }
  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator ,
      userId: 'thule',
      tokenProvider: new TokenProvider({ url: tokenUrl })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.getRooms()
    })
    .catch(err => console.log('error on connecting: ', err))
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom = (roomId) =>{
    this.setState({messages:[]})
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err))
  }

  formChange = (text) =>{
    this.currentUser.sendMessage ({
      roomId: "23467251",
      text: text
    })
  }

  createRoom = (name) => {
        this.currentUser.createRoom({
            name
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('error with createRoom: ', err))
    }

  render(){
    return(
    <div className="container">
      <h1>Hello Chat</h1>
      <ChatForm
        disable={!this.state.roomId}
        sendMessage={this.formChange}/>
      <ChatMessageList
        messages={this.state.messages} />
      <ChatChannel
        roomId={this.state.roomId}
        subscribeToRoom={this.subscribeToRoom}
        rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
         />
      <NewChannel createRoom={this.createRoom} />
    </div>
    )
  }

}

export default App
