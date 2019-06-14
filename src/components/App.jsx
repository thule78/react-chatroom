import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import { tokenUrl, instanceLocator } from '../config'
import ChatForm from './ChatForm';
import ChatMessageList from './ChatMessageList';
import ChatChannel from './ChatChannel';
import NewChannel from './NewChannel';

class App extends Component {
  state = {
    messages: []
  }
  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator ,
      userId: 'thule',
      tokenProvider: new TokenProvider({ url: tokenUrl })
    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: "23467251",
        messageLimit: 20,
        hooks: {
          onMessage: message => {
            this.setState({
              messages:[...this.state.messages, message]
            })
          }
        }
      })
    })
  }
  render(){
    return(
    <div className="container">
      <h1>Hello Chat</h1>
      <ChatForm />
      <ChatMessageList messages={this.state.messages} />
      <ChatChannel />
      <NewChannel />
    </div>
    )
  }

}

export default App
